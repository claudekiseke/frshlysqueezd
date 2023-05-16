import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  AuthErrorCodes,
  onAuthStateChanged,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDoc,
  getDocs,
  doc,
  collection,
  where,
  addDoc,
  setDoc,
  Timestamp
} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArWwNJ1GWR4eGm3Dq9F45XRRKwETL6NWg",
  authDomain: "clamp-circle.firebaseapp.com",
  projectId: "clamp-circle",
  storageBucket: "clamp-circle.appspot.com",
  messagingSenderId: "783578981370",
  appId: "1:783578981370:web:c70d0b7f9d2973f1c3fa43",
  measurementId: "G-844L8PS2JM"
};

// Initialize Firebase apps
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const logIn = async (email, password, setErr) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    if (err.code === AuthErrorCodes.INVALID_EMAIL) {
      setErr('Invalid email address');
    } else if (err.code === AuthErrorCodes.USER_NOT_FOUND) {
      setErr('User not found');
    } else if (err.code === AuthErrorCodes.WRONG_PASSWORD) {
      setErr('Incorrect password');
    } else {
      setErr('An error occurred. If this issue persists, please reach out to support@frshlysqueezd.com.');
    }
  }
};

export const signUp = async (fname, lname, email, password, occupation, industry, industryother, level, city, country, profilepic, twitter, instagram, medium, behance, github, portfolio, setError) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      authProvider: "local",
      fname,
      lname,
      email,
      password,
      occupation,
      industry,
      industryother,
      level,
      city,
      country,
      profilepic,
      twitter,
      instagram,
      medium,
      behance,
      github,
      portfolio
    });
  } catch (err) {
    if (err.code === AuthErrorCodes.EMAIL_EXISTS) {
    setError('You already have an account with this email! Log in or reset your password to continue.');
  } else if (err.code === AuthErrorCodes.INVALID_EMAIL) {
    setError('You already have an account with this email! Log in or reset your password to continue.');
  }
  }
};

const sendPasswordReset = async (email, setErr) => {
  try {
    await sendPasswordResetEmail(auth, email);
    setErr("Password reset link sent!");
  } catch (err) {
    if (err.code === AuthErrorCodes.INVALID_EMAIL) {
      setErr('Invalid email address. Are you sure this is the email you log in with? If this issue persists, please reach out to support@frshlysqueezd.com.');
    } else {
      setErr('An error occurred. If this issue persists, please reach out to support@frshlysqueezd.com.');
    }
  }
};

export const logout = () => {
  signOut(auth).then(() => {
  }).catch((err) => {
    // An error happened.
  });;
};

const getUserDetails = async (setFormData) => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setFormData(data)
      }
    }
  });
};

const updateAccount = async (formData) => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      await setDoc(doc(db, "users", user.uid), formData);
    }
  });
}

const contactSubmit = async (name, company, email, message) => {
  try {
    await addDoc(collection(db, "submissions"), {
      name,
      company,
      email,
      message,
      timeSent: Timestamp.fromDate(new Date())
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const resourceSubmit = async (title, url) => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
        await addDoc(collection(db, "resources"), {
          uid: user.uid,
          title,
          url,
          timeSent: Timestamp.fromDate(new Date())
        });
      } catch (err) {
        console.error(err);
        alert(err.message);
      }
    }
  });
};

export {
  auth,
  db,
  doc,
  getDoc,
  signOut,
  onAuthStateChanged,
  signInWithGoogle,
  sendPasswordReset,
  getUserDetails,
  updateAccount,
  contactSubmit,
  resourceSubmit
};