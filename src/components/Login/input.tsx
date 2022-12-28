import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  label: string;
  name: string;
  placeholder?: string;
  type: string;
  register?: UseFormRegisterReturn;
  required: boolean;
}

export default function Input({
  label,
  name,
  placeholder,
  register,
  type,
  required,
}: InputProps) {
  return (
    <div>
      <label className="text-gray-800" htmlFor={name}>
        {label}
      </label>
      <div>
        <input
          className="w-full rounded-md border border-indigo-300 py-2 px-2 text-gray-800 outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          type={type}
          {...register}
          required={required}
          id={name}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
