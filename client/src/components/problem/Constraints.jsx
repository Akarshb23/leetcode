import React from "react";

function Constraints() {
  const constraints = [
    "2 <= nums.length <= 10^4",
    "-10^9 <= nums[i] <= 10^9",
    "-10^9 <= target <= 10^9",
    "Only one valid answer exists.",
  ];

  return (
    <div>
      <p className="mb-2 text-[14px] font-medium text-white">Constraints:</p>

      <ul className="list-disc space-y-1 pl-5 text-[13px] text-text-secondary">
        {constraints.map((c, i) => (
          <li key={i}>
            <code className="font-mono text-[13px] text-text-primary">{c}</code>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Constraints;
