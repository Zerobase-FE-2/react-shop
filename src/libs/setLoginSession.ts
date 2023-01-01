import { setPersistence, browserSessionPersistence } from 'firebase/auth';
import { signIn, signUp } from '../service/auth';
import { authService } from '../service/firebase';

interface loginFBProps {
  email: string;
  password: string;
}

//TODO 함수형 프로그래밍 사용하여 리팩토링 필요
export const setLoginSession = async ({ email, password }: loginFBProps) => {
  let user;
  try {
    await setPersistence(authService, browserSessionPersistence);
    user = await signIn(email, password);
  } catch (error) {
    let message;
    if (error instanceof Error) {
      message = error.message;
    } else message = String(error);
    throw new Error(message);
  }

  return user;
};

export const setSignupSession = async ({ email, password }: loginFBProps) => {
  let user;
  try {
    await setPersistence(authService, browserSessionPersistence);
    user = await signUp(email, password);
  } catch (error) {
    let message;
    if (error instanceof Error) {
      message = error.message;
    } else message = String(error);
    throw new Error(message);
  }
  return user;
};

export const setSSOLoginSession = async (fn: any) => {
  let result;
  try {
    await setPersistence(authService, browserSessionPersistence);
    result = await fn();
  } catch (error) {
    let message;
    if (error instanceof Error) {
      message = error.message;
    } else message = String(error);
    throw new Error(message);
  }
  return result;
};
