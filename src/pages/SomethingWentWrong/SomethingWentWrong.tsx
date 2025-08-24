import React from "react";
import { RefreshCcw } from "lucide-react";

type SomethingWentWrongProps = {
  message?: string;
  onRetry?: () => void;
};

const SomethingWentWrong: React.FC<SomethingWentWrongProps> = ({
  message = "Something went wrong. Please try again.",
  onRetry,
}) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
      <img
        src="/images/404-somthing-went-wrong.png"
        alt="Error"
        className="w-full max-w-lg mb-8"
      />

      <h1 className="text-4xl font-bold text-red-600 mb-4">
        Oops! Something Went Wrong
      </h1>

      <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
        {message}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-red-600 transition-all"
        >
          <RefreshCcw size={20} />
          Try Again
        </button>
      )}
    </div>
  );
};

export default SomethingWentWrong;
