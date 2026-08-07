import React from "react";

function Reports() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-6">
      <h1 className="text-[28px] font-semibold text-text-primary">Reports</h1>

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
        {[
          { title: "Daily Submissions", value: "12,418" },
          { title: "Active Users", value: "4,289" },
          { title: "Contest Registrations", value: "28,500" },
          { title: "Premium Signups", value: "892" },
        ].map((r) => (
          <div
            key={r.title}
            className="rounded-lg border border-border bg-surface p-5"
          >
            <p className="text-[12px] text-text-muted">{r.title}</p>
            <p className="mt-1 text-[22px] font-semibold text-white">
              {r.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reports;
