import React from "react";

function ProblemDescription() {
  return (
    <p className="text-[14px] leading-6 text-text-secondary">
      Given an array of integers <code className="rounded bg-[#262626] px-1 py-0.5 text-[12px] font-mono text-text-primary">nums</code> and an integer <code className="rounded bg-[#262626] px-1 py-0.5 text-[12px] font-mono text-text-primary">target</code>, return <em className="not-italic font-medium">indices of the two numbers such that they add up to</em> <code className="rounded bg-[#262626] px-1 py-0.5 text-[12px] font-mono text-text-primary">target</code>.
      <br />
      <br />
      You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the same element twice.
      <br />
      You can return the answer in any order.
    </p>
  );
}

export default ProblemDescription;
