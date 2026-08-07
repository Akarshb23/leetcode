import React from "react";

function TestCasePanel() {
  const cases = [
    { input: "[2,7,11,15]\n9", expected: "[0,1]" },
    { input: "[3,2,4]\n6", expected: "[1,2]" },
  ];

  return (
    <div className="space-y-3">
      {cases.map((c, i) => (
        <div key={i} className="rounded-md border border-border bg-surface p-3">
          <p className="text-[11px] uppercase text-text-muted">
            Case {i + 1}
          </p>

          <div className="mt-2 space-y-1 font-mono text-[12px] text-text-secondary">
            <p>
              <span className="text-text-muted">Input:</span>
              <br />
              {c.input}
            </p>

            <p>
              <span className="text-text-muted">Expected Output:</span>
              <br />
              {c.expected}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TestCasePanel;
