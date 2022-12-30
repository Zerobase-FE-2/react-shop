import { setPersistence, browserSessionPersistence } from 'firebase/auth';
import { signIn } from '../service/auth';
import { authService } from '../service/firebase';

interface loginFBProps {
  email: string;
  password: string;
}

//TODO 함수형 프로그래밍 사용하여 리팩토링 필요
export const setLoginSession = async ({ email, password }: loginFBProps) => {
  await setPersistence(authService, browserSessionPersistence);
  const user = await signIn(email, password);
  return user;
};

export const setSSOLoginSession = async (fn: any) => {
  await setPersistence(authService, browserSessionPersistence);
  const result = await fn();
  return result;
};
