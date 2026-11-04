import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCtOF7VYHVBraOnml8VksUo_1vPp5fKdlU",
    authDomain: "fundemicstutorialss.firebaseapp.com",
    projectId: "fundemicstutorialss",
    storageBucket: "fundemicstutorialss.firebasestorage.app",
    messagingSenderId: "1017511766005",
    appId: "1:1017511766005:web:3cfb38921e7585b00aa22bc"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);