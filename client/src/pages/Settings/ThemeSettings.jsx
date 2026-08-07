import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";

function ThemeSettings() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className="rounded-lg border border-[#2e2e2e] bg-[#262626]">
      <div className="border-b border-[#2e2e2e] px-5 py-3">
        <h2 className="text-[14px] font-medium uppercase tracking-wide text-text-muted">
          Appearance
        </h2>
      </div>

      <div className="p-5">
        <p className="text-[13px] text-text-secondary">Choose your theme</p>

        <div className="mt-3 flex gap-3">
          <button
            onClick={() => setTheme("dark")}
            className={`flex items-center gap-2 rounded-md border px-4 py-2.5 text-[13px] cursor-pointer ${
              theme === "dark"
                ? "border-[#ffa116] bg-[#ffa116] text-[#1a1a1a] font-medium"
                : "border-[#3a3a3a] bg-[#262626] text-text-secondary hover:text-white"
            }`}
          >
            <Moon size={14} />
            Dark
          </button>

          <button
            onClick={() => setTheme("light")}
            className={`flex items-center gap-2 rounded-md border px-4 py-2.5 text-[13px] cursor-pointer ${
              theme === "light"
                ? "border-[#ffa116] bg-[#ffa116] text-[#1a1a1a] font-medium"
                : "border-[#3a3a3a] bg-[#262626] text-text-secondary hover:text-white"
            }`}
          >
            <Sun size={14} />
            Light
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThemeSettings;
