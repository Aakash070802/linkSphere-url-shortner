import type { PropsWithChildren } from "react";

interface AuthCardProps extends PropsWithChildren {
  title: string;
  description: string;
}

const AuthCard = ({ title, description, children }: AuthCardProps) => {
  return (
    <section className="border-fern bg-carbon rounded-2xl border p-8">
      <header className="mb-8 space-y-2">
        <h1 className="font-goga text-heading-sm text-phosphor-mint">
          {title}
        </h1>

        <p className="text-body text-lichen">{description}</p>
      </header>

      {children}
    </section>
  );
};

export default AuthCard;
