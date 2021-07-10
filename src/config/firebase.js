 import firebase from "firebase";
 
 export const firebaseConfig = {
    apiKey: "AIzaSyBPxwE6w62hOtR-ECeNCBCn-WeFS-IHSuk",
    authDomain: "bachelor-thesis-99898.firebaseapp.com",
    projectId: "bachelor-thesis-99898",
    storageBucket: "bachelor-thesis-99898.appspot.com",
    messagingSenderId: "679724362165",
    appId: "1:679724362165:web:20ca4632530b262a9451fc",
    measurementId: "G-MNYWSCDZD1"
  };


  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }

  export default firebase