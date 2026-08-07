import React from "react";

const rules = [
  "Contest lasts 1.5 hours.",
  "Each problem has a fixed score.",
  "Wrong submissions add a time penalty of 5 minutes.",
  "Only one valid solution per problem.",
];

function ContestRules() {
  return (
    <div className="rounded-lg border border-[#2e2e2e] bg-[#262626]">
      <div className="border-b border-[#2e2e2e] px-5 py-3">
        <h2 className="text-[14px] font-medium uppercase tracking-wide text-text-muted">
          Rules
        </h2>
      </div>

      <ul className="space-y-2 p-5 text-[13px] text-text-secondary">
        {rules.map((r, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-[#ffa116]">•</span>
            <span>{r}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContestRules;
