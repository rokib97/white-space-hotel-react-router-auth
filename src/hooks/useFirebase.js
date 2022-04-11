import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import auth from "../firebase.init";

const useFirebase = () => {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();

  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return { user, handleSignInWithGoogle };
};

export default useFirebase;
