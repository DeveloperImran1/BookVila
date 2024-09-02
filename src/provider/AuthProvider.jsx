import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    // email auth provider 
    const register = (email, password)=> {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

  
        // login with google
        const googleProvider = new GoogleAuthProvider();
        const signInGoogle = () => {
            setLoading(true);
            return signInWithPopup(auth, googleProvider)
        }


    // login user
    const login = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout 
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    // profile pic and name add 
    const handleUpdateProfile = (name, photo)=> {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log("current user is--> ", currentUser)
            setLoading(false)
        })


        return ()=>{
            unSubscribe()
        }
    }, [])


    const authInfo = {register, signInGoogle, login, logOut, loading, setLoading, user, handleUpdateProfile }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;