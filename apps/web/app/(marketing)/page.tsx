import { Hero } from "@/components/marketing/Hero/Hero";
import { FeaturesSection } from "@/components/marketing/Features/FeaturesSection";
import { Testimonials } from "@/components/marketing/Testimonial/Testimonials";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturesSection />
      <Testimonials />
    </main>
  );
}
