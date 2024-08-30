import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA4IYHWulGM4l386qZ5FLFsZ9-wPHXS78E",
    authDomain: "ishaara-663e1.firebaseapp.com",
    databaseURL: "https://ishaara-663e1-default-rtdb.firebaseio.com",
    projectId: "ishaara-663e1",
    storageBucket: "ishaara-663e1.appspot.com",
    messagingSenderId: "922017881840",
    appId: "1:922017881840:web:248b483ee01b23fe1fec35",
    measurementId: "G-10F7GNRXXT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);


//login function
const login = document.getElementById("submit");
login.addEventListener("click", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            alert("login successful");
            window.location.href = "main.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert("User not registered! Try creating New account...");
        });
})