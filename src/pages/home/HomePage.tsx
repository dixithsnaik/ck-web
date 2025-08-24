// import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "./components/HeroSection";
import PageSeatter, { Section } from "@/components/ui/pageSeatter/PageSeatter";
import PageLayout from "@/components/ui/layout/pageLayout";
import {
  BENEFITS_SECTION,
  FAQ_SECTION,
  FEATURES_SECTION,
  HOMEPAGE_HERO_SECTION,
  MISSION_SECTION,
} from "@/constants/constants";
import ServiceCard from "@/components/ui/card/serviceCard";
import { HERO_IMAGE } from "@/constants/assets";
import FAQSection from "@/components/ui/faqSection/FAQSection";

export default function HomePage() {
  // const navigate = useNavigate();
  return (
    <PageLayout>
      <PageSeatter>
        <Section>
          <HeroSection
            heading={HOMEPAGE_HERO_SECTION.HEADING}
            subHeading={HOMEPAGE_HERO_SECTION.SUB_HEADING}
            description={HOMEPAGE_HERO_SECTION.DESCRIPTION}
          />
        </Section>
        <Section className="items-center flex flex-col py-14">
          <Button
            variant={"primaryOutlined"}
            className="px-4 py-0.5 rounded-full shadow-none"
          >
            {BENEFITS_SECTION.BUTTON}
          </Button>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-navy leading-tight whitespace-nowrap pb-8 pt-4">
            {BENEFITS_SECTION.HEADING}
          </h1>
          <div className="flex place-items-stretch justify-center gap-14">
            {BENEFITS_SECTION.CARDS.map((card, index) => (
              <ServiceCard
                key={index}
                className="max-w-1/4"
                heading={card.HEADING}
                description={card.DESCRIPTION}
                image={HERO_IMAGE.URL}
                showImage
                bgColor="bg-white"
                darkText
                imageFirst={index % 2 === 1}
              />
            ))}
          </div>
        </Section>
        <Section>
          <div className="py-14 px-6 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-8 items-center mx-10">
              {/* Left Column */}
              <div className="lg:col-span-4 flex flex-col items-start">
                <Button
                  variant="primaryOutlined"
                  className="px-4 py-0.5 rounded-full mb-4 shadow-none"
                >
                  {FEATURES_SECTION.BUTTON}
                </Button>
                <h1 className="text-2xl sm:text-2xl lg:text-4xl xl:text-5xl font-light text-ink leading-tight">
                  {FEATURES_SECTION.HEADING}
                </h1>
              </div>

              {/* Middle Card */}
              <div className="lg:col-span-4">
                <ServiceCard
                  heading={FEATURES_SECTION.CARDS[0].HEADING}
                  description={FEATURES_SECTION.CARDS[0].DESCRIPTION}
                  image={HERO_IMAGE.URL}
                  showImage
                  imageFirst
                  bgColor="bg-dark"
                  darkText={false}
                  className="h-full"
                />
              </div>

              {/* Right Column */}
              <div className="lg:col-span-4 flex flex-col gap-6 h-full">
                <ServiceCard
                  heading={FEATURES_SECTION.CARDS[1].HEADING}
                  description={FEATURES_SECTION.CARDS[1].DESCRIPTION}
                  bgColor="bg-mint"
                  darkText
                  showButton
                  className="flex-1 flex flex-col justify-between"
                  buttonSlot={
                    <div className="text-silverGray font-medium cursor-pointer">
                      {FEATURES_SECTION.CARDS[1].BUTTON}
                    </div>
                  }
                />
                <ServiceCard
                  heading={FEATURES_SECTION.CARDS[2].HEADING}
                  description={FEATURES_SECTION.CARDS[2].DESCRIPTION}
                  bgColor="bg-mint"
                  darkText
                  showButton
                  className="flex-1 flex flex-col justify-between"
                  buttonSlot={
                    <div className="text-silverGray font-medium cursor-pointer">
                      {FEATURES_SECTION.CARDS[2].BUTTON}
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </Section>
        <Section className="items-center flex flex-col py-14">
          <Button
            variant={"primaryOutlined"}
            className="px-4 py-0.5 rounded-full shadow-none"
          >
            {MISSION_SECTION.BUTTON}
          </Button>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-ink leading-tight whitespace-nowrap pb-8 pt-4">
            {MISSION_SECTION.HEADING}
          </h1>
          <div className="flex items-stretch  justify-center gap-10">
            <ServiceCard
              heading={MISSION_SECTION.CARDS[0].HEADING}
              description={MISSION_SECTION.CARDS[0].DESCRIPTION}
              bgColor="bg-white"
              darkText
              showButton
              className="flex-1 flex flex-col justify-between max-w-1/3"
              buttonSlot={<div />}
            />
            <ServiceCard
              heading={MISSION_SECTION.CARDS[1].HEADING}
              description={MISSION_SECTION.CARDS[1].DESCRIPTION}
              bgColor="bg-white"
              darkText
              showButton
              className="flex-1 flex flex-col justify-between max-w-1/3"
              buttonSlot={<div />}
            />
          </div>
        </Section>
        <Section className="items-center flex flex-col py-14">
          <Button
            variant={"primaryOutlined"}
            className="px-4 py-0.5 rounded-full shadow-none"
          >
            {FAQ_SECTION.BUTTON}
          </Button>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-ink leading-tight whitespace-nowrap pb-8 pt-4">
            {FAQ_SECTION.HEADING}
          </h1>
          <FAQSection />
        </Section>
      </PageSeatter>
    </PageLayout>
  );
}
