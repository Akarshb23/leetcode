import React from "react";

function CodeEditor({ value = "", onChange }) {
  const placeholder = `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Write your solution here

};`;

  return (
    <textarea
      spellCheck="false"
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
      placeholder={placeholder}
      className="h-full min-h-[400px] w-full resize-none bg-[#1a1a1a] p-4 font-mono text-[13px] leading-5 text-text-primary outline-none"
    />
  );
}

export default CodeEditor;
