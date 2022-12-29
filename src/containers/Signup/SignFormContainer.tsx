import { SubmitHandler, useForm } from 'react-hook-form';
import Btn from '../../components/Login/btn';
import Input from '../../components/Login/input';
import { signUp } from '../../service/auth';
import { EnterForm } from '../Login/LoginFormContainer';

interface SignupInputs {
  email: string;
  password: string;
  confirm_password: string;
  name: string;
  age: number;
}

export default function SignupFormContainer() {
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupInputs>();

  const onValid = async (validForm: EnterForm) => {
    console.log(validForm);
    const { email, password } = validForm;
    try {
      await signUp(email, password);
    } catch (error) {
      if (typeof error == 'string') {
        alert(error);
      } else {
        alert((error as Error).message);
      }
    }
    reset();
  };

  return (
    <form
      action="submit"
      className="mt-8 space-y-6"
      method="POST"
      onSubmit={handleSubmit(onValid)}
    >
      <input type="hidden" name="remember" defaultValue="true" />
      <Input
        type="email"
        label="Email"
        name="email"
        required={true}
        placeholder="What is your email"
        register={register('email', { required: true })}
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

      <Input
        type="password"
        label="Password Check"
        name="passwordCheck"
        required={true}
        placeholder="Write password one more"
        register={register('confirm_password', {
          required: true,
          validate: (val: string) => {
            if (watch('password') != val) {
              return 'Your passwords do no match';
            }
          },
        })}
      />
      {/* <Error>{errors.confirm_password?.message}</Error> */}

      <br />

      <Input
        register={register('name', {
          required: true,
        })}
        label="Name"
        type="name"
        name="name"
        required={true}
        placeholder="What's your name?"
      />
      {/* <Error>{errors.name?.message}</Error> */}

      <Input
        register={register('name', {
          required: true,
        })}
        label="Age"
        name="age"
        type="number"
        required={true}
        placeholder="What's your age"
      />
      {/* <Error>{errors.age?.message}</Error> */}
      <div className="flex">
        <Btn kind="btn" name="Sign Up" isLarge={true} />
      </div>
    </form>
  );
}
