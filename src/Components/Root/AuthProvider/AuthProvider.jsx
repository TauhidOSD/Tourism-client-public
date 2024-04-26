// import {
//     createUserWithEmailAndPassword,
//     onAuthStateChanged,
//     signInWithEmailAndPassword,
//     // signInWithPopup,
//     signOut,
//     updateProfile,
//   } from "firebase/auth";
//   import { createContext, useEffect, useState } from "react";

// // import { auth } from "../Firebase/Firebase.config";
// import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth/cordova";


// import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

// import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import app from "../../../FireBase/FireBase.config";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

  
  export const AuthContext = createContext(null);
  

  const auth = getAuth(app);


  //social auth provider
const googleProvider = new GoogleAuthProvider();
const GitHubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    const [loading, setLoading] = useState(true);
    console.log(loading);
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoader(false);
        setLoading(false);
      });
      return () => {
        return unsubscribe();
      };
    }, []);
    // console.log(user);
    //  register with email and pass
    const createUser = (email, password) => {
      console.log(email, password);
      setLoader(true);
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
    //update user profile
    const updateUserData = (name, photo) => {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
    };
    // login with email & pass
    const login = (email, password) => {
      setLoader(true);
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
    // logOut
    const logout = () => {
      setLoader(true);
  
      return signOut(auth);
    };
    // google login
    const googleLogin = (provider) => {
      setLoader(true);
      setLoading(true);
      return signInWithPopup(auth, provider);
    };
    //GitHub login
    const GitHubLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, GitHubProvider);
    };
    
  
    console.log(user);
  
    const allValues = {
      GitHubLogin,
      user,
      loader,
      createUser,
      updateUserData,
      login,
      logout,
      googleLogin,
      loading,
      

      // logOut,
      // user,
    };
    return (
      <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
    );
  };
  
  AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;