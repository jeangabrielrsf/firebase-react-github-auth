// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBOjKgzeQ2Y8LAiYYciqTZfgPloBxAZQRA",
	authDomain: "react-firebase-github-au-6c596.firebaseapp.com",
	projectId: "react-firebase-github-au-6c596",
	storageBucket: "react-firebase-github-au-6c596.appspot.com",
	messagingSenderId: "412084417572",
	appId: "1:412084417572:web:e0fb0ffdc4c7e4f38354b1",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };
