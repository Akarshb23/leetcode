import React from "react";
import { ChevronDown } from "lucide-react";

function FontSizeSelector() {
  return (
    <button className="flex h-7 items-center gap-1.5 rounded border border-[#3a3a3a] bg-[#262626] px-2.5 text-[12px] text-text-secondary hover:text-white cursor-pointer">
      13
      <ChevronDown size={12} />
    </button>
  );
}

export default FontSizeSelector;
