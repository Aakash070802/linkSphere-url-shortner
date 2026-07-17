import { Container } from "@/components/common/Container";

import { HeroBackground } from "./HeroBackground";
import { HeroBadge } from "./HeroBadge";
import { HeroHeading } from "./HeroHeading";
import { HeroSearchBar } from "./HeroSearchBar";
import { TrustedBy } from "./TrustedBy";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
      <HeroBackground />

      <Container>
        <div className="relative z-10 flex min-h-[560px] flex-col items-center justify-center sm:min-h-[620px] lg:min-h-[720px]">
          <HeroBadge />

          <HeroHeading />

          <HeroSearchBar />

          <TrustedBy />
        </div>
      </Container>
    </section>
  );
}
