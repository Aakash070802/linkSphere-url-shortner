import { Container } from "@/components/common/Container";
import { ThemeToggle } from "@/components/common/ThemeToggle";

export default function HomePage() {
  return (
    <main className="py-20">
      <Container className="flex items-center justify-between">
        <h1 className="text-5xl font-bold tracking-tight">Landing Page</h1>

        <ThemeToggle />
      </Container>
    </main>
  );
}
