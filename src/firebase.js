import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyDzR8tP8DlBn4KY3cSZodqT_WVAgVdy9Hk",
  authDomain: "netflix-clone-a6c62.firebaseapp.com",
  projectId: "netflix-clone-a6c62",
  storageBucket: "netflix-clone-a6c62.firebasestorage.app",
  messagingSenderId: "315993433552",
  appId: "1:315993433552:web:a589f25f57474fc4d105d5",
  measurementId: "G-H8L297P57L",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;
    await addDoc(collection(db, "user"), {
      uid: "user.uid",
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
   toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, login, signUp, logout };
