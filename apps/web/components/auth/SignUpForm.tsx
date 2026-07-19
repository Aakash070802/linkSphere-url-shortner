"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { ArrowRight } from "lucide-react";

import { AuthDivider } from "./AuthDivider";
import { AuthPasswordInput } from "./AuthPasswordInput";
import { AuthSocialButtons } from "./AuthSocialButtons";
import { signUpContent } from "./auth";

import { Button } from "@/components/ui/button";

export function SignUpForm() {
  const SubmitIcon = signUpContent.submit.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45 }}
      className="mx-auto flex w-full max-w-[430px] flex-col justify-center"
    >
      {/* Heading */}

      <div>
        <h1 className="text-foreground text-[2.25rem] font-bold tracking-[-0.04em]">
          {signUpContent.title}
        </h1>

        <p className="text-marketing-muted mt-3 text-[15px] leading-7">
          {signUpContent.description}
        </p>
      </div>

      {/* OAuth */}

      <div className="mt-8">
        <AuthSocialButtons />
      </div>

      {/* Divider */}

      <div className="my-8">
        <AuthDivider text={signUpContent.divider} />
      </div>

      {/* Form */}

      <form className="space-y-5">
        {/* Full Name */}

        <div className="space-y-2">
          <label className="text-foreground text-sm font-semibold">
            {signUpContent.fields.fullName.label}
          </label>

          <input
            type="text"
            placeholder={signUpContent.fields.fullName.placeholder}
            className="border-marketing-border bg-background text-foreground placeholder:text-marketing-muted focus:border-primary focus:ring-primary/15 h-12 w-full rounded-xl border px-4 text-[15px] transition-all outline-none focus:ring-4"
          />
        </div>

        {/* Email */}

        <div className="space-y-2">
          <label className="text-foreground text-sm font-semibold">
            {signUpContent.fields.email.label}
          </label>

          <input
            type="email"
            placeholder={signUpContent.fields.email.placeholder}
            className="border-marketing-border bg-background text-foreground placeholder:text-marketing-muted focus:border-primary focus:ring-primary/15 h-12 w-full rounded-xl border px-4 text-[15px] transition-all outline-none focus:ring-4"
          />
        </div>

        {/* Password */}

        <AuthPasswordInput
          label={signUpContent.fields.password.label}
          placeholder={signUpContent.fields.password.placeholder}
        />

        {/* Confirm Password */}

        <AuthPasswordInput
          label={signUpContent.fields.confirmPassword.label}
          placeholder={signUpContent.fields.confirmPassword.placeholder}
        />

        {/* Terms */}

        <p className="text-marketing-muted pt-1 text-sm leading-6">
          {signUpContent.terms.prefix}{" "}
          <Link
            href={signUpContent.terms.terms.href}
            className="text-primary font-semibold hover:underline"
          >
            {signUpContent.terms.terms.label}
          </Link>{" "}
          and{" "}
          <Link
            href={signUpContent.terms.privacy.href}
            className="text-primary font-semibold hover:underline"
          >
            {signUpContent.terms.privacy.label}
          </Link>
          .
        </p>

        {/* Submit */}

        <Button className="mt-2 h-12 w-full rounded-xl text-base font-semibold">
          {signUpContent.submit.label}

          <SubmitIcon className="ml-2 size-5 transition-transform duration-300 group-hover/button:translate-x-1" />
        </Button>
      </form>

      {/* Bottom */}

      <p className="text-marketing-muted mt-8 text-center text-[15px]">
        {signUpContent.bottom.text}{" "}
        <Link
          href={signUpContent.bottom.action.href}
          className="text-primary font-semibold hover:underline"
        >
          {signUpContent.bottom.action.label}
        </Link>
      </p>
    </motion.div>
  );
}
