import React from "react";

function Tags({ tags = [] }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {tags.map((t, i) => (
        <span
          key={i}
          className="rounded bg-[#262626] px-2 py-0.5 text-[11px] text-text-secondary hover:text-white cursor-pointer"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

export default Tags;
