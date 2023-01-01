import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Btn from '../../components/Login/btn';
import Input from '../../components/Login/input';
import { useAppDispatch, useAppSelector } from '../../hooks/rtkHooks';
import useCheckUser from '../../hooks/useCheckUser';
import { setLoginSession } from '../../libs/setLoginSession';
import { logIn } from '../../reducers/userSlice';

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
      <div className="flex h-[1px] w-full items-center justify-center px-2">
        <span className="text-md font-bold text-red-500">
          {error ? error : ''}
        </span>
      </div>
      <Input
        type="email"
        label="Email"
        placeholder="Write your Email"
        required={true}
        register={register('email', { required: 'Email Address is required' })}
        name="email"
      />
      <div className="flex h-[1px] w-full items-center justify-start px-2">
        <span className="text-sm font-bold text-red-500">
          {errors.email ? errors.email.message : ''}
        </span>
      </div>

      <Input
        type="password"
        label="Password"
        name="password"
        required={true}
        placeholder="Write your password"
        register={register('password', { required: 'Password is required' })}
      />
      <div className="flex h-[1px] w-full items-center justify-start px-2">
        <span className="text-sm font-bold text-red-500">
          {errors.password ? errors.password.message : ''}
        </span>
      </div>
      <div className="flex space-x-2">
        <Btn isLarge={false} name="Sign Up" kind="link" />
        <Btn isLarge={false} name="Log In" kind="btn" />
      </div>
    </form>
  );
}
