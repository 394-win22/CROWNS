// Import the functions you need from the SDKs you need
import { useEffect, useState, useCallback } from "react";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, getDoc, doc, setDoc, updateDoc, connectFirestoreEmulator} from "firebase/firestore";
import { getAuth, GoogleAuthProvider, onIdTokenChanged, signInWithPopup, signOut, connectAuthEmulator, signInWithCredential } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB8Xulh0Uh7Jy2AHJVQOiBf4vTK2F2aotw",
    authDomain: "crown-dd66d.firebaseapp.com",
    projectId: "crown-dd66d",
    storageBucket: "crown-dd66d.appspot.com",
    messagingSenderId: "640118822953",
    appId: "1:640118822953:web:6b9e6891d3c429d79ea438"
};
const app = getApps().length === 0? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
const auth = getAuth(app);

if (window.Cypress) {
    connectAuthEmulator(auth, "localhost:9099");
    connectFirestoreEmulator(db, "localhost", 9000);
  
    signInWithCredential(auth, GoogleAuthProvider.credential(
      '{"sub": "bcf1ucJn4ya8ou09q7uoNAUETKrL", "email": "tester@gmail.com", "displayName":"Test User", "email_verified": true}'
    ));
}

const firebaseSignOut = async (navigate = null) => {
    await signOut(getAuth(app));
    if (navigate) navigate("/");
}


export { firebaseSignOut as signOut };

export const useUserState = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        onIdTokenChanged(getAuth(app), setUser);
    }, []);

    return [user];
};

export const useUser = (collectionName, userID) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const getUser = useCallback(async (collectionName, userID) => {
        try {
            const docRef = doc(db, collectionName, userID);
            const docSnap = await getDoc(docRef);
            const devMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
            if (devMode) { console.log(`loading ${collectionName}`); }
            const data = docSnap.data();
            setData(data);
            setLoading(false);
            setError(null);
        } catch (e) {
            setData(null);
            setLoading(false);
            setError(e);
        }
    }, []);

    useEffect(() => {
        getUser(collectionName, userID);
    }, [collectionName, userID, getUser]);

    return [data, loading, error];
};

export const uploadUser = async (id, data) => {
    const existingUserRef = doc(db, "users", id)
    const existingUser = await getDoc(existingUserRef)
    if (existingUser.exists()) {
      const userData = existingUser.data();
      console.log("user Exists");
      return userData;
    }

    const docRef = await setDoc(existingUserRef, data);
    if (docRef.ok) return true;
    else {
        console.log(docRef);
        return false;
    }
}

export const setUser = async (id, data) => {
    const existingUserRef = doc(db, "users", id)
    const existingUser = await getDoc(existingUserRef)
    if (!existingUser.exists()) {
        return;
    }

    await updateDoc(existingUserRef, data);
}

  export const signInWithGoogle = async () => {
    const user = await signInWithPopup(getAuth(app), new GoogleAuthProvider());
    return uploadUser(user.user.uid, 
        {userName: user.user.displayName, hairType: "", postIds: []});
};

export const getUserById = async(collectionName, userID) => {
  const docRef = doc(db, collectionName, userID);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();
  return data;
};

