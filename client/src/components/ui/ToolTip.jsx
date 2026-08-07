import React, { useState } from "react";

function ToolTip({ text, children }) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>

      {show && (
        <div className="absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 rounded bg-[#1f1f1f] px-2 py-1 text-[11px] text-text-primary shadow-lg whitespace-nowrap">
          {text}
        </div>
      )}
    </div>
  );
}

export default ToolTip;
