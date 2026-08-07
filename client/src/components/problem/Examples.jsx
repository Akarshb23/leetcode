import React from "react";

function Examples() {
  const examples = [
    {
      input: "nums = [2,7,11,15], target = 9",
      output: "[0,1]",
      explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
    },
    {
      input: "nums = [3,2,4], target = 6",
      output: "[1,2]",
      explanation: "The sum of 3 and 4 equals 6, so we return [1, 2].",
    },
    {
      input: "nums = [3,3], target = 6",
      output: "[0,1]",
    },
  ];

  return (
    <div className="space-y-3">
      {examples.map((ex, i) => (
        <div key={i} className="space-y-1">
          <p className="text-[14px] font-medium text-white">
            Example {i + 1}:
          </p>

          <pre className="rounded-md bg-[#1a1a1a] p-3 font-mono text-[13px] leading-5 text-text-secondary whitespace-pre-wrap">
{`Input: ${ex.input}
Output: ${ex.output}${ex.explanation ? `\nExplanation: ${ex.explanation}` : ""}`}
          </pre>
        </div>
      ))}
    </div>
  );
}

export default Examples;
