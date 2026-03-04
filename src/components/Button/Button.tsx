import type { ButtonHTMLAttributes } from "react";
import "./Button.css";

type Variant = "accent" | "primary" | "secondary" | "tertiary" | "ghost";
type Size = "xs" | "sm" | "md" | "lg" | "xl";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  elevated?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  elevated,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={["btn", `btn--${variant}`, `btn--${size}`, elevated && "btn--elevated", className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
