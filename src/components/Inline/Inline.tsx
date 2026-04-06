import type { HTMLAttributes } from "react";
import "./Inline.css";

type Space = "xs" | "sm" | "md" | "lg" | "xl";
type Align = "left" | "center" | "right" | "spread";
type Fit = "hug" | "fill";

interface InlineProps extends HTMLAttributes<HTMLDivElement> {
  space?: Space;
  align?: Align;
  fit?: Fit;
  width?: string;
}

export function Inline({
  space = "md",
  align = "left",
  fit = "hug",
  width,
  className,
  style,
  children,
  ...props
}: InlineProps) {
  return (
    <div
      className={["inline", `inline--${space}`, `inline--${align}`, `inline--${fit}`, className]
        .filter(Boolean)
        .join(" ")}
      style={{ ...style, width }}
      {...props}
    >
      {children}
    </div>
  );
}
