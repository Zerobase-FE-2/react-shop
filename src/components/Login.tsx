import React, { useCallback } from 'react';
import tw from 'tailwind-styled-components';
import { Link } from 'react-router-dom';
import { LockClosedIcon } from '@heroicons/react/solid';
import githubIcon from '../assets/icon/iconGithub.svg';
import googleIcon from '../assets/icon/iconGoogle.svg';

import * as AuthService from '../service/auth';
import { SubmitHandler, useForm } from 'react-hook-form';

interface LogInInputs {
  email: string;
  password: string;
}

const LoginSection = tw.section`
  min-h-screen flex items-center justify-center bg-white dark:bg-gray-800 py-12 px-4 sm:px-6 lg:px-8
  `;
const LoginTitle = tw.h2`
  mt-6 text-center text-3xl font-extrabold text-black dark:text-white
  `;
const Input = tw.input`
  appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm
  `;

const SignInBtn = tw.button`
  group relative w-1/2 ml-1 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
  `;

const SignUpBtn = tw.div`
  group relative w-1/2 flex mr-1 justify-center  border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
  `;

const Error = tw.p`
  text-red-500
  `;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogInInputs>();

  const onSubmit: SubmitHandler<LogInInputs> = useCallback(async (data, e) => {
    const { email, password } = data;
    try {
      e?.target.reset();
      await AuthService.signIn(email, password);
    } catch (error) {
      if (typeof error == 'string') {
        alert(error);
      } else {
        alert((error as Error).message);
      }
    }
  }, []);

  const handleGoogle = useCallback(async () => {
    try {
      await AuthService.googleSignIn();
    } catch (error) {
      if (typeof error == 'string') {
        alert(error);
      } else {
        alert((error as Error).message);
      }
    }
  }, []);

  const handleGithub = useCallback(async () => {
    try {
      await AuthService.githubSignIn();
    } catch (error) {
      if (typeof error == 'string') {
        alert(error);
      } else {
        alert((error as Error).message);
      }
    }
  }, []);

  return (
    <LoginSection>
      <div className="max-w-md w-full space-y-8">
        <LoginTitle>Log in to React-shop</LoginTitle>
        <form
          action="submit"
          className="mt-8 space-y-6"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input type="hidden" name="remember" defaultValue="true" />
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <Input
              type="email"
              placeholder="What is your email"
              {...register('email', { required: true })}
            />
            <Error>{errors.email?.message}</Error>
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <Input
              type="password"
              placeholder="Write your password"
              {...register('password', { required: true })}
            />
            <Error>{errors.password?.message}</Error>
          </div>

          <div className="flex">
            <SignUpBtn>
              <Link
                className="w-full h-full py-2 px-4 flex justify-center"
                to="/signup"
              >
                Sign Up
              </Link>
            </SignUpBtn>

            <SignInBtn type="submit">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Log In
            </SignInBtn>
          </div>
          <div className="flex items-center justify-around">
            <div className="btn btn-ghost" onClick={handleGithub}>
              <img src={githubIcon} className="h-10 w-10" alt="Icon_github" />
              {/* <img src='../assets/icon/iconGithub.svg' className="h-10 w-10" alt="Icon_github" /> */}
            </div>
            <div className="btn btn-ghost" onClick={handleGoogle}>
              <img src={googleIcon} className="h-10 w-10" alt="Icon_google" />
              {/* <img src='../assets/icon/iconGoogle.svg' className="h-10 w-10" alt="Icon_google" /> */}
            </div>
          </div>
        </form>
      </div>
    </LoginSection>
  );
};

export default React.memo(Login);
