import React from "react";
import { Play } from "lucide-react";

function RunButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 rounded-md border border-[#3a3a3a] bg-[#262626] px-3 py-1.5 text-[12px] text-text-primary hover:bg-[#3a3a3a] cursor-pointer"
    >
      <Play size={12} />
      Run
    </button>
  );
}

export default RunButton;
