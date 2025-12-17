import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "yanzz-6e06c.firebaseapp.com",
  databaseURL: "https://yanzz-6e06c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "yanzz-6e06c"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
