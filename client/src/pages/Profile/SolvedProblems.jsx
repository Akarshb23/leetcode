import React from "react";
import { problems } from "../../data/problems";

function SolvedProblems() {
  return (
    <div className="space-y-2">
      {problems.slice(0, 5).map((p) => (
        <div
          key={p.id}
          className="flex items-center justify-between rounded-md border border-border bg-surface px-4 py-2 text-[13px]"
        >
          <span className="text-text-primary">
            {p.id}. {p.title}
          </span>

          <span
            className={
              p.difficulty === "Easy"
                ? "text-[#00b8a3]"
                : p.difficulty === "Medium"
                ? "text-[#ffc01e]"
                : "text-[#ff375f]"
            }
          >
            {p.difficulty}
          </span>
        </div>
      ))}
    </div>
  );
}

export default SolvedProblems;
