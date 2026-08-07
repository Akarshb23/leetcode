import React from "react";

function ContestTimer() {
  return (
    <div className="rounded-lg border border-[#2e2e2e] bg-[#262626] p-5 text-center">
      <p className="text-[11px] font-medium uppercase tracking-wider text-text-muted">
        Starts in
      </p>

      <p className="mt-2 font-mono text-[28px] font-semibold text-white">
        03d 04h 22m
      </p>

      <button className="mt-3 rounded-md bg-[#ffa116] px-5 py-1.5 text-[13px] font-medium text-[#1a1a1a] hover:bg-[#ffb800] cursor-pointer">
        Register
      </button>
    </div>
  );
}

export default ContestTimer;
