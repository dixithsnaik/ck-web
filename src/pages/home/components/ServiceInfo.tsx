interface ServiceInfoProps {
  title: string;
  description: string;
  image: string; // URL of the main illustration
  icons?: string[];
}

export default function ServiceInfo({
  title,
  description,
  image,
  icons = [],
}: ServiceInfoProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col items-center text-center space-y-4 max-w-md mx-auto">
      <h3 className="text-xl md:text-2xl font-semibold text-slate-900">{title}</h3>
      <p className="text-sm md:text-base text-slate-500">{description}</p>

      <div className="relative mt-4">
        <img src={image} alt={title} className="w-48 h-48 md:w-56 md:h-56 mx-auto object-contain" />

        {/* Render small icons around the main image */}
        {icons.map((icon, idx) => (
          <img
            key={idx}
            src={icon}
            alt={`icon-${idx}`}
            className={`absolute w-10 h-10 md:w-12 md:h-12 ${
              idx === 0 ? "top-0 left-1/4" : ""
            } ${idx === 1 ? "top-0 right-1/4" : ""} ${idx === 2 ? "bottom-0 left-1/3" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
