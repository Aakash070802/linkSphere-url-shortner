import { ArrowRight, Link2, ShieldCheck, Sparkles, Zap } from "lucide-react";

export const authBranding = {
  logoHref: "/",

  title: "A quieter, sharper home\nfor every link you share.",

  description:
    "Branded short links, dynamic QR codes, and honest analytics — in one clean workspace.",

  features: [
    {
      icon: Sparkles,
      text: "Custom slugs and connected domains",
    },
    {
      icon: Zap,
      text: "Real-time click analytics",
    },
    {
      icon: ShieldCheck,
      text: "Phishing scans on every link",
    },
  ],

  testimonial: {
    quote: "“LinkSphere replaced three tools for our growth team.”",
    author: "Priya Nair — Head of Growth, Northlane",
  },
};

export const signUpContent = {
  title: "Create your account",

  description: "Start with 100 free short links a month — no credit card required.",

  social: {
    google: "Google",
    github: "GitHub",
  },

  divider: "or use your email",

  fields: {
    fullName: {
      label: "Full name",
      placeholder: "Aakash Kumar",
    },

    email: {
      label: "Work email",
      placeholder: "you@company.com",
    },

    password: {
      label: "Password",
      placeholder: "••••••••",
    },

    confirmPassword: {
      label: "Confirm",
      placeholder: "••••••••",
    },
  },

  terms: {
    prefix: "By creating an account you agree to our",
    terms: {
      label: "Terms",
      href: "/terms",
    },
    privacy: {
      label: "Privacy Policy",
      href: "/privacy",
    },
  },

  submit: {
    label: "Create account",
    icon: ArrowRight,
  },

  bottom: {
    text: "Already have an account?",
    action: {
      label: "Sign in",
      href: "/sign-in",
    },
  },
};
