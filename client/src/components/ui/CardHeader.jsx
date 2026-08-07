import React from "react";

function CardHeader({ title, className = "", children }) {
  return (
    <div
      className={`border-b border-border px-4 py-3 ${className}`}
    >
      {title && (
        <h3 className="text-[14px] font-medium text-text-primary">
          {title}
        </h3>
      )}

      {children}
    </div>
  );
}

export default CardHeader;
