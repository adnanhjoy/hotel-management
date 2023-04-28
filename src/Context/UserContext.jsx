import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

const auth = getAuth(app)

export const AuthContext = createContext()

const UserContext = ({ children }) => {
    const [user, setUser] = useState({})

    const nameUpdate = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }

    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])



    const authInfo = { user, creatUser, signIn, nameUpdate };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;