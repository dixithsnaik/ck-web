import type { ReactNode, HTMLAttributes } from "react";

interface ServiceCardProps extends HTMLAttributes<HTMLDivElement> {
  heading: string;
  description: string;
  image?: string;
  showImage?: boolean;
  imageFirst?: boolean;
  bgColor?: string;
  darkText?: boolean;
  showButton?: boolean;
  buttonText?: string;
  buttonSlot?: ReactNode;
  className?: string;
}

const ServiceCard = ({
  heading,
  description,
  image,
  showImage = false,
  imageFirst = false,
  bgColor = "bg-white",
  darkText = true,
  showButton = false,
  buttonText = "Learn more",
  buttonSlot,
  className = "",
  ...props
}: ServiceCardProps) => {
  const textColor = darkText ? "text-navy" : "text-white";
  const descColor = darkText ? "text-silverGray" : "text-white";

  return (
    <div
      className={`rounded-2xl shadow-lg overflow-hidden p-10 sm:p-6 flex flex-col h-full ${bgColor} ${className}`}
      {...props}
    >
      {/* Main content */}
      <div className="flex-1">
        <h3 className={`text-2xl font-medium mb-3 ${textColor}`}>{heading}</h3>

        {!imageFirst && <p className={`${descColor} mb-4`}>{description}</p>}

        {showImage && image && (
          <img src={image} alt={heading} className="w-full rounded-lg mb-4" />
        )}

        {imageFirst && <p className={`${descColor} mb-4`}>{description}</p>}
      </div>

      {/* Footer pinned bottom-left */}
      {showButton && (
        <div className="mt-6">
          {buttonSlot || (
            <div className="px-4 py-2 rounded-lg bg-blue text-white text-sm font-medium cursor-pointer transition">
              {buttonText}
            </div>
          )}
        </div>
      )}
    </div>
  );
};


export default ServiceCard;
