import firebase from "firebase";
//require("@firebase/firestore");

//Paste https://github.com/rashmi-sathya/E-RIDE-STAGE-4-template
const firebaseConfig = {
  apiKey: "AIzaSyDeTg-uDNoWoBqth_jCFpP316sH1Hh8crA",
  authDomain: "project-c78-e0c19.firebaseapp.com",
  projectId: "project-c78-e0c19",
  storageBucket: "project-c78-e0c19.appspot.com",
  messagingSenderId: "231443718067",
  appId: "1:231443718067:web:6d89b86eb1b4ce7626b5c6"
};




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


