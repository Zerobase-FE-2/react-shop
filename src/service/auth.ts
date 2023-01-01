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
import { FirebaseError } from 'firebase/app';

type email = string;
type password = string;

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const signUp = async (email: email, password: password) => {
  let user;
  try {
    user = await createUserWithEmailAndPassword(authService, email, password);
  } catch (error) {
    let message;
    if (error instanceof Error) {
      message = error.message;
    } else message = String(error);
    throw new Error(message);
  }
  return user;
};

export const signIn = async (email: email, password: password) => {
  try {
    return await signInWithEmailAndPassword(authService, email, password);
  } catch (error) {
    let message;
    if (error instanceof Error) {
      message = error.message;
    } else message = String(error);
    throw new Error(message);
  }
};

export const googleSignIn = async () => {
  try {
    const user = await signInWithPopup(authService, googleProvider);
    const token = GoogleAuthProvider.credentialFromResult(user)?.accessToken;
    return { user, token };
  } catch (error) {
    let message;
    if (error instanceof Error) {
      message = error.message;
    } else message = String(error);
    throw new Error(message);
  }
};

export const githubSignIn = async () => {
  try {
    const user = await signInWithPopup(authService, githubProvider);
    const token = GithubAuthProvider.credentialFromResult(user)?.accessToken;
    return { user, token };
  } catch (error) {
    let message;
    const credential = GithubAuthProvider.credentialFromError(
      error as FirebaseError
    );
    if (error instanceof Error) {
      message = error.message;
    } else message = String(error);
    throw new Error(message);
  }
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
