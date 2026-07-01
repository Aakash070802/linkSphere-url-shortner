import type { PropsWithChildren } from "react";

interface AuthCardProps extends PropsWithChildren {
  title: string;
  description: string;
}

const AuthCard = ({ title, description, children }: AuthCardProps) => {
  return (
    <section className="bg-carbon border-fern shadow-md rounded-2xl border p-10">
      <header className="mb-10 space-y-3">
        <h1 className="font-goga text-heading-sm text-phosphor-mint leading-tight">
          {title}
        </h1>

        <p className="text-body text-lichen leading-relaxed">{description}</p>
      </header>

      {children}
    </section>
  );
};

export default AuthCard;
