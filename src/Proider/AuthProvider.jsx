import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIng = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        signOut(auth)
    }
    const updateUser=(name,photoUrl)=>{
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
          })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                console.log(currentUser);
            }
            setLoading(false);
        });
        return ()=> unsubscribe;
    }, []);
    

    const authInfo = {
        user,
        createUser,
        signIng,
        logOut,
        updateUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;