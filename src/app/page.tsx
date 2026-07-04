import { HeroSection } from "@/components/sections/hero-section";
import { TrustSection } from "@/components/sections/trust-section";
import { StatsSection, ServicesPreview, WhyNzoSection, PositioningSection } from "@/components/sections/home-sections";
import { ApproachPreview } from "@/components/sections/approach-preview";
import { CTASection } from "@/components/sections/page-hero";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <StatsSection />
      <PositioningSection />
      <ServicesPreview />
      <WhyNzoSection />
      <ApproachPreview />
      <CTASection />
    </>
  );
}
