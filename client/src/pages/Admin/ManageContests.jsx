import React from "react";

const contests = [
  { id: 514, name: "Weekly Contest 514", date: "Sun, Aug 10", status: "Upcoming" },
  { id: 513, name: "Weekly Contest 513", date: "Sun, Aug 03", status: "Ended" },
  { id: 512, name: "Biweekly Contest 137", date: "Sat, Jul 26", status: "Ended" },
];

function ManageContests() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-6">
      <h1 className="text-[28px] font-semibold text-text-primary">
        Manage Contests
      </h1>

      <div className="mt-5 space-y-3">
        {contests.map((c) => (
          <div
            key={c.id}
            className="flex items-center justify-between rounded-md border border-border bg-surface px-5 py-4"
          >
            <div>
              <h3 className="text-[14px] font-medium text-white">{c.name}</h3>

              <p className="mt-1 text-[12px] text-text-muted">{c.date}</p>
            </div>

            <span
              className={
                c.status === "Upcoming"
                  ? "text-[12px] text-[#00b8a3]"
                  : "text-[12px] text-text-muted"
              }
            >
              {c.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageContests;
