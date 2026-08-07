import React from "react";

function Badge({ children, variant = "default", className = "" }) {
  const variants = {
    default: "bg-[#3a3a3a] text-[#d9d9d9]",
    easy: "bg-[#1f3d3a] text-[#00b8a3]",
    medium: "bg-[#3d361f] text-[#ffc01e]",
    hard: "bg-[#3d1f23] text-[#ff375f]",
    premium: "bg-[#3d2f1f] text-[#f7c948]",
  };

  return (
    <span
      className={`inline-flex items-center rounded px-2 py-0.5 text-[11px] font-medium ${variants[variant] || variants.default} ${className}`}
    >
      {children}
    </span>
  );
}

export default Badge;
