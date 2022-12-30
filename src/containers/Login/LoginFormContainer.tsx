import { useForm } from 'react-hook-form';
import Btn from '../../components/Login/btn';
import Input from '../../components/Login/input';
import { useAppDispatch, useAppSelector } from '../../hooks/rtkHooks';
import useCheckUser from '../../hooks/useCheckUser';
import { setLoginSession } from '../../libs/setLoginSession';
import { logIn } from '../../reducers/userSlice';

export interface EnterForm {
  email: string;
  password: string;
}

export default function LoginFormContainer() {
  const dispatch = useAppDispatch();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<EnterForm>();

  const onValid = async (validForm: EnterForm) => {
    const { email, password } = validForm;
    try {
      const { user: loggedInUser } = await setLoginSession({ email, password });
      dispatch(
        logIn({
          username: loggedInUser.displayName || '',
          email: loggedInUser.email!,
          uid: loggedInUser.uid,
        })
      );
    } catch (error) {
      console.log(error);
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onValid)} className="mt-8 space-y-6">
      <Input
        type="email"
        label="Email"
        placeholder="Write your Email"
        required={true}
        register={register('email', { required: true })}
        name="email"
      />
      {/* <Error>{errors.email?.message}</Error> */}

      <Input
        type="password"
        label="Password"
        name="password"
        required={true}
        placeholder="Write your password"
        register={register('password', { required: true })}
      />
      {/* <Error>{errors.password?.message}</Error> */}
      <div className="flex space-x-2">
        <Btn isLarge={false} name="Sign Up" kind="link" />
        <Btn isLarge={false} name="Log In" kind="btn" />
      </div>
    </form>
  );
}
