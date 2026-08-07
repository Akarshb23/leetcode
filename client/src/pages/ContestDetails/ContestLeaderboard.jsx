import React from "react";
import Leaderboard from "../../components/contest/Leaderboard";

function ContestLeaderboard() {
  return (
    <div className="rounded-lg border border-[#2e2e2e] bg-[#262626]">
      <div className="border-b border-[#2e2e2e] px-5 py-3">
        <h2 className="text-[14px] font-medium uppercase tracking-wide text-text-muted">
          Top Ranked
        </h2>
      </div>

      <div className="p-4">
        <Leaderboard />
      </div>
    </div>
  );
}

export default ContestLeaderboard;
