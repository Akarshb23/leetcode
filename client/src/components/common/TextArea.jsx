import React from "react";

function TextArea({ className = "", ...rest }) {
  return (
    <textarea
      className={`w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-[#5a5a5a] ${className}`}
      {...rest}
    />
  );
}

export default TextArea;
