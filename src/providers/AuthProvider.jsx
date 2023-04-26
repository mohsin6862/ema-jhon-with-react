import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const UserContext = createContext(null)
const AuthProvider = ({children}) => {
    const auth = getAuth(app);

    const [user, setUser]=useState(null)
    const [loader,setLoader]=useState(true)

    const createUser =(email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    };

    const Logout =()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser=>{
            setUser(currentUser);
            setLoader(false)

        })
        return ()=>{
            return unsubscribe()
        }
    },[])
    const userInfo ={

        user,
        createUser,
        signIn,
        Logout,
        loader,
       
    }
    return (
        <UserContext.Provider value={userInfo}>

            {children}
            
        </UserContext.Provider>
    );
};

export default AuthProvider;