import githubIcon from '../../assets/icon/iconGithub.svg';
import googleIcon from '../../assets/icon/iconGoogle.svg';
import { githubSignIn, googleSignIn } from '../../service/auth';
import { setSSOLoginSession } from '../../libs/setLoginSession';
import { useAppDispatch } from '../../hooks/rtkHooks';
import { logIn } from '../../reducers/userSlice';

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
        <img src={githubIcon} className="h-10 w-10" alt="Icon_github" />
      </button>
      <button
        className={`btn btn-ghost ${isSignup ? '' : 'w-1/2'}`}
        onClick={loginWithGoogle}
      >
        <img src={googleIcon} className="h-10 w-10" alt="Icon_google" />
      </button>
    </div>
  );
}
