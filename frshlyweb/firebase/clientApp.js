import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
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
  setDoc
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

export const logIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const signUp = async (fname, lname, email, password, occupation, industry, industryother, level, city, country, profilepic, twitter, instagram, medium, behance, github) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await setDoc(doc(db, "users", user.uid),  {
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
      github
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const logout = () => {
  signOut(auth).then(() => {
  }).catch((err) => {
      // An error happened.
    });;
};

export {
  auth,
  db,
  doc,
  getDoc,
  signOut,
  onAuthStateChanged,
  signInWithGoogle,
  sendPasswordReset
};