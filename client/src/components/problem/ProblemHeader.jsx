import React from "react";
import DifficultyBadge from "./DifficultyBadge";
import Tags from "./Tags";

function ProblemHeader({ number = 1, title = "Two Sum", difficulty = "Easy" }) {
  return (
    <div className="border-b border-border pb-4">
      <div className="flex items-center gap-3">
        <h1 className="text-[22px] font-semibold text-text-primary">
          {number}. {title}
        </h1>

        <DifficultyBadge difficulty={difficulty} />
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <Tags tags={["Array", "Hash Table"]} />

        <span className="text-[11px] text-text-muted">Acceptance: 56.2%</span>
      </div>
    </div>
  );
}

export default ProblemHeader;
