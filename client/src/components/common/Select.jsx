import React from "react";

function Select({ className = "", children, ...rest }) {
  return (
    <select
      className={`h-9 rounded-md border border-border bg-surface px-3 text-sm text-text-primary outline-none cursor-pointer ${className}`}
      {...rest}
    >
      {children}
    </select>
  );
}

export default Select;
