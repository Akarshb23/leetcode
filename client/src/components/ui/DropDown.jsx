import React, { useState } from "react";

function DropDown({ trigger, items = [] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <div onClick={() => setOpen(!open)} className="cursor-pointer">
        {trigger}
      </div>

      {open && (
        <div className="absolute right-0 mt-2 w-48 overflow-hidden rounded-md border border-border bg-surface shadow-lg z-50">
          <ul className="py-1">
            {items.map((item, i) => (
              <li
                key={i}
                onClick={() => {
                  item.onClick && item.onClick();
                  setOpen(false);
                }}
                className={`cursor-pointer px-4 py-2 text-sm hover:bg-[#3a3a3a] ${
                  item.danger ? "text-red-500" : "text-text-primary"
                }`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropDown;
