import type { HTMLAttributes } from "react";
import "./Stack.css";

type Space = "sm" | "md" |  "lg" | "xl";
type Align = "left" | "center" | "right";

interface StackProps extends HTMLAttributes<HTMLDivElement> {
  space?: Space;
  align?: Align;
}

export function Stack({
  space = "sm",
  align = "left",
  className,
  children,
  ...props
}: StackProps) {
  return (
    <div
      className={["stack", `stack--${space}`, `stack--${align}`, className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
