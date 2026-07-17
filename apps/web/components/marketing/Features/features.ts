import { BarChart3, Link2, QrCode, ShieldCheck, type LucideIcon } from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export const features: Feature[] = [
  {
    icon: Link2,
    title: "Branded short links",
    description:
      "Custom slugs and connected domains so every link stays on brand — from social bios to campaign UTMs.",
  },
  {
    icon: QrCode,
    title: "Dynamic QR codes",
    description:
      "Generate scannable QR codes tied to every short link. Swap destinations without reprinting.",
  },
  {
    icon: BarChart3,
    title: "Real-time analytics",
    description:
      "Track clicks, geography, devices, and referrers with a beautifully honest analytics dashboard.",
  },
  {
    icon: ShieldCheck,
    title: "Safe by default",
    description:
      "Phishing scans, password protection, and expiring links keep your audience — and brand — protected.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      '"LinkSphere replaced three tools for our growth team. The analytics finally match what we see in GA."',
    author: "Priya Nair",
    role: "Head of Growth, Northlane",
  },
  {
    quote:
      '"The QR codes alone paid for a year. We reroute event links mid-conference without reprinting a thing."',
    author: "Marcus Weber",
    role: "Events Lead, Fieldnote",
  },
  {
    quote:
      '"Cleanest link tool I\'ve used. Feels like it was designed by people who actually ship marketing."',
    author: "Sana Ali",
    role: "Brand Director, Kite Studio",
  },
];
