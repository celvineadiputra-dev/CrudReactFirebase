import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyC5QeTJ9WsvSRW7-EVjFxf8Q64L8YSAF0Y",
    authDomain: "reactcrud-da7ef.firebaseapp.com",
    projectId: "reactcrud-da7ef",
    storageBucket: "reactcrud-da7ef.appspot.com",
    messagingSenderId: "1045745577714",
    appId: "1:1045745577714:web:90beff79f70fa536292a6b",
    measurementId: "G-FF1P274K7Y"
};

var fireDB = firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default fireDB.database().ref();