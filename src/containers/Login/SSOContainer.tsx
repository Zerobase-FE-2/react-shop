import React from 'react';

import { githubSignIn, googleSignIn } from '../../service/auth';
import { setSSOLoginSession } from '../../libs/setLoginSession';

import { useAppDispatch } from '../../hooks/rtkHooks';
import { logIn } from '../../reducers/userSlice';

import { ReactComponent as GithubIcon } from '../../assets/icon/iconGithub.svg';
import { ReactComponent as GoogleIcon } from '../../assets/icon/iconGoogle.svg';

interface SSOProps {
  isSignup: boolean;
}

export default function SSOContainer({ isSignup }: SSOProps) {
  const dispatch = useAppDispatch();

  const loginWithGoogle = async () => {
    try {
      const {
        user: { user: loggedInUser },
      } = await setSSOLoginSession(googleSignIn);
      dispatch(
        logIn({
          username: loggedInUser.displayName || '',
          email: loggedInUser.email!,
          uid: loggedInUser.uid,
        })
      );
    } catch (error) {
      if (typeof error == 'string') {
        alert(error);
      } else {
        alert((error as Error).message);
      }
    }
  };

  const loginWithGithub = async () => {
    try {
      const {
        result: { user: loggedInUser },
      } = await setSSOLoginSession(githubSignIn);
      dispatch(
        logIn({
          username: loggedInUser.displayName || '',
          email: loggedInUser.email!,
          uid: loggedInUser.uid,
        })
      );
    } catch (error) {
      if (typeof error == 'string') {
        alert(error);
      } else {
        alert((error as Error).message);
      }
    }
  };

  return (
    <div
      className={`flex  items-center justify-around ${
        isSignup ? 'w-full space-x-2' : ''
      }`}
    >
      {isSignup && <span className="text-lg font-bold">Sign Up with SNS</span>}
      <button
        className={`btn btn-ghost ${isSignup ? '' : 'w-1/2'}`}
        onClick={loginWithGithub}
      >
        <GithubIcon />
      </button>
      <button
        className={`btn btn-ghost ${isSignup ? '' : 'w-1/2'}`}
        onClick={loginWithGoogle}
      >
        <GoogleIcon />
      </button>
    </div>
  );
}
