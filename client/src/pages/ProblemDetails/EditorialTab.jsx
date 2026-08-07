import React from "react";
import { Lock } from "lucide-react";

function EditorialTab() {
  return (
    <div className="flex flex-col items-center justify-center rounded-md border border-border bg-surface py-16 text-center">
      <Lock size={28} className="text-[#f7c948]" />

      <h3 className="mt-3 text-[16px] font-medium text-text-primary">
        Editorial is locked
      </h3>

      <p className="mt-1 text-[13px] text-text-muted">
        Subscribe to LeetCode Premium to unlock the official editorial.
      </p>
    </div>
  );
}

export default EditorialTab;
