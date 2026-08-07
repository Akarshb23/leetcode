import React from "react";
import { useParams } from "react-router-dom";
import ContestHeader from "../../components/contest/ContestHeader";
import ContestTimer from "../../components/contest/ContestTimer";
import ContestProblems from "./ContestProblems";
import ContestRules from "./ContestRules";
import ContestLeaderboard from "./ContestLeaderboard";

function ContestDetails() {
  const { contestId } = useParams();

  return (
    <div className="mx-auto max-w-[1280px] px-6 py-6 space-y-5">
      <ContestHeader name={`Weekly Contest ${contestId || "514"}`} />

      <ContestTimer />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-5">
          <ContestProblems />
        </div>

        <aside className="space-y-5">
          <ContestRules />
          <ContestLeaderboard />
        </aside>
      </div>
    </div>
  );
}

export default ContestDetails;
