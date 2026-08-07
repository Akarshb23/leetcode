import React from "react";

function Statistics() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {[
        { label: "Solved", value: "184" },
        { label: "Easy", value: "120" },
        { label: "Medium", value: "55" },
        { label: "Hard", value: "9" },
      ].map((s) => (
        <div
          key={s.label}
          className="rounded-lg border border-border bg-surface p-4 text-center"
        >
          <p className="text-[22px] font-semibold text-white">{s.value}</p>
          <p className="text-[12px] text-text-muted">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

export default Statistics;
