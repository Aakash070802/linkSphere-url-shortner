import { ArrowRight, Link2, Zap } from "lucide-react";

export const footerCta = {
  badge: {
    icon: Zap,
    text: "Ship your first short link in 30 seconds",
  },

  title: "Give your links a home worth clicking.",

  primaryButton: {
    label: "Get started free",
    href: "/signup",
    icon: ArrowRight,
  },

  secondaryButton: {
    label: "Explore the dashboard",
    href: "/dashboard",
  },
};

export const footerLinks = [
  {
    label: "Privacy",
    href: "/privacy",
  },
  {
    label: "Terms",
    href: "/terms",
  },
  {
    label: "Status",
    href: "/status",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const footerCopyright = {
  year: 2026,
  brand: "LinkSphere",
  icon: Link2,
};
