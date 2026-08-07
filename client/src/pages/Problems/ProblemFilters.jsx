import React from "react";

function ProblemFilters() {
  return (
    <div className="mb-4 flex items-center gap-3">
      <button className="rounded-md border border-border bg-surface px-3 py-2 text-sm text-text-secondary">
        Difficulty
      </button>

      <button className="rounded-md border border-border bg-surface px-3 py-2 text-sm text-text-secondary">
        Status
      </button>

      <button className="rounded-md border border-border bg-surface px-3 py-2 text-sm text-text-secondary">
        Tags
      </button>
    </div>
  );
}

export default ProblemFilters;