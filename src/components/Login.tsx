import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import { LockClosedIcon } from '@heroicons/react/solid';
import githubIcon from '../assets/icon/iconGithub.svg';
import googleIcon from '../assets/icon/iconGoogle.svg';

import * as AuthService from '../service/auth';

const Login = () => {
  const LoginSection = tw.section`
  min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8
  `;
  const LoginTitle = tw.h2`
  mt-6 text-center text-3xl font-extrabold text-gray-900
  `;
  const EmailInput = tw.input`
  appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm
  `;

  const PasswordInput = tw.input`
  appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm
  `;

  const SignInBtn = tw.button`
  group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
  `;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUp, setSignUp] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;
      case 'signUp':
        setSignUp(checked);
        break;
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (signUp) {
        AuthService.signUp(email, password);
      } else {
        AuthService.signIn(email, password);
      }
    } catch (error) {
      if (typeof error == 'string') {
        alert(error);
      } else {
        alert((error as Error).message);
      }
    }
  };

  const handleGoogle = () => {
    try {
      AuthService.googleSignIn();
    } catch (error) {
      if (typeof error == 'string') {
        alert(error);
      } else {
        alert((error as Error).message);
      }
    }
  };

  const handleGithub = () => {
    try {
      AuthService.githubSignIn();
    } catch (error) {
      if (typeof error == 'string') {
        alert(error);
      } else {
        alert((error as Error).message);
      }
    }
  };

  return (
    <LoginSection>
      <div className="max-w-md w-full space-y-8">
        <LoginTitle>{signUp ? 'Sign Up' : 'Sign In'} to React-shop</LoginTitle>

        <form
          action="submit"
          className="mt-8 space-y-6"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="remember" defaultValue="true" />
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <EmailInput
              type="email"
              name="email"
              autoComplete="email"
              required
              placeholder="What is your email"
              onChange={handleChange}
              value={email}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <PasswordInput
              type="password"
              name="password"
              placeholder="Write your password"
              autoComplete="current-password"
              required
              onChange={handleChange}
              value={password}
            />
          </div>

          <div>
            <SignInBtn type="submit">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              {signUp ? 'Sign Up' : 'Sign In'}
            </SignInBtn>
          </div>
          <div className="flex items-center justify-around">
            {signUp && (
              <span className="text-lg font-bold">Sign Up with SNS</span>
            )}
            <div className="btn btn-ghost" onClick={handleGithub}>
              <img src={githubIcon} className="h-10 w-10" alt="Icon_github" />
            </div>
            <div className="btn btn-ghost" onClick={handleGoogle}>
              <img src={googleIcon} className="h-10 w-10" alt="Icon_google" />
            </div>
          </div>
          <div className="flex items-center justify-end">
            <label htmlFor="signUp">If you don't have ID? </label>
            <input
              type="checkbox"
              name="signUp"
              onChange={handleChange}
              checked={signUp}
            />
          </div>
        </form>
      </div>
    </LoginSection>
  );
};

export default Login;
