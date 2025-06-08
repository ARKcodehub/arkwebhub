// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDWI9zAV0LT4Jkwi0op9kEfjtxyZ9FOwLA",
  authDomain: "ark-web-hub.firebaseapp.com",
  projectId: "ark-web-hub",
  storageBucket: "ark-web-hub.appspot.com",
  messagingSenderId: "98514833666",
  appId: "1:98514833666:web:e2556895b33fec6160721b",
  measurementId: "G-NX4W84QCGV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
