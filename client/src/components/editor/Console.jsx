import React from "react";

function Console({ output = "" }) {
  return (
    <div className="bg-background p-3 font-mono text-[12px] text-text-secondary">
      {output || "Click \"Run\" to execute your code and see the output here."}
    </div>
  );
}

export default Console;
