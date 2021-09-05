import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA5IgGNgCcnRxrFbOh6zplT1vZYtXAdDIY",
    authDomain: "obathewan-b45f3.firebaseapp.com",
    databaseURL: "https://obathewan-b45f3-default-rtdb.firebaseio.com",
    projectId: "obathewan-b45f3",
    storageBucket: "obathewan-b45f3.appspot.com",
    messagingSenderId: "537900321893",
    appId: "1:537900321893:web:66f2fb16cb2d01ef2d0a8c",
    measurementId: "G-LKZZCR5EM2"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;