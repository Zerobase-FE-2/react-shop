import { LockClosedIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

interface LoginBtnProps {
  kind: 'link' | 'btn';
  isLarge?: boolean;
  name: string;
}

export default function Btn({ kind, isLarge = true, name }: LoginBtnProps) {
  return (
    <>
      {kind === 'link' ? (
        <Link
          to="/signup"
          className={`group flex ${
            isLarge ? 'w-full' : 'w-1/2'
          } justify-center rounded-md border border-transparent bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
        >
          <div className="flex h-full w-full justify-center py-2 px-4">
            {name}
          </div>
        </Link>
      ) : null}
      {kind === 'btn' ? (
        <button
          type="submit"
          className={`group relative flex  ${
            isLarge ? 'w-full' : 'w-1/2'
          } justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
        >
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <LockClosedIcon
              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              aria-hidden="true"
            />
          </div>
          {name}
        </button>
      ) : null}
    </>
  );
}
