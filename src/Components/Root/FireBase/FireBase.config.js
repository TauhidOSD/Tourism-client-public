// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCppAeSivSUHaBnoqmQXy_dl6Q9qRSD3Dg",
  authDomain: "tourist-client.firebaseapp.com",
  projectId: "tourist-client",
  storageBucket: "tourist-client.appspot.com",
  messagingSenderId: "423383252315",
  appId: "1:423383252315:web:a2d8d30fa97c1c56caae7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth =getAuth(app);
export default app;