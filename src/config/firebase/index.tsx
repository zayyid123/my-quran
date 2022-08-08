// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDDq2AT2PK-rIglg_wvv6ItA1jahE7INwo",
    authDomain: "my-quran-270e5.firebaseapp.com",
    projectId: "my-quran-270e5",
    storageBucket: "my-quran-270e5.appspot.com",
    messagingSenderId: "1080707293215",
    appId: "1:1080707293215:web:78d3566ac4bd257cf0752a",
    measurementId: "G-4L7DQQ4YYH"
};

// Initialize Firebase
const fbConfig = initializeApp(firebaseConfig);

export default fbConfig