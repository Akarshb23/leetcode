import React from "react";
import Console from "./Console";

function OutputPanel() {
  return (
    <div className="border-t border-[#2e2e2e] bg-[#262626]">
      <div className="flex items-center gap-3 border-b border-[#2e2e2e] bg-[#262626] px-4 py-2 text-[12px]">
        <button className="rounded px-2.5 py-1 text-text-primary border-b-2 border-transparent">
          Testcase
        </button>

        <button className="rounded px-2.5 py-1 text-text-secondary hover:text-white">
          Test Result
        </button>
      </div>

      <div className="h-[140px] overflow-y-auto bg-[#1a1a1a]">
        <Console />
      </div>
    </div>
  );
}

export default OutputPanel;
