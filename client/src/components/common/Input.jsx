import React from "react";

function Input({ className = "", ...rest }) {
  return (
    <input
      className={`h-9 w-full rounded-md border border-border bg-surface px-3 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-[#5a5a5a] ${className}`}
      {...rest}
    />
  );
}

export default Input;
