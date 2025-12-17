require("dotenv").config();
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const emailjs = require("@emailjs/nodejs");

admin.initializeApp();

exports.sendOtp = functions.https.onCall(async (data) => {
  const email = data.email;
  if (!email) throw new functions.https.HttpsError("invalid-argument");

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  await admin.database().ref("otps/" + Buffer.from(email).toString("hex")).set({
    otp,
    expires: Date.now() + 5 * 60 * 1000
  });

  await emailjs.send(
    process.env.EMAILJS_SERVICE,
    process.env.EMAILJS_TEMPLATE,
    { to_email: email, otp },
    { publicKey: process.env.EMAILJS_PUBLIC }
  );

  return { success: true };
});
