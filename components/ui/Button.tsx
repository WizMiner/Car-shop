"use client";

import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm sm:text-base",
  lg: "h-12 px-6 text-base",
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-primary-600 text-white hover:bg-primary-700 focus-visible:outline-primary-600",
  secondary:
    "bg-secondary-500 text-white hover:bg-secondary-600 focus-visible:outline-secondary-500",
  ghost:
    "bg-transparent text-foreground border border-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900",
};

export function Button({
  className,
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200",
        "shadow-sm hover:shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        sizeClasses[size],
        variantClasses[variant],
        disabled || loading ? "opacity-60 cursor-not-allowed" : "",
        className ?? "",
      ].join(" ")}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/70 border-t-transparent" />
      )}
      {children}
    </button>
  );
}

export default Button;


