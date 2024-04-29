import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
   
  } from "firebase/auth";
  import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
// import auth from "../../Firebase/Firebase.config";
import auth from "./../FireBase/FireBase.config"

export const AuthContext = createContext(null);

//social auth provider
const googleProvider = new GoogleAuthProvider();
const GitHubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const [loading, setLoading] = useState(true);

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

  const createUser = (email, password) => {
    setLoader(true);
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserData = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const login = (email, password) => {
    setLoader(true);
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setLoader(true);
    return signOut(auth);
  };

  const googleLogin = (provider) => {
    setLoader(true);
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const GitHubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, GitHubProvider);
  };

  const allValues = {
    GitHubLogin: () => GitHubLogin(GitHubProvider),
    user,
    loader,
    createUser,
    updateUserData,
    login,
    logout,
    googleLogin,
    loading,
  };

  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};


export default AuthProvider;