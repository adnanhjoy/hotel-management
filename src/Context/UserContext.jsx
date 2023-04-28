import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

const auth = getAuth(app)

export const AuthContext = createContext()

const UserContext = ({ children }) => {
    const [user, setUser] = useState({ email: 'example@gmail.com' })

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

    

    const authInfo = { user, creatUser, signIn, nameUpdate };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;