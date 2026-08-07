import React from "react";

function Button({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  ...rest
}) {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  const variants = {
    primary: "bg-[#ffa116] text-[#1a1a1a] hover:bg-[#ffb800]",
    secondary: "bg-[#3a3a3a] text-[#d9d9d9] hover:bg-[#4a4a4a]",
    outline: "border border-border bg-transparent text-text-primary hover:bg-surface",
    ghost: "bg-transparent text-text-primary hover:bg-surface",
    danger: "bg-[#ef4743] text-white hover:bg-[#d63a37]",
  };

  const sizes = {
    sm: "h-8 px-3 text-[12px]",
    md: "h-9 px-4 text-[13px]",
    lg: "h-10 px-5 text-[14px]",
  };

  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
