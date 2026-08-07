import React, { useState } from "react";
import { Moon, Sun } from "lucide-react";

function Theme() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="flex h-9 w-9 items-center justify-center rounded-md"
    >
      {darkMode ? (
        <Sun size={20} className="text-[#f7c948]" />
      ) : (
        <Moon size={20} className="text-zinc-300" />
      )}
    </button>
  );
}

export default Theme;