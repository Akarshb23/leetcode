import React from "react";

function EmptyState({ title = "Nothing here yet.", description }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-surface px-6 py-12 text-center">
      <h3 className="text-[16px] font-medium text-text-primary">{title}</h3>

      {description && (
        <p className="mt-1 text-[13px] text-text-muted">{description}</p>
      )}
    </div>
  );
}

export default EmptyState;
