import type { HTMLAttributes } from "react";
import "./CounterBadge.css";

type Variant = "default" | "accent" | "inverse";

interface CounterBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  count: number;
  variant?: Variant;
}

export function CounterBadge({
  count,
  variant = "default",
  className,
  ...props
}: CounterBadgeProps) {
  return (
    <span
      className={[
        "counter-badge",
        variant !== "default" && `counter-badge--${variant}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {count}
    </span>
  );
}
