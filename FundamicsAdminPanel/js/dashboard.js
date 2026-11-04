import { auth, db } from "./firebase-config.js";
import { onAuthStateChanged, signOut }
    from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { collection, getDocs, query, orderBy }
    from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

const container = document.getElementById("enquiryContainer");
const totalCount = document.getElementById("totalCount");

// Protect Page
onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = "login.html";
    } else {
        loadEnquiries();
    }
});

// Logout
document.getElementById("logoutBtn").addEventListener("click", async () => {
    await signOut(auth);
    window.location.href = "login.html";
});

async function loadEnquiries() {

    const q = query(collection(db, "admissionInquiries"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);

    totalCount.innerText = snapshot.size;
    container.innerHTML = "";

    snapshot.forEach(doc => {
        const data = doc.data();

        const card = document.createElement("div");
        card.className = "enquiry-card";

        card.innerHTML = `
            <h4>${data.studentName} (${data.class})</h4>
            <p><strong>Parent:</strong> ${data.parentName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Stream:</strong> ${data.stream || "N/A"}</p>
            <p><strong>Message:</strong> ${data.message || "N/A"}</p>
            <small>${data.createdAt?.toDate().toLocaleString()}</small>
        `;

        container.appendChild(card);
    });
}