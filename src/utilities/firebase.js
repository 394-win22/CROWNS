// Import the functions you need from the SDKs you need
import {useState, useEffect} from 'react';
import { initializeApp } from "firebase/app";
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

export const signInWithGoogle = async () => {
    signInWithPopup(getAuth(app), new GoogleAuthProvider());
};

const firebaseSignOut = () => signOut(getAuth(app));

export { firebaseSignOut as signOut };

export const useUserState = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        onIdTokenChanged(getAuth(app), setUser);
    }, []);

    return [user];
};


