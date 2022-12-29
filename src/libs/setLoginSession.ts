import {
  setPersistence,
  getAuth,
  browserSessionPersistence,
} from 'firebase/auth';
import { signIn } from '../service/auth';
import { authService } from '../service/firebase';
interface loginFBProps {
  email: string;
  password: string;
}

export const setLoginSession = async ({ email, password }: loginFBProps) => {
  await setPersistence(authService, browserSessionPersistence);
  const user = await signIn(email, password);
  return user;
};
