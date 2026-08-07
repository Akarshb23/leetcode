import React from "react";
import { problems } from "../../data/problems";
import EmptyState from "../../components/common/EmptyState";

function Bookmarks() {
  const bookmarks = problems.slice(0, 3);

  if (!bookmarks.length) {
    return <EmptyState title="No bookmarks yet." />;
  }

  return (
    <div className="space-y-3">
      {bookmarks.map((p) => (
        <div
          key={p.id}
          className="flex items-center justify-between rounded-md border border-border bg-surface p-3"
        >
          <span className="text-[14px] text-text-primary">
            {p.id}. {p.title}
          </span>

          <span
            className={
              p.difficulty === "Easy"
                ? "text-[#00b8a3] text-[12px]"
                : p.difficulty === "Medium"
                ? "text-[#ffc01e] text-[12px]"
                : "text-[#ff375f] text-[12px]"
            }
          >
            {p.difficulty}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Bookmarks;
