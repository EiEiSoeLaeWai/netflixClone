// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {addDoc, getFirestore,collection } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { toast } from "react-toastify";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ563hS4ybYOf_UIT1hWN4cqJq8v46wb8",
  authDomain: "netflix-clone-22182.firebaseapp.com",
  projectId: "netflix-clone-22182",
  storageBucket: "netflix-clone-22182.firebasestorage.app",
  messagingSenderId: "13206025676",
  appId: "1:13206025676:web:407c0c04984b3bdb165969",
  measurementId: "G-3SMKHFE4L3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name,email,password)=>{
    try{
       const res =  await createUserWithEmailAndPassword(auth,email,password);
       const user = res.user;
       await addDoc(collection(db,"user"),{
        uid: user.uid,
        name,
        authProvider: "local",
        email,
       });
    }catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = () =>{
    signOut(auth);
}

export {auth,db,login,signup,logout};