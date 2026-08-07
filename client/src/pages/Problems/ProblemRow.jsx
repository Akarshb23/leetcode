import React from "react";
import { Link } from "react-router-dom";
import { Circle, CheckCircle2, Lock, BookOpen } from "lucide-react";

function ProblemRow({ problem }) {
  return (
    <div className="grid grid-cols-[48px_1.8fr_120px_120px_120px_100px] items-center border-b border-border px-6 py-3 text-sm">
      {/* Status */}
      <div className="flex items-center">
        {problem.status === "SOLVED" ? (
          <CheckCircle2 size={18} className="text-[#00b8a3]" />
        ) : (
          <Circle size={18} className="text-text-muted" />
        )}
      </div>

      {/* Title */}
      <div className="flex items-center gap-2">
        {problem.premium && (
          <Lock size={14} className="text-[#f7c948]" />
        )}

        <Link
          to={`/problems/${problem.slug}`}
          className="text-text-primary"
        >
          {problem.title}
        </Link>
      </div>

      {/* Solution */}
      <div className="flex items-center">
        <BookOpen size={16} className="text-text-muted" />
      </div>

      {/* Acceptance */}
      <div className="text-text-secondary">
        {problem.acceptance}%
      </div>

      {/* Difficulty */}
      <div
        className={
          problem.difficulty === "Easy"
            ? "text-[#00b8a3]"
            : problem.difficulty === "Medium"
            ? "text-[#f7b731]"
            : "text-[#ff5a5f]"
        }
      >
        {problem.difficulty}
      </div>

      {/* Frequency */}
      <div className="text-text-secondary">
        {problem.frequency}%
      </div>
    </div>
  );
}

export default ProblemRow;