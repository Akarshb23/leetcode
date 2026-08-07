import React from "react";

function Dashboard() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-6">
      <h1 className="text-[28px] font-semibold text-text-primary">
        Admin Dashboard
      </h1>

      <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4">
        {[
          { label: "Users", value: "12,485" },
          { label: "Problems", value: "3,210" },
          { label: "Contests", value: "514" },
          { label: "Submissions", value: "1.2M" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-lg border border-border bg-surface p-4 text-center"
          >
            <p className="text-[22px] font-semibold text-white">{s.value}</p>
            <p className="text-[12px] text-text-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
