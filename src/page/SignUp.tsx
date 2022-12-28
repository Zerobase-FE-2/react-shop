import tw from 'tailwind-styled-components';
import React from 'react';
import SignupFormContainer from '../containers/Signup/SignFormContainer';
import SSOSignupContainer from '../containers/Signup/SSOSignupContainer';

const SignupSection = tw.section`
min-h-full h-screen min-w-[500px] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800
`;
const SignupTitle = tw.h2`
mt-6 text-center text-3xl font-extrabold text-black dark:text-gray-400
`;

const Error = tw.p`
text-red-500
`;

const SignUpBtn = tw.button`
group relative  py-2 px-4  w-full flex justify-center  border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
`;

const SignUp = () => {
  return (
    <SignupSection>
      <div className="w-full max-w-md space-y-8">
        <SignupTitle>Sign up to React-shop</SignupTitle>
        <SignupFormContainer />
        <SSOSignupContainer />
      </div>
    </SignupSection>
  );
};
export default React.memo(SignUp);
