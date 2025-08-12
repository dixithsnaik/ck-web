import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/components/utils";

// No explicit w- / h-, now it hugs its content; you use mx/my as needed outside
export const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-xl font-sans px-6 py-2 shadow-md shadow-black/15",
  {
    variants: {
      variant: {
        primary:           "bg-green-400 text-gray-900",
        secondary:         "bg-white text-gray-900 border-none",
        primaryOutlined:   "bg-green-400 text-gray-900 border border-black",
        secondaryOutlined: "bg-white text-gray-900 border border-black",
        cancel:            "bg-red-600 text-white border-none",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant }), className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";
