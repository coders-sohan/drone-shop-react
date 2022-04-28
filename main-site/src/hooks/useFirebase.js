import { useEffect, useState } from "react";
import initializeFirebase from "../components/Firebase/Firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// initialize firebase
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});

  const auth = getAuth();

  // register user
  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  // login user
  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  // observe user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // User is signed out
        setUser({});
      }
    });
    return () => unsubscribe;
  }, []);

  // logout user
  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return {
    user,
    registerUser,
    loginUser,
    logout,
  };
};

export default useFirebase;
