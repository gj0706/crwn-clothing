import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = { 
    apiKey: "AIzaSyBFnETF_GrPRBt7ZY4ddxO4Yyg8C9k8XHM",
    authDomain: "crwn-db-b897c.firebaseapp.com",
    projectId: "crwn-db-b897c",
    storageBucket: "crwn-db-b897c.appspot.com",
    messagingSenderId: "556919148887",
    appId: "1:556919148887:web:cdf890817b2e2bcd1a2e12",
    measurementId: "G-WBD2Q3W209"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'} );
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;