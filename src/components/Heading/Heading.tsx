import type { ElementType, HTMLAttributes } from "react";
import "./Heading.css";

type HeadingLevel = 100 | 150 | 200 | 300 | 400 | 500 | 600 | 700;
type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "span";
type Align = "left" | "center" | "right";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  align?: Align;
  asElement?: HeadingElement;
}

export function Heading({
  level = 200,
  align,
  asElement = "span",
  className,
  children,
  ...props
}: HeadingProps) {
  const Tag = asElement as ElementType;
  return (
    <Tag
      className={[
        "heading",
        `heading--${level}`,
        align && `heading--${align}`,
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
