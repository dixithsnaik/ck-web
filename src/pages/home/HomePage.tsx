import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import PageSeatter, { Section } from "@/components/ui/pageSeatter/PageSeatter";
import PageLayout from "@/components/ui/layout/pageLayout";
import { HOMEPAGE_HERO_SECTION } from "@/constants/constants";

export default function HomePage() {
  const navigate = useNavigate();
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
        <Section>
          <h1 className="">Home - Public</h1>
          <h1 onClick={() => navigate("/profile")}>Go to Profile</h1>
          <Button variant="primary" type="submit">
            <span>Primary Button</span>
          </Button>
          <Button variant="cancel" className="underline">
            <span>Cancel</span>
          </Button>
        </Section>
        <Section>Section 3 → bg white</Section>
        <Section>Section 4 → bg gray-50</Section>
      </PageSeatter>
    </PageLayout>
  );
}
