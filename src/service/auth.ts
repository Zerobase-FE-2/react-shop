import { authService } from './firebase';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
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
