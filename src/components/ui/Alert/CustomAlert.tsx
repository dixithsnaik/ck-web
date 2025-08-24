import React, { useEffect } from "react";
import { X } from "lucide-react";

interface CustomAlertProps {
  type: "error" | "info";
  message: string;
  onClose: () => void;
  duration?: number; // in milliseconds, optional, default 3000ms
}

const typeStyles: Record<CustomAlertProps["type"], string> = {
  error: "bg-red-100 text-red-700 border-red-400",
  info: "bg-blue-100 text-blue-700 border-blue-400",
};

export const CustomAlert: React.FC<CustomAlertProps> = ({ type, message, onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer); // cleanup if unmounted
  }, [duration, onClose]);

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 flex items-center border px-4 py-3 rounded shadow-lg max-w-sm w-full ${typeStyles[type]}`}
    >
      <div className="flex-1">{message}</div>
      <button
        className="ml-3 p-1 rounded hover:bg-gray-200"
        onClick={onClose}
        aria-label="Close alert"
      >
        <X size={18} className="text-gray-600 hover:text-gray-900" />
      </button>
    </div>
  );
};
