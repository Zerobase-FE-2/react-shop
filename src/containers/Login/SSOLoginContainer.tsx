import * as AuthService from '../../service/auth';
import githubIcon from '../../assets/icon/iconGithub.svg';
import googleIcon from '../../assets/icon/iconGoogle.svg';
import { useCallback } from 'react';

export default function SSOLoginContainer() {
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
    <div className="flex items-center justify-around">
      <button className="btn btn-ghost" onClick={handleGithub}>
        <img src={githubIcon} className="h-10 w-10" alt="Icon_github" />
      </button>
      <button className="btn btn-ghost" onClick={handleGoogle}>
        <img src={googleIcon} className="h-10 w-10" alt="Icon_google" />
      </button>
    </div>
  );
}
