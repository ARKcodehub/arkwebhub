// auth-handler.js
import { auth } from './firebase-init.js';
import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

const loginBtn = document.getElementById("googleLogin");
const userDisplay = document.getElementById("userDisplay");

if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        userDisplay.style.display = "inline";
        userDisplay.textContent = `Welcome, ${user.displayName}`;
        loginBtn.style.display = "none";
      })
      .catch((error) => {
        console.error("Google Sign-In Error:", error.message);
      });
  });
}
