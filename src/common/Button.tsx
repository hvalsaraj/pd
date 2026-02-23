import Link from "next/link";
import React from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "link";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  /** Accessible label for the button (use when visible text doesn't fully describe action) */
  "aria-label"?: string;
}

export default function Button({
  href,
  onClick,
  children,
  variant = "secondary",
  icon,
  iconPosition = "right",
  className = "",
  type = "button",
  disabled = false,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center text-sm font-medium px-3 py-2.5 rounded-[10px] transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none cursor-pointer focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none active:scale-[0.98]";

  const variantStyles = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary-hover px-4 gap-4 focus-visible:ring-offset-primary/20",
    secondary:
      "text-secondary font-medium border border-border bg-background hover:text-primary hover:border-primary/40 hover:bg-primary/5 active:bg-primary/8",
    link: "font-medium text-primary hover:text-primary-hover bg-transparent hover:underline underline-offset-4 active:scale-100",
  };

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className={children ? "mr-2.5" : ""}>{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className={children ? "-mr-2" : ""}>{icon}</span>
      )}
    </>
  );

  // If href is provided, render as Link
  if (href) {
    return (
      <Link
        href={href}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        aria-label={ariaLabel}
      >
        {content}
      </Link>
    );
  }

  // Otherwise, render as button element
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
