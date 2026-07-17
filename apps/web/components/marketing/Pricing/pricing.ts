import { Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface PricingFeature {
  label: string;
}

export interface PricingPlan {
  name: string;
  description: string;

  price: string;
  suffix?: string;

  button: string;

  highlighted?: boolean;
  badge?: string;

  icon: LucideIcon;

  features: PricingFeature[];
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    description: "For personal projects",

    price: "Free",

    button: "Start free",

    icon: Check,

    features: [
      {
        label: "100 short links / mo",
      },
      {
        label: "Basic analytics",
      },
      {
        label: "5 QR codes",
      },
      {
        label: "Community support",
      },
    ],
  },

  {
    name: "Pro",
    description: "For creators & small teams",

    price: "$12",
    suffix: "/mo",

    button: "Try Pro free",

    highlighted: true,
    badge: "Most popular",

    icon: Check,

    features: [
      {
        label: "Unlimited short links",
      },
      {
        label: "Advanced analytics",
      },
      {
        label: "Unlimited QR codes",
      },
      {
        label: "1 custom domain",
      },
      {
        label: "Email support",
      },
    ],
  },

  {
    name: "Business",
    description: "For growing teams",

    price: "$39",
    suffix: "/mo",

    button: "Book a demo",

    icon: Check,

    features: [
      {
        label: "Everything in Pro",
      },
      {
        label: "5 custom domains",
      },
      {
        label: "Team seats & roles",
      },
      {
        label: "SAML SSO",
      },
      {
        label: "Priority support",
      },
    ],
  },
];
