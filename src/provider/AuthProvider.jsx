import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../config/firebase.config";
import useAxios from "../hooks/useAxios";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const axios = useAxios();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
      console.log("user", user);

      const userInfo = {
        email: currentUser?.email,
      };

      if (currentUser) {
        axios
          .post("/createToken", userInfo)
          .then((data) => console.log(data.data));
      } else {
        axios.post("/logOut", userInfo).then((data) => {
          console.log(data);
        });
      }
    });
    return () => {
      return () => unSubscribe();
    };
  }, [user, axios]);

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUser = (name, pic) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: pic,
    });
  };

  const authInfo = {
    user,
    loading,
    createUser,
    login,
    googleLogin,
    logOut,
    updateUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
