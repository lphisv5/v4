import { auth, db } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { ref, set } from
"https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

export async function register(email, password) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  await set(ref(db, "users/" + cred.user.uid), {
    email,
    verified: false,
    createdAt: Date.now()
  });
}

export async function login(email, password) {
  await signInWithEmailAndPassword(auth, email, password);
}
