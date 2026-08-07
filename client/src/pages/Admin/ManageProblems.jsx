import React from "react";
import { Link } from "react-router-dom";
import { problems } from "../../data/problems";

function ManageProblems() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-6">
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-[28px] font-semibold text-text-primary">
          Manage Problems
        </h1>

        <Link
          to="/admin/create-problem"
          className="rounded-md bg-[#ffa116] px-4 py-2 text-[13px] font-medium text-[#1a1a1a]"
        >
          + New Problem
        </Link>
      </div>

      <div className="overflow-hidden rounded-lg border border-border bg-surface">
        {problems.slice(0, 10).map((p) => (
          <div
            key={p.id}
            className="flex items-center justify-between border-b border-border px-5 py-3 text-[14px] last:border-b-0"
          >
            <span className="text-text-primary">
              {p.id}. {p.title}
            </span>

            <Link
              to={`/admin/edit-problem/${p.id}`}
              className="text-[13px] text-[#4ea1ff] hover:underline"
            >
              Edit
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageProblems;
