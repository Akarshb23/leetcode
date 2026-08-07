import React from "react";

function Spinner({ size = 18, className = "" }) {
  return (
    <div
      className={`inline-block animate-spin rounded-full border-2 border-border border-t-[#ffa116] ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

export default Spinner;
