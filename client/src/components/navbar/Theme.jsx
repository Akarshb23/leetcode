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
        <Sun size={18} className="text-[#f7c948]" />
      ) : (
        <Moon size={18} className="text-[#d9d9d9]" />
      )}
    </button>
  );
}

export default Theme;