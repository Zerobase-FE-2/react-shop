import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import tw from 'tailwind-styled-components';
import SEOTag from '../components/SEOTag';
import LoginFormContainer from '../containers/Login/LoginFormContainer';
import SSOContainer from '../containers/Login/SSOContainer';
import { useAppSelector } from '../hooks/rtkHooks';
import useCheckUser from '../hooks/useCheckUser';

const LoginSection = tw.section`
  min-h-screen h-screen min-w-[500px] flex items-center justify-center bg-white dark:bg-gray-800 py-12 px-4 sm:px-6 lg:px-8
  `;
const LoginTitle = tw.h2`
  mt-6 text-center text-3xl text-black dark:text-white font-extrabold
  `;

const Login = () => {
  const navigator = useNavigate();
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    if (user.uid) {
      navigator('/');
    }
  }, [user]);

  return (
    <LoginSection>
      <SEOTag title="Login" />
      <div className="w-full max-w-md space-y-8">
        <LoginTitle>WELCOME TO REACT SHOP</LoginTitle>
        <LoginFormContainer />
        <SSOContainer isSignup={false} />
      </div>
    </LoginSection>
  );
};

export default React.memo(Login);
