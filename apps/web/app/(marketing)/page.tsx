import { Hero } from "@/components/marketing/Hero/Hero";
import { FeaturesSection } from "@/components/marketing/Features/FeaturesSection";
import { Testimonials } from "@/components/marketing/Testimonial/Testimonials";
import { PricingSection } from "@/components/marketing/Pricing/PricingSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturesSection />
      <Testimonials />
      <PricingSection />
    </main>
  );
}
