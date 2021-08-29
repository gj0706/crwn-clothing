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

// /**
//  * A function that take the uerAuth object we got back from the authentication library and store inside the database 
//  * @param {object} userAuth user authentication object we get back from signing in with Google account 
//  * @param {object} additionalData other useful data we get back
//  * @returns 
//  */
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return; // if signed in, we get the valid userAuth object, if not, we only get null

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    console.log(snapShot);
    // console.log(firestore.doc('users/128fdashadu'));
    
    if(!snapShot.exists) {
        const { displayName, email}  = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }catch(error){
            console.log('error creating user', error.message);
        }   
    }
    return userRef;
 };

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'} );
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;