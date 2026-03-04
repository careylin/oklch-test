import type { HTMLAttributes } from "react";
import "./Inline.css";

type Space = "xs" | "sm" | "md" | "lg" | "xl";
type Align = "left" | "center" | "right";
type Spread = "hug" | "fill";

interface InlineProps extends HTMLAttributes<HTMLDivElement> {
  space?: Space;
  align?: Align;
  spread?: Spread;
}

export function Inline({
  space = "md",
  align = "left",
  spread = "hug",
  className,
  children,
  ...props
}: InlineProps) {
  return (
    <div
      className={["inline", `inline--${space}`, `inline--${align}`, `inline--${spread}`, className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
