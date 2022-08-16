import tw from 'tailwind-styled-components';
import { SubmitHandler, useForm } from 'react-hook-form';

import githubIcon from '../assets/icon/iconGithub.svg';
import googleIcon from '../assets/icon/iconGoogle.svg';

import * as AuthService from '../service/auth';

interface SignUpInputs {
  email: string;
  password: string;
  confirm_password: string;
  name: string;
  age: number;
}

const SignUp = () => {
  const SignupSection = tw.section`
  min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8
  `;
  const SignupTitle = tw.h2`
  mt-6 text-center text-3xl font-extrabold text-gray-900
  `;

  const Input = tw.input`
  appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm
  `;
  const Error = tw.p`
  text-red-500
  `;

  const SignUpBtn = tw.button`
  group relative  py-2 px-4  w-full flex justify-center  border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
  `;

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInputs>();

  const onSubmit: SubmitHandler<SignUpInputs> = async (data, e) => {
    const { email, password } = data;
    try {
      e?.target.reset();
      await AuthService.signUp(email, password);
    } catch (error) {
      if (typeof error == 'string') {
        alert(error);
      } else {
        alert((error as Error).message);
      }
    }
  };

  const handleGoogle = async () => {
    try {
      await AuthService.googleSignIn();
    } catch (error) {
      if (typeof error == 'string') {
        alert(error);
      } else {
        alert((error as Error).message);
      }
    }
  };

  const handleGithub = async () => {
    try {
      await AuthService.githubSignIn();
    } catch (error) {
      if (typeof error == 'string') {
        alert(error);
      } else {
        alert((error as Error).message);
      }
    }
  };

  return (
    <SignupSection>
      <div className="max-w-md w-full space-y-8">
        <SignupTitle>Sign up to React-shop</SignupTitle>
        <form
          action="submit"
          className="mt-8 space-y-6"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input type="hidden" name="remember" defaultValue="true" />
          <div>
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              placeholder="What is your email"
              {...register('email', { required: true })}
            />
            <Error>{errors.email?.message}</Error>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Input
              {...register('password', { required: true })}
              type="password"
              name="password"
              placeholder="Write your password"
            />
            <Error>{errors.password?.message}</Error>
          </div>
          <div>
            <label htmlFor="passwordCheck">Check Password</label>
            <Input
              {...register('confirm_password', {
                required: true,
                validate: (val: string) => {
                  if (watch('password') != val) {
                    return 'Your passwords do no match';
                  }
                },
              })}
              type="password"
              placeholder="Write password one more"
            />
            <Error>{errors.confirm_password?.message}</Error>
          </div>
          <br />
          <div>
            <label htmlFor="passwordCheck">name</label>
            <Input
              {...register('name', {
                required: true,
              })}
              type="name"
              placeholder="What's your name?"
            />
            <Error>{errors.name?.message}</Error>
          </div>
          <div>
            <label htmlFor="passwordCheck">age</label>
            <Input
              {...register('name', {
                required: true,
              })}
              type="number"
              placeholder="What's your age"
            />
            <Error>{errors.age?.message}</Error>
          </div>

          <div className="flex">
            <SignUpBtn>Sign Up</SignUpBtn>
          </div>
          <div className="flex items-center justify-around">
            <span className="text-lg font-bold">Sign Up with SNS</span>

            <div className="btn btn-ghost" onClick={handleGithub}>
              <img src={githubIcon} className="h-10 w-10" alt="Icon_github" />
            </div>
            <div className="btn btn-ghost" onClick={handleGoogle}>
              <img src={googleIcon} className="h-10 w-10" alt="Icon_google" />
            </div>
          </div>
        </form>
      </div>
    </SignupSection>
  );
};
export default SignUp;
