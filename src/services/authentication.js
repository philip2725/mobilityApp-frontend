import firebase from "../config/firebase";


const auth = firebase.auth()

export function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
}

export function register(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
}

export function getCurrentUser() {
    return auth.currentUser;
}

export function logout() {
    return auth.signOut();
}



