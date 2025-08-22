// import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "./components/HeroSection";
import PageSeatter, { Section } from "@/components/ui/pageSeatter/PageSeatter";
import PageLayout from "@/components/ui/layout/pageLayout";
import { HOMEPAGE_HERO_SECTION } from "@/constants/constants";
import ServiceCard from "@/components/ui/card/serviceCard";
import { CK_ASSETS } from "@/constants/assets";
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
            className="px-4 py-0.5 rounded-full"
          >
            Our Benefit for You
          </Button>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-slate-900 leading-tight whitespace-nowrap pb-8 pt-4">
            Why You’ll Love This
          </h1>
          <div className="flex place-items-stretch justify-center gap-14">
            <ServiceCard
              className="max-w-1/4"
              heading="Resource Providers"
              description="Monetize your idle machines by securely sharing compute and storage resources with our cloud network. Join with minimal setup, stay in full control, and earn passive income—while powering a new wave of decentralized infrastructure."
              image={CK_ASSETS.HERO_IMAGE.URL}
              showImage
              bgColor="bg-white"
              darkText
            />
            <ServiceCard
              className="max-w-1/4"
              heading="Resource Consumers"
              description="Leverage a scalable, distributed infrastructure that spans across multiple providers and locations. Run workloads seamlessly across clusters, migrate between nodes, and utilize the same application on different machines — all without managing the complexity."
              image={CK_ASSETS.HERO_IMAGE.URL}
              showImage
              imageFirst
              bgColor="bg-white"
              darkText
            />
          </div>
        </Section>
        <Section>
          <div className="py-14 px-6 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-8 items-center mx-10">
              {/* Left Column */}
              <div className="lg:col-span-4 flex flex-col items-start">
                <Button
                  variant="primaryOutlined"
                  className="px-4 py-0.5 rounded-full mb-4"
                >
                  Our Key Features
                </Button>
                <h1 className="text-2xl sm:text-2xl lg:text-4xl xl:text-5xl font-light text-slate-900 leading-tight">
                  Discover we enterprises can power and consume compute
                  seamlessly
                </h1>
              </div>

              {/* Middle Card */}
              <div className="lg:col-span-4">
                <ServiceCard
                  heading="Smart Compute Provisioning"
                  description="Turn your unused hardware into a revenue-generating asset. Let your servers work for you by joining a cloud network that rewards availability and performance — no extra IT burden."
                  image={CK_ASSETS.HERO_IMAGE.URL}
                  showImage
                  imageFirst
                  bgColor="bg-[#0A223C]"
                  darkText={false}
                  className="h-full"
                />
              </div>

              {/* Right Column */}
              <div className="lg:col-span-4 flex flex-col gap-6 h-full">
                <ServiceCard
                  heading="Roles: Be a Provider or a User"
                  description="Act as a host or consumer — or both. Whether you want to sell spare capacity or consume compute power, the platform can caters to both of your needs."
                  bgColor="bg-[#F8F7FE]"
                  darkText
                  showButton
                  className="flex-1 flex flex-col justify-between"
                  buttonSlot={
                    <div className="text-gray-700 font-medium cursor-pointer">
                      {"Learn More >"}
                    </div>
                  }
                />
                <ServiceCard
                  heading="On-Demand Virtual Machines"
                  description="Launch secure, high-performance VMs in minutes. Whether your teams are local or remote, instantly provision compute power where and when it's needed."
                  bgColor="bg-[#F8F7FE]"
                  darkText
                  showButton
                  className="flex-1 flex flex-col justify-between"
                  buttonSlot={
                    <div className="text-gray-700 font-medium cursor-pointer">
                      {"Learn More >"}
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
            className="px-4 py-0.5 rounded-full"
          >
            Why We Do This
          </Button>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-slate-900 leading-tight whitespace-nowrap pb-8 pt-4">
            We see potential everywhere.
          </h1>
          <div className="flex items-stretch  justify-center gap-10">
            <ServiceCard
              heading="Our Mission"
              description="Heavy computing on any device—powered by millions of providers in one trusted cloud."
              bgColor="bg-white"
              darkText
              showButton
              className="flex-1 flex flex-col justify-between max-w-1/3"
              buttonSlot={<div />}
            />
            <ServiceCard
              heading="Our Vision"
              description="Our mission is to enable anyone to securely share computing resources with anyone in the world."
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
            className="px-4 py-0.5 rounded-full"
          >
           Frequently Asked Question
          </Button>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-slate-900 leading-tight whitespace-nowrap pb-8 pt-4">
            Quick Answers, Clear Solutions
          </h1>
          <FAQSection/>
        </Section>
      </PageSeatter>
    </PageLayout>
  );
}
