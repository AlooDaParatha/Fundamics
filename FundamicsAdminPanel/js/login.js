import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword }
    from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

document.getElementById("loginBtn").addEventListener("click", async () => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const status = document.getElementById("status");

    try {
        await signInWithEmailAndPassword(auth, email, password);
        window.location.href = "dashboard.html";
    } catch (error) {
        status.style.color = "red";
        status.textContent = "Invalid Email or Password";
    }
});