import React from 'react';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useAppDispatch } from '../../hooks/rtkHooks';
import { setSignupSession } from '../../libs/setLoginSession';
import { logIn } from '../../reducers/userSlice';

import Btn from '../../components/Login/btn';
import ErrorMessage from '../../components/Login/error';
import Input from '../../components/Login/input';
import { EnterForm } from './LoginFormContainer';

interface SignupInputs {
  email: string;
  password: string;
  confirm_password: string;
  name: string;
  age: number;
}

export default function SignupFormContainer() {
  const [error, setError] = useState('');
  const dispatch = useAppDispatch();

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupInputs>({ mode: 'onChange' });

  const onValid = async (validForm: EnterForm) => {
    const { email, password } = validForm;
    try {
      const { user: loggedInUser } = await setSignupSession({
        email,
        password,
      });
      dispatch(
        logIn({
          username: loggedInUser.displayName || '',
          email: loggedInUser.email!,
          uid: loggedInUser.uid,
        })
      );
    } catch (error) {
      setError('use another Email or you already has id');
    }
    reset();
  };

  return (
    <form
      action="submit"
      className="mt-5 space-y-3"
      method="POST"
      onSubmit={handleSubmit(onValid)}
    >
      <ErrorMessage message={error} isTitle={true} />
      <input type="hidden" name="remember" defaultValue="true" />
      <Input
        type="email"
        label="Email"
        name="email"
        required={true}
        placeholder="What is your email"
        register={register('email', { required: 'email is required' })}
      />
      <ErrorMessage message={errors.email?.message} />

      <Input
        type="password"
        label="Password"
        name="password"
        required={true}
        placeholder="Write your password"
        register={register('password', {
          required: 'password is required',
          minLength: { value: 8, message: 'min 8 Length is required' },
        })}
      />
      <ErrorMessage message={errors.password?.message} />

      <Input
        type="password"
        label="Password Check"
        name="passwordCheck"
        required={true}
        placeholder="Write password one more"
        register={register('confirm_password', {
          required: 'password check is required',
          validate: (val: string) => {
            if (watch('password') != val) {
              return 'Your passwords do no match';
            }
          },
        })}
      />
      <ErrorMessage message={errors.confirm_password?.message} />

      <br />

      <Input
        register={register('name', {
          required: 'name is required',
        })}
        label="Name"
        type="name"
        name="name"
        required={true}
        placeholder="What's your name?"
      />
      <ErrorMessage message={errors.name?.message} />

      <Input
        register={register('age', {
          required: 'age is required',
        })}
        label="Age"
        name="age"
        type="number"
        required={true}
        placeholder="What's your age"
      />
      <ErrorMessage message={errors.age?.message} />
      <div className="flex">
        <Btn kind="btn" name="Sign Up" isLarge={true} />
      </div>
    </form>
  );
}
