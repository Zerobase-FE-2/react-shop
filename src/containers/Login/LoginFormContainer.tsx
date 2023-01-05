import React from 'react';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useAppDispatch } from '../../hooks/rtkHooks';
import { setLoginSession } from '../../libs/setLoginSession';
import { logIn } from '../../reducers/userSlice';

import Btn from '../../components/Login/btn';
import ErrorMessage from '../../components/Login/error';
import Input from '../../components/Login/input';

export interface EnterForm {
  email: string;
  password: string;
}

export default function LoginFormContainer() {
  const [error, setError] = useState('');
  const dispatch = useAppDispatch();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<EnterForm>({ mode: 'onChange' });

  const onValid = async (validForm: EnterForm) => {
    const { email, password } = validForm;
    try {
      const { user: loggedInUser } = await setLoginSession({ email, password });
      dispatch(
        logIn({
          username: loggedInUser.displayName || '',
          email: loggedInUser.email!,
          uid: loggedInUser.uid,
        })
      );
    } catch (error) {
      setError('check your email address or password');
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onValid)} className="mt-6 space-y-3">
      <ErrorMessage message={error} isTitle={true} />
      <Input
        type="email"
        label="Email"
        placeholder="Write your Email"
        required={true}
        register={register('email', { required: 'Email Address is required' })}
        name="email"
      />
      <ErrorMessage message={errors.email?.message} />

      <Input
        type="password"
        label="Password"
        name="password"
        required={true}
        placeholder="Write your password"
        register={register('password', { required: 'Password is required' })}
      />
      <ErrorMessage message={errors.password?.message} />
      <div className="flex space-x-2">
        <Btn isLarge={false} name="Sign Up" kind="link" />
        <Btn isLarge={false} name="Log In" kind="btn" />
      </div>
    </form>
  );
}
