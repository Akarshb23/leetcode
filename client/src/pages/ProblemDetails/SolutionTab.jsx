import React from "react";

function SolutionTab() {
  const solutions = [
    {
      lang: "JavaScript",
      author: "lee_215",
      runtime: "60 ms",
      code: `var twoSum = function(nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const diff = target - nums[i];\n    if (map.has(diff)) return [map.get(diff), i];\n    map.set(nums[i], i);\n  }\n};`,
    },
    {
      lang: "Python",
      author: "votrubac",
      runtime: "68 ms",
      code: `def twoSum(nums, target):\n    seen = {}\n    for i, v in enumerate(nums):\n        if target - v in seen:\n            return [seen[target - v], i]\n        seen[v] = i`,
    },
  ];

  return (
    <div className="space-y-4">
      {solutions.map((s, i) => (
        <div key={i} className="overflow-hidden rounded-md border border-border bg-surface">
          <div className="flex items-center justify-between border-b border-border px-4 py-2 text-[12px]">
            <span className="font-medium text-text-primary">{s.lang}</span>

            <span className="text-text-muted">
              by {s.author} · {s.runtime}
            </span>
          </div>

          <pre className="bg-[#1a1a1a] p-4 font-mono text-[13px] leading-5 text-text-primary whitespace-pre-wrap">
            {s.code}
          </pre>
        </div>
      ))}
    </div>
  );
}

export default SolutionTab;
