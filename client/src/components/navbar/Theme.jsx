import React, { useState } from "react";
import { Moon, Sun } from "lucide-react";

function Theme() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface hover:bg-background-secondary transition-colors"
    >
      {darkMode ? (
        <Sun className="text-yellow-400" size={20} />
      ) : (
        <Moon className="text-text-primary" size={20} />
      )}
    </button>
  );
}

export default Theme;