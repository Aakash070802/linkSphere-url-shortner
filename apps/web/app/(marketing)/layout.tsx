import { Navbar } from "@/components/marketing/Nav-section/Navbar";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
