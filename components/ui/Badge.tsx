// components/ui/Badge.tsx
import type { ReactNode } from "react";
import clsx from "clsx";

export default function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={clsx("tech-badge", className)}>{children}</span>;
}
