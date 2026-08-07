import React, { useState } from "react";
import { Lightbulb } from "lucide-react";

function Hints({ hints = ["Use a hash map to look up complements in O(1) time."] }) {
  const [shown, setShown] = useState(false);

  return (
    <div className="mt-4 rounded-md border border-border bg-surface p-4">
      <button
        onClick={() => setShown(!shown)}
        className="flex items-center gap-2 text-[14px] font-medium text-text-primary hover:text-white cursor-pointer"
      >
        <Lightbulb size={16} className="text-[#f7c948]" />
        Hints
      </button>

      {shown && (
        <ul className="mt-3 list-disc space-y-1 pl-5 text-[13px] text-text-secondary">
          {hints.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Hints;
