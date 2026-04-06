import type { CSSProperties, ElementType, HTMLAttributes } from "react";
import "./Box.css";

type Spacing = "none" | "xs" | "sm" | "md" | "lg" | "xl";
type Background = "primary" | "secondary" | "tertiary" | "tinted" | "inverse" | "accent";
type Radius = "none" | "sm" | "md" | "lg" | "full";
type Border = "separator" | "interactive";
type Shadow = "sm" | "md" | "lg";
type BoxElement =
  | "div" | "section" | "article" | "aside"
  | "nav" | "header" | "footer" | "main"
  | "ul" | "ol" | "li" | "span";

interface BoxProps extends HTMLAttributes<HTMLElement> {
  padding?: Spacing;
  paddingInline?: Spacing;
  paddingBlock?: Spacing;
  paddingTop?: Spacing;
  paddingBottom?: Spacing;
  paddingLeft?: Spacing;
  paddingRight?: Spacing;
  background?: Background;
  radius?: Radius;
  border?: Border;
  shadow?: Shadow;
  width?: string;
  asElement?: BoxElement;
}

const spacingValues: Record<Spacing, string> = {
  none: "0px",
  xs:   "4px",
  sm:   "8px",
  md:   "16px",
  lg:   "24px",
  xl:   "32px",
};

// Individual side > directional > all-sides
function resolve(
  individual?: Spacing,
  directional?: Spacing,
  all?: Spacing,
): string | undefined {
  const s = individual ?? directional ?? all;
  return s !== undefined ? spacingValues[s] : undefined;
}

export function Box({
  padding,
  paddingInline,
  paddingBlock,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  background,
  radius,
  border,
  shadow,
  width,
  asElement = "div",
  className,
  style,
  children,
  ...props
}: BoxProps) {
  const Tag = asElement as ElementType;

  const paddingStyle: CSSProperties = {
    paddingTop:    resolve(paddingTop,    paddingBlock,  padding),
    paddingBottom: resolve(paddingBottom, paddingBlock,  padding),
    paddingLeft:   resolve(paddingLeft,   paddingInline, padding),
    paddingRight:  resolve(paddingRight,  paddingInline, padding),
  };

  return (
    <Tag
      className={[
        "box",
        background && `box--bg-${background}`,
        radius     && `box--radius-${radius}`,
        border     && `box--border-${border}`,
        shadow     && `box--shadow-${shadow}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ ...paddingStyle, width, ...style }}
      {...props}
    >
      {children}
    </Tag>
  );
}
