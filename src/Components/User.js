import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState, useEffect } from "react";

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
  signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    return userCredential.user;
  });
};
export const useUser = () => {
  const auth = getAuth();
  const [user, setUser] = useState(null);
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
