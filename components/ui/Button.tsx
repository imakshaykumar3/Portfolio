// components/ui/Button.tsx
import type { AnchorHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <a
      className={clsx(
        "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 focus-visible:outline-none",
        variant === "primary" &&
          "bg-gradient-signal text-white shadow-glow hover:shadow-glow-purple hover:-translate-y-0.5",
        variant === "secondary" &&
          "glass glass-hover text-primary hover:-translate-y-0.5",
        variant === "ghost" &&
          "text-secondary hover:text-primary underline-offset-4 hover:underline",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
