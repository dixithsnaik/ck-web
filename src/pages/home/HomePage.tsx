import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import PageSeatter, { Section } from "@/components/ui/pageSeatter/PageSeatter";
import PageLayout from "@/components/ui/layout/pageLayout";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <PageLayout>
      <PageSeatter>
        <Section>
          <HeroSection
            heading="Power Up Your Earnings!"
            subHeading="Rent your PC. Join the Cloud. Earn like never before."
            description="Put your unused PC to work and earn real money by joining a global cloud network. It’s secure, seamless, and designed for anyone—no advanced setup needed. Start earning passive income just by staying connected."
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
