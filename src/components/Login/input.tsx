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
      <label htmlFor={name}>{label}</label>
      <div>
        <input
          className="w-full py-1 px-2 text-gray-800"
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
