import React from "react";

interface AuthShowcaseProps {
  heading: string;
  subHeading: string;
  image: string;
  altName: string;
}

export const AuthShowcase: React.FC<AuthShowcaseProps> = ({
  heading,
  subHeading,
  image,
  altName,
}) => {
  return (
<div className="flex flex-col h-full w-full">
  {/* Header Section */}
  <div className="mb-auto pt-16 px-8">
    <h1 className="text-4xl font-bold text-gray-900 mb-4 max-w-4xl">
      {heading}
    </h1>
    <p className="text-3xl font-medium text-blue-500 w-96">{subHeading}</p>
  </div>

  {/* Illustration Section */}
  <div className="relative flex justify-end items-end overflow-hidden min-h-80 ml-auto">
    <img
      src={image}
      alt={altName}
      className="w-full h-full object-contain"
    />
  </div>
</div>
  );
};
