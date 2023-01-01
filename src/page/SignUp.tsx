import tw from 'tailwind-styled-components';
import React, { useEffect } from 'react';
import SignupFormContainer from '../containers/Login/SignFormContainer';
import SSOContainer from '../containers/Login/SSOContainer';
import useCheckUser from '../hooks/useCheckUser';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../hooks/rtkHooks';
import { firebaseConfig } from '../service/firebase';

const SignupSection = tw.section`
min-h-full h-screen min-w-[500px] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800
`;
const SignupTitle = tw.h2`
mt-6 text-center text-3xl font-extrabold text-black dark:text-gray-400
`;

const SignUp = () => {
  const navigator = useNavigate();
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    const token = sessionStorage.getItem(
      `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`
    );

    if (user.uid || token) {
      navigator('/');
    }
  }, [user]);
  return (
    <SignupSection>
      <div className="w-full max-w-md space-y-8">
        <SignupTitle>Sign up to React-shop</SignupTitle>
        <SignupFormContainer />
        <SSOContainer isSignup={true} />
      </div>
    </SignupSection>
  );
};
export default React.memo(SignUp);
