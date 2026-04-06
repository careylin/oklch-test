import type { ButtonHTMLAttributes, ReactNode } from "react";
import { CounterBadge } from "../CounterBadge/CounterBadge";
import "./IconButton.css";

type Variant =
  | "accent"
  | "primary"
  | "secondary"
  | "tertiary"
  | "ghost"
  | "inset-light"
  | "inset-dark";
type Size = "xs" | "sm" | "md" | "lg";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  elevated?: boolean;
  icon: ReactNode;
  badgeCount?: number;
}

export function IconButton({
  variant = "accent",
  size = "md",
  elevated,
  icon,
  badgeCount,
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={[
        "icon-btn",
        `icon-btn--${variant}`,
        `icon-btn--${size}`,
        elevated && "icon-btn--elevated",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <span className="icon-btn__icon">{icon}</span>
      {badgeCount != null && (
        <CounterBadge
          count={badgeCount}
          variant="inverse"
          className="icon-btn__badge"
        />
      )}
    </button>
  );
}
