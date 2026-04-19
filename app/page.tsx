import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoCloud } from "@/components/LogoCloud";
import { AboutSection } from "@/components/AboutSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { MarketingPower } from "@/components/MarketingPower";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen selection:bg-brand-light selection:text-gray-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <LogoCloud />
      <AboutSection />
      <FeaturesSection />
      <MarketingPower />
      <PricingSection />
      <TestimonialSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
