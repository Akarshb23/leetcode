import React from "react";
import LanguageSelector from "./LanguageSelector";
import FontSizeSelector from "./FontSizeSelector";
import ThemeSelector from "./ThemeSelector";

function EditorToolbar() {
  return (
    <div className="flex items-center justify-between border-b border-[#2e2e2e] bg-[#262626] px-3 py-1.5">
      <div className="flex items-center gap-2">
        <LanguageSelector />
        <FontSizeSelector />
        <ThemeSelector />
      </div>

      <div className="flex items-center gap-3 text-[11px] text-text-muted">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00c853]"></span>
          Auto-saved
        </span>
      </div>
    </div>
  );
}

export default EditorToolbar;
