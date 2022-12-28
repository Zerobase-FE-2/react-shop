import { githubSignIn, googleSignIn } from '../../service/auth';
import githubIcon from '../../assets/icon/iconGithub.svg';
import googleIcon from '../../assets/icon/iconGoogle.svg';

export default function SSOSignupContainer() {
  const handleGoogle = async () => {
    try {
      await googleSignIn();
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
      await githubSignIn();
    } catch (error) {
      if (typeof error == 'string') {
        alert(error);
      } else {
        alert((error as Error).message);
      }
    }
  };
  return (
    <div className="flex items-center justify-around">
      <span className="text-lg font-bold">Sign Up with SNS</span>

      <div className="btn btn-ghost" onClick={handleGithub}>
        <img src={githubIcon} className="h-10 w-10" alt="Icon_github" />
        {/* <img src='../assets/icon/iconGithub.svg' className="h-10 w-10" alt="Icon_github" /> */}
      </div>
      <div className="btn btn-ghost" onClick={handleGoogle}>
        <img src={googleIcon} className="h-10 w-10" alt="Icon_google" />
        {/* <img src='../assets/icon/iconGoogle.svg' className="h-10 w-10" alt="Icon_google" /> */}
      </div>
    </div>
  );
}
