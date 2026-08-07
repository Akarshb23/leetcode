import React from "react";
import { problems } from "../../data/problems";
import ProblemRow from "./ProblemRow";

function ProblemTable() {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-surface">
      {/* Header */}
      <div className="grid grid-cols-[50px_1fr_110px_120px_110px_90px] items-center border-b border-border bg-navbar px-6 py-3 text-xs font-medium uppercase tracking-wide text-text-muted">
        <div></div>

        <div>Title</div>

        <div>Solution</div>

        <div>Acceptance</div>

        <div>Difficulty</div>

        <div>Frequency</div>
      </div>

      {/* Rows */}
      {problems.map((problem) => (
        <ProblemRow
          key={problem.id}
          problem={problem}
        />
      ))}
    </div>
  );
}

export default ProblemTable;