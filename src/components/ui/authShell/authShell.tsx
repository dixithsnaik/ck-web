import type { ReactNode } from "react";


interface AuthSectionProps {
  children: ReactNode;
}

// AuthShell wraps the entire authentication layout
export function AuthShell({ children }: AuthSectionProps) {
  return (
    <div className="flex h-screen bg-charcoal text-white justify-center items-center">
      <div className="flex w-full max-w-[92rem] h-full md:h-[90vh] overflow-hidden shadow-lg">
        {children}
      </div>
    </div>
  );
}

// AuthForm: Left side (form area)
export function AuthForm({ children }: AuthSectionProps) {
  return (
    <div className="w-full md:w-2/4 flex flex-col justify-center items-center p-8 bg-ink overflow-y-auto">
      {children}
    </div>
  );
}

// AuthIllustration: Right side (illustration area)
export function AuthIllustration({ children }: AuthSectionProps) {
  return (
    <div className="hidden md:flex w-3/4 bg-white text-ink flex-col justify-center items-center overflow-hidden">
      {children}
    </div>
  );
}
