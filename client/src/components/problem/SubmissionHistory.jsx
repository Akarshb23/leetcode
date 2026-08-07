import React from "react";

function SubmissionHistory() {
  const submissions = [
    { time: "2 hours ago", status: "Accepted", runtime: "64 ms", language: "JavaScript" },
    { time: "3 hours ago", status: "Wrong Answer", runtime: "—", language: "JavaScript" },
    { time: "Yesterday", status: "Accepted", runtime: "70 ms", language: "Python" },
  ];

  return (
    <div>
      <h3 className="mb-3 text-[14px] font-medium text-text-primary">
        Submissions
      </h3>

      <div className="overflow-hidden rounded-md border border-border">
        <div className="grid grid-cols-[1fr_120px_100px_100px] bg-navbar px-4 py-2 text-[11px] uppercase text-text-muted">
          <span>Time</span>
          <span>Status</span>
          <span>Runtime</span>
          <span>Language</span>
        </div>

        {submissions.map((s, i) => (
          <div
            key={i}
            className="grid grid-cols-[1fr_120px_100px_100px] border-t border-border px-4 py-2 text-[13px] text-text-secondary"
          >
            <span>{s.time}</span>
            <span
              className={
                s.status === "Accepted"
                  ? "text-[#00b8a3]"
                  : "text-[#ff375f]"
              }
            >
              {s.status}
            </span>
            <span>{s.runtime}</span>
            <span>{s.language}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubmissionHistory;
