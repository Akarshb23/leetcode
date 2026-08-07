import React from "react";
import { Lock } from "lucide-react";

const items = [
  { id: 1, name: "Make Array Strictly Increasing", difficulty: "Hard" },
  { id: 2, name: "Maximum XOR With Element From Array", difficulty: "Hard" },
  { id: 3, name: "Count Number of Nice Subarrays", difficulty: "Medium" },
  { id: 4, name: "Check if All A's Follows B's", difficulty: "Easy" },
];

function ContestProblems() {
  return (
    <div className="rounded-lg border border-[#2e2e2e] bg-[#262626]">
      <div className="border-b border-[#2e2e2e] px-5 py-3">
        <h2 className="text-[14px] font-medium uppercase tracking-wide text-text-muted">
          Problems
        </h2>
      </div>

      <div className="divide-y divide-[#2e2e2e]">
        {items.map((p) => (
          <div
            key={p.id}
            className="flex items-center justify-between px-5 py-3.5 text-[14px] hover:bg-[#2e2e2e]"
          >
            <div className="flex items-center gap-3">
              <Lock size={14} className="text-[#f7c948]" />

              <span className="text-text-primary">
                {p.id}. {p.name}
              </span>
            </div>

            <span
              className={
                p.difficulty === "Easy"
                  ? "text-[#00b8a3] text-[13px]"
                  : p.difficulty === "Medium"
                  ? "text-[#ffc01e] text-[13px]"
                  : "text-[#ff375f] text-[13px]"
              }
            >
              {p.difficulty}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContestProblems;
