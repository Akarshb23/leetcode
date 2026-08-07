import React, { useState } from "react";

function DropDown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffa116] text-sm font-medium text-[#1a1a1a] cursor-pointer"
      >
        A
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 overflow-hidden rounded-md border border-border bg-surface z-50">
          <ul className="py-1">
            <li className="cursor-pointer px-4 py-2 text-sm text-text-primary">
              Profile
            </li>

            <li className="cursor-pointer px-4 py-2 text-sm text-text-primary">
              My Progress
            </li>

            <li className="cursor-pointer px-4 py-2 text-sm text-text-primary">
              Bookmarks
            </li>

            <li className="cursor-pointer px-4 py-2 text-sm text-text-primary">
              Settings
            </li>

            <hr className="border-border" />

            <li className="cursor-pointer px-4 py-2 text-sm text-red-500">
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropDown;