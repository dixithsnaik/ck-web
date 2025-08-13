import type { InputHTMLAttributes, ReactNode } from "react";
import React from "react";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "prefix" | "suffix"> {
  hint?: string; // new prop for placeholder hint
  prefix?: ReactNode;
  suffix?: ReactNode;
  onPrefixClick?: () => void;
  onSuffixClick?: () => void;
}

const Input: React.FC<InputProps> = ({
  hint,
  prefix,
  suffix,
  onPrefixClick,
  onSuffixClick,
  ...props
}) => {
  return (
    <div className="relative rounded-sm bg-white flex items-center px-4 py-3 w-full">
      {prefix && (
        <span
          className={`mr-3 ${onPrefixClick ? "cursor-pointer" : ""}`}
          onClick={onPrefixClick}
        >
          {prefix}
        </span>
      )}
      <input
        {...props}
        placeholder={hint}
        className="
          flex-1 w-full bg-transparent border-none outline-none 
          text-[#3A3A3A] text-sm font-normal
          placeholder:text-[#6C6C6C]
        "
      />
      {suffix && (
        <span
          className={`ml-3 ${onSuffixClick ? "cursor-pointer" : ""}`}
          onClick={onSuffixClick}
        >
          {suffix}
        </span>
      )}
    </div>
  );
};

export default Input;
