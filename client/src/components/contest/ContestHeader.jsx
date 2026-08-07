import React from "react";

function ContestHeader({ name = "Weekly Contest" }) {
  return (
    <div className="rounded-lg border border-[#2e2e2e] bg-[#262626] p-5">
      <p className="text-[11px] font-medium uppercase tracking-wider text-[#ffa116]">
        LeetCode Contest
      </p>

      <h1 className="mt-1.5 text-[24px] font-semibold text-white">{name}</h1>

      <p className="mt-1 text-[13px] text-text-secondary">
        Compete live with engineers worldwide and earn LeetCoins.
      </p>
    </div>
  );
}

export default ContestHeader;
