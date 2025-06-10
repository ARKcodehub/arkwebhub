
import { auth } from './firebase-init.js';
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

const authControls = document.querySelector(".auth-controls");

function createProfileDropdown(user) {
  authControls.innerHTML = `
    <div class="profile-container">
      <img src="${user.photoURL}" class="profile-pic" title="${user.displayName}" />
      <span class="profile-name">${user.displayName}</span>
      <div class="dropdown-menu">
        <button id="logoutBtn">Logout</button>
      </div>
    </div>
  `;

  const profileContainer = document.querySelector(".profile-container");
  profileContainer.addEventListener("click", () => {
    document.querySelector(".dropdown-menu").classList.toggle("show");
  });

  document.getElementById("logoutBtn").addEventListener("click", () => {
    signOut(auth).then(() => {
      location.reload();
    });
  });
}

function createLoginButton() {
  authControls.innerHTML = `<button id="googleLogin" class="auth-btn">Login</button>`;
  document.getElementById("googleLogin").addEventListener("click", () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .catch((error) => console.error("Login error:", error.message));
  });
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    createProfileDropdown(user);
  } else {
    createLoginButton();
  }
});
