import type { ElementType, HTMLAttributes } from "react";
import "./Text.css";

type TextLevel = 100 | 200 | 300;
type TextElement = "p" | "div" | "span";
type Align = "left" | "center" | "right";

interface TextProps extends HTMLAttributes<HTMLElement> {
  level?: TextLevel;
  align?: Align;
  asElement?: TextElement;
}

export function Text({
  level = 200,
  align,
  asElement = "p",
  className,
  children,
  ...props
}: TextProps) {
  const Tag = asElement as ElementType;
  return (
    <Tag
      className={[
        "prose",
        `prose--${level}`,
        align && `prose--${align}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </Tag>
  );
}
