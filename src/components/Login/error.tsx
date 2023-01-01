interface ErrorMessageProps {
  message?: string;
  isTitle?: boolean;
}

export default function ErrorMessage({
  message,
  isTitle = false,
}: ErrorMessageProps) {
  return (
    <div
      className={`flex h-[1px] w-full items-center ${
        isTitle ? 'justify-center' : 'justify-start'
      } px-2`}
    >
      <span
        className={`${isTitle ? 'text-md' : 'text-sm'} font-bold text-red-500`}
      >
        {message || ''}
      </span>
    </div>
  );
}
