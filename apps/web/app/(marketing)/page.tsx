import { Container } from "@/components/common/Container";
import { HeroBackground } from "@/components/marketing/Hero/HeroBackground";
import { HeroBadge } from "@/components/marketing/Hero/HeroBadge";
import { HeroHeading } from "@/components/marketing/Hero/HeroHeading";
import { HeroSearchBar } from "@/components/marketing/Hero/HeroSearchBar";
import { TrustedBy } from "@/components/marketing/Hero/TrustedBy";

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden py-24">
        <HeroBackground />
        <Container>
          <div className="relative z-10 flex min-h-180 flex-col items-center">
            <HeroBadge />
            <HeroHeading />
            <HeroSearchBar />
            <TrustedBy />
          </div>
        </Container>
      </section>
    </main>
  );
}
