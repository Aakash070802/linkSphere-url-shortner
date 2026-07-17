import { cn } from "@/lib/utils";

type ContainerProps = React.HTMLAttributes<HTMLElement> & {
  as?: React.ElementType;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
};

const sizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  "2xl": "max-w-[90rem]",
  full: "max-w-none",
};

export function Container({
  as: Component = "div",
  size = "xl",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn("mx-auto w-full px-5 sm:px-6 lg:px-8 xl:px-10", sizes[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
