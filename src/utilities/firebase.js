// Import the functions you need from the SDKs you need
import {useState, useEffect} from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, onIdTokenChanged, signInWithPopup, signOut } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyB8Xulh0Uh7Jy2AHJVQOiBf4vTK2F2aotw",
    authDomain: "crown-dd66d.firebaseapp.com",
    projectId: "crown-dd66d",
    storageBucket: "crown-dd66d.appspot.com",
    messagingSenderId: "640118822953",
    appId: "1:640118822953:web:6b9e6891d3c429d79ea438"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore();

const firebaseSignOut = () => signOut(getAuth(app));


export { firebaseSignOut as signOut };

export const useUserState = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        onIdTokenChanged(getAuth(app), setUser);
    }, []);

    return [user];
};

export const uploadUser = async (id, data) => {
    const existingUserRef = doc(db, "users", id)
    const existingUser = await getDoc(existingUserRef)
    if (existingUser.exists()) {
      return;
    }
  
    const docRef = await setDoc(existingUserRef, data);
    if (docRef.ok) return true;
    else {
      console.log(docRef);
      return false;
    }
  }

  export const signInWithGoogle = async () => {
    const user = await signInWithPopup(getAuth(app), new GoogleAuthProvider());
    uploadUser(user.user.uid, 
        {userName: user.user.displayName, hairType: "", postIds: []});
};

