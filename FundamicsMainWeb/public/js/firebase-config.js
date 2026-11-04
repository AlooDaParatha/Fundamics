// js/firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCtOF7VYHVBraOnml8VksUo_1vPp5fKdlU",
    authDomain: "fundemicstutorialss.firebaseapp.com",
    projectId: "fundemicstutorialss",
    storageBucket: "fundemicstutorialss.firebasestorage.app",
    messagingSenderId: "1017511766005",
    appId: "1:1017511766005:web:d43d3472cfbfcacd0a22bc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };