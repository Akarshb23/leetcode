import React from "react";
import { Sparkles } from "lucide-react";

function PremiumBtn() {
  return (
    <button className="flex h-8 items-center gap-1.5 rounded bg-gradient-to-r from-[#ffb800] to-[#ffa116] px-3 text-[12px] font-medium text-[#1a1a1a] hover:opacity-90 cursor-pointer">
      <Sparkles size={14} />
      Premium
    </button>
  );
}

export default PremiumBtn;
