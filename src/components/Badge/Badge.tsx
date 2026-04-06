import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import "./Badge.css";

type Variant = "neutral" | "inverted" | "info" | "error" | "caution" | "success" | "custom";
type Emphasis = "strong" | "mid" | "weak";
type Size = "md" | "sm";

type BadgeBaseProps = {
  variant?: Variant;
  emphasis?: Emphasis;
  size?: Size;
  icon?: ReactNode;
};

type BadgeButtonProps = BadgeBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
    href?: never;
    children: ReactNode;
  };

type BadgeAnchorProps = BadgeBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> & {
    href: string;
    children: ReactNode;
  };

type BadgeSpanProps = BadgeBaseProps & {
  href?: never;
  onClick?: never;
  className?: string;
  children: ReactNode;
};

type BadgeProps = BadgeButtonProps | BadgeAnchorProps | BadgeSpanProps;

export function Badge({
  variant = "neutral",
  emphasis = "strong",
  size = "md",
  icon,
  className,
  children,
  ...props
}: BadgeProps) {
  const classes = [
    "badge",
    `badge--${variant}`,
    `badge--${emphasis}`,
    size !== "md" && `badge--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon && <span className="badge__icon">{icon}</span>}
      <span className="badge__label">{children}</span>
    </>
  );

  if ("href" in props && props.href) {
    return (
      <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  if ("onClick" in props && props.onClick) {
    return (
      <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
        {content}
      </button>
    );
  }

  return (
    <span className={classes} {...(props as { className?: string })}>
      {content}
    </span>
  );
}
