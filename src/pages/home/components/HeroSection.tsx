import { Button } from "@/components/ui/button";
import { HERO_IMAGE } from "@/constants/assets";
import { BUTTON_LABELS } from "@/constants/constants";

export default function HeroSection({
  heading,
  subHeading,
  description,
}: {
  heading: string;
  subHeading: string;
  description: string;
}) {
  return (
    <section className="bg-white flex flex-col">
      <div className="grid lg:grid-cols-2 w-full">
        {/* Left Content */}
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 flex flex-col justify-start pt-12">
          <div className="text-left w-full">
            <div className="mt-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-navy leading-tight whitespace-nowrap">
                {heading}
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-navy leading-snug">
                {subHeading}
              </h2>

              <p className="text-silverGray text-base sm:text-lg leading-relaxed max-w-xl mt-4">
                {description}
              </p>
            </div>

            <div className="flex space-x-4 mt-8">
              <Button
                variant="primaryOutlined"
                className="rounded-full px-6 py-1 hover:shadow-lg hover:px-7 hover:py-1.5 transition-all hover:pivote-center"
                onClick={() => {}}
              >
               {BUTTON_LABELS.GET_STARTED}
              </Button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-end items-end">
          <img
            src={HERO_IMAGE.URL}
            alt={HERO_IMAGE.ALT}
            className="w-[85%] h-full object-cover lg:object-contain"
          />
        </div>
      </div>
    </section>
  );
}
