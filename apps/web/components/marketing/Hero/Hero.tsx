import { Container } from "@/components/common/Container";

import { HeroBackground } from "./HeroBackground";
import { HeroBadge } from "./HeroBadge";
import { HeroHeading } from "./HeroHeading";
import { HeroSearchBar } from "./HeroSearchBar";
import { TrustedBy } from "./TrustedBy";

export function Hero() {
  return (
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
  );
}
