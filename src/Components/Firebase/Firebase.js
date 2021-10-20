import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  connectAuthEmulator,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signInWithEmailAndPassword,
} from "firebase/auth";

import config from "./firebaseconfig.json";
import { useState, useEffect } from "react";

if (process.env.NODE_ENV !== "production") {
  const debugConfig = {
    apiKey: "AIzaSyCt3m5Oj3LPSFK-8yzG3BKFaEdIUupKfvQ",
    authDomain: "rexdreams-1.firebaseapp.com",
    projectId: "rexdreams-1",
    storageBucket: "rexdreams-1.appspot.com",
    messagingSenderId: "198828654718",
    appId: "1:198828654718:web:e2b2c2a165771c06bf182f",
  };
  initializeApp(debugConfig);
  const auth = getAuth();
  connectAuthEmulator(auth, "http://localhost:9099");
} else {
  initializeApp(config);
}

export const signUpEmail = ({ email, password }) => {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      // Signed in
      return userCredential.user;
      // ...
    }
  );
};
export const logInEmail = ({ email, password }) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      return userCredential.user;
    }
  );
};
export const signUpGoogle = ({ useRedirect }) => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  if (useRedirect) return signInWithRedirect(auth, provider);
  else
    return signInWithPopup(auth, provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      return credential.user;
      // ...
    });
};
export const useUser = () => {
  const auth = getAuth();
  const [user, setUser] = useState(auth.currentUser);
  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
        // ...
      } else {
        // User is signed out
        // ...
        setUser(null);
      }
    });
  });
  return user;
};

export const logOut = () => {
  const auth = getAuth();
  return signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};
