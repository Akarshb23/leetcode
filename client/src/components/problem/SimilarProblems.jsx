import React from "react";
import { Link } from "react-router-dom";

function SimilarProblems() {
  const similar = [
    { id: 167, title: "Two Sum II - Input array is sorted", difficulty: "Easy" },
    { id: 170, title: "Two Sum III - Data structure design", difficulty: "Easy" },
    { id: 653, title: "Two Sum IV - Input is a BST", difficulty: "Easy" },
  ];

  return (
    <div className="mt-6 rounded-md border border-border bg-surface p-4">
      <h3 className="mb-3 text-[14px] font-medium text-text-primary">
        Similar Problems
      </h3>

      <ul className="space-y-2">
        {similar.map((s) => (
          <li
            key={s.id}
            className="flex items-center justify-between text-[13px]"
          >
            <Link
              to={`/problems/${s.title}`}
              className="text-[#4ea1ff] hover:underline"
            >
              {s.id}. {s.title}
            </Link>

            <span
              className={
                s.difficulty === "Easy"
                  ? "text-[#00b8a3]"
                  : s.difficulty === "Medium"
                  ? "text-[#ffc01e]"
                  : "text-[#ff375f]"
              }
            >
              {s.difficulty}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SimilarProblems;
