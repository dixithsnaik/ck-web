import type { ReactNode, HTMLAttributes } from "react";

interface ServiceCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const ServiceCard = ({
  children,
  className = "",
  ...props
}: ServiceCardProps) => {
  const baseStyles =
    "inline-block bg-white rounded-xl shadow-lg overflow-hidden p-8 sm:p-4";

  return (
    <div className={`${baseStyles} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default ServiceCard;
