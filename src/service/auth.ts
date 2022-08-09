import { GithubAuthProvider } from 'firebase/auth';
import { authService } from './firebase';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { SetStateAction } from 'react';
type email = string;
type password = string;

export const signUp = async (email: email, password: password) => {
  await createUserWithEmailAndPassword(authService, email, password)
    .then((userCredential) => {
      //signed In
      const user = userCredential.user;
      console.log('signed up', user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      throw new Error(errorMessage);
    });
};

export const signIn = async (email: email, password: password) => {
  await signInWithEmailAndPassword(authService, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('sign in', user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      throw new Error(errorMessage);
    });
};

export const logOut = async () => {
  alert('로그아웃 되었습니다.');
  await signOut(authService)
    .then(() => {
      //signOut successful
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

export const me = (setIsLoggedIn: React.Dispatch<SetStateAction<string>>) => {
  onAuthStateChanged(authService, (user) => {
    if (user) {
      setIsLoggedIn(user.uid);
    } else {
      setIsLoggedIn('');
    }
  });
};

export const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(authService, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      throw new Error(errorMessage);
    });
};

export const githubSignIn = () => {
  const provider = new GithubAuthProvider();
  signInWithPopup(authService, provider)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GithubAuthProvider.credentialFromError(error);
      throw new Error(errorMessage);
    });
};
