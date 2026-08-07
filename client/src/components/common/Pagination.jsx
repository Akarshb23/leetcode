import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination({ page = 1, totalPages = 10, onChange }) {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) pages.push(i);

  return (
    <div className="mt-6 flex items-center justify-center gap-1">
      <button
        disabled={page === 1}
        onClick={() => onChange && onChange(page - 1)}
        className="flex h-8 w-8 items-center justify-center rounded border border-border bg-surface text-text-secondary disabled:opacity-40 hover:text-white"
      >
        <ChevronLeft size={16} />
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onChange && onChange(p)}
          className={`flex h-8 min-w-8 items-center justify-center rounded border px-2 text-[13px] ${
            p === page
              ? "border-[#ffa116] bg-[#ffa116] text-[#1a1a1a]"
              : "border-border bg-surface text-text-secondary hover:text-white"
          }`}
        >
          {p}
        </button>
      ))}

      <button
        disabled={page === totalPages}
        onClick={() => onChange && onChange(page + 1)}
        className="flex h-8 w-8 items-center justify-center rounded border border-border bg-surface text-text-secondary disabled:opacity-40 hover:text-white"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}

export default Pagination;
