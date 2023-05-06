import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDFF-FcQbmdqUn6AJV4FfXorlgZ4acQjw8",
  authDomain: "punchstories-9c307.firebaseapp.com",
  projectId: "punchstories-9c307",
  storageBucket: "punchstories-9c307.appspot.com",
  messagingSenderId: "159361708502",
  appId: "1:159361708502:web:bb65d426a2b6e783e6b477",
  measurementId: "G-PGL4ZM5FE2",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: "select_account" });

export const FacebookProvider = new firebase.auth.FacebookAuthProvider();
FacebookProvider.setCustomParameters({ prompt: "select_account" });

export const handleUserProfile = async ({ userAuth, additionalData }) => {
  if (!userAuth) return;
  const { uid } = userAuth;

  const userRef = firestore.doc(`users/${uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const timestamp = new Date();
    const userRoles = ["user", "verified"];

    try {
      await userRef.set({
        displayName,
        email,
        createdDate: timestamp,
        userRoles,
        userVotes: ["1"],
        numberVotes: 0,
        experience: 0,
        points: 0,
        ...additionalData,
      });
    } catch (err) {
      // console.log(err);
    }
  }

  return userRef;
};

export const handleUserProfileSocialLogin = async ({
  userAuth,
  additionalData,
}) => {
  if (!userAuth) return;
  const { uid } = userAuth;

  const userRef = firestore.doc(`users/${uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const timestamp = new Date();
    const userRoles = ["user", "verified"];

    try {
      await userRef.set({
        displayName,
        email,
        createdDate: timestamp,
        userRoles,
        userVotes: ["1"],
        numberVotes: 0,
        ...additionalData,
      });
    } catch (err) {
      // console.log(err);
    }
  }

  return userRef;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export default firebase;
