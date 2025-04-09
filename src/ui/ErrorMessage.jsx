import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

export default function ErrorMessage({ message, error, retryFn }) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center bg-red-50 rounded-full p-3 mb-3">
          <ExclamationCircleIcon className="h-8 w-8 text-red-500" />
        </div>
        <h2 className="text-xl font-bold font-mono text-gray-900 mb-1">{message}</h2>
        <p className="text-gray-600 font-mono mb-4">{error?.message || 'Unknown error occurred'}</p>
        <button
          onClick={retryFn}
          className="px-4 py-2 bg-indigo-600 text-white font-mono rounded-md hover:bg-indigo-700 cursor-pointer"
        >
          Try Again
        </button>
      </div>
    );
  }