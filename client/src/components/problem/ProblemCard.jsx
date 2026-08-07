import React from "react";
import DifficultyBadge from "./DifficultyBadge";
import Tags from "./Tags";

function ProblemCard({ problem }) {
  return (
    <div className="rounded-md border border-border bg-surface p-4 hover:border-[#3a3a3a]">
      <div className="flex items-center justify-between">
        <h3 className="text-[14px] font-medium text-text-primary">
          {problem.id}. {problem.title}
        </h3>

        <DifficultyBadge difficulty={problem.difficulty} />
      </div>

      <div className="mt-2">
        <Tags tags={problem.tags} />
      </div>

      <div className="mt-3 flex items-center justify-between text-[12px] text-text-muted">
        <span>Acceptance: {problem.acceptance}%</span>
        <span>Likes: {problem.likes}</span>
      </div>
    </div>
  );
}

export default ProblemCard;
