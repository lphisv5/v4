import { getFunctions, httpsCallable }
from "https://www.gstatic.com/firebasejs/10.7.0/firebase-functions.js";
import { app } from "./firebase.js";

const f = getFunctions(app);

export const sendOtp = email =>
  httpsCallable(f, "sendOtp")({ email });

export const verifyOtp = (email, otp) =>
  httpsCallable(f, "verifyOtp")({ email });
