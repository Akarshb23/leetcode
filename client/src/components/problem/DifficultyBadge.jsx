import React from "react";

function DifficultyBadge({ difficulty = "Easy" }) {
  const colors = {
    Easy: "bg-[#1f3d3a] text-[#00b8a3]",
    Medium: "bg-[#3d361f] text-[#ffc01e]",
    Hard: "bg-[#3d1f23] text-[#ff375f]",
  };

  return (
    <span
      className={`inline-flex items-center rounded px-2 py-0.5 text-[11px] font-medium ${
        colors[difficulty] || colors.Easy
      }`}
    >
      {difficulty}
    </span>
  );
}

export default DifficultyBadge;
