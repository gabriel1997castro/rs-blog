import {
  CustomerStorySection,
  FeatureSection,
  HeroSection,
  SupportSection,
  CallToAction,
} from "@/templates/landing-page/sections";

export const LandingPage = () => (
  <article className="flex flex-col gap-10 md:gap-20">
    <HeroSection />
    <FeatureSection />
    <SupportSection />
    <CustomerStorySection />
    <CallToAction />
  </article>
);
