import { db } from "./firebase-config.js";
import { collection, addDoc, serverTimestamp }
    from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

const form = document.getElementById("admissionForm");
const statusText = document.getElementById("formStatus");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const parentName = document.getElementById("parentName").value;
    const studentName = document.getElementById("studentName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const studentClass = document.getElementById("class").value;
    const stream = document.getElementById("stream").value;
    const message = document.getElementById("message").value;

    try {
        await addDoc(collection(db, "admissionInquiries"), {
            parentName,
            studentName,
            email,
            phone,
            class: studentClass,
            stream,
            message,
            createdAt: serverTimestamp()
        });

        statusText.style.color = "green";
        statusText.textContent = "Inquiry submitted successfully!";

        form.reset();

    } catch (error) {
        console.error(error);
        statusText.style.color = "red";
        statusText.textContent = "Something went wrong. Please try again.";
    }
});