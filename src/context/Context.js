import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../auth/firebase";

import { GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();
export const ContextProvider = createContext();

const ContextApi = ({ children }) => {
  const [loader, setLoader] = useState(true);
  const [user, setUser] = useState(null);

  const createUser = async (email, password) => {
    setLoader(true);
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = async (displayName) => {
    setLoader(true);
    const userImg =
      "https://www.shareicon.net/data/2016/05/24/770107_man_512x512.png";
    return await updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: userImg,
    });
  };

  const logOutUser = async () => {
    localStorage.removeItem("userInfo");
    return await signOut(auth);
  };

  const loginUser = async (email, password) => {
    setLoader(true);
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = async () => {
    return await signInWithPopup(auth, provider);
  };

  const authProps = {
    loader,
    user,
    updateUser,
    createUser,
    logOutUser,
    loginUser,
    googleLogin,
  };

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoader(false);
      } else {
        setUser(null);
      }
    });

    return () => subscribe();
  }, [user]);

  return (
    <ContextProvider.Provider value={{ ...authProps }}>
      {children}
    </ContextProvider.Provider>
  );
};

export default ContextApi;

export const Context = () => {
  return useContext(ContextProvider);
};
