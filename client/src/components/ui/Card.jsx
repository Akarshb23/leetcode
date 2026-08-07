import React from "react";

function Card({ className = "", children }) {
  return (
    <div
      className={`rounded-lg border border-border bg-surface ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
