import React from "react";

function CardFooter({ className = "", children }) {
  return (
    <div
      className={`border-t border-border px-4 py-3 text-[13px] text-text-secondary ${className}`}
    >
      {children}
    </div>
  );
}

export default CardFooter;
