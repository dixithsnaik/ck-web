// import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "./components/HeroSection";
import PageSeatter, { Section } from "@/components/ui/pageSeatter/PageSeatter";
import PageLayout from "@/components/ui/layout/pageLayout";
import { HOMEPAGE_HERO_SECTION } from "@/constants/constants";
import ServiceCard from "@/components/ui/card/serviceCard";


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
          <Button variant={"primaryOutlined"} className="px-4 py-0.5 rounded-full">Our Benefit for You</Button>
         <ServiceCard className="bg-white">hello</ServiceCard>
        </Section>
        <Section>Section 3 → bg white</Section>
        <Section>Section 4 → bg gray-50</Section>
      </PageSeatter>
    </PageLayout>
  );
}
