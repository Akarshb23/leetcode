import React from "react";
import { Calendar, Users } from "lucide-react";

const contests = [
  { id: 510, name: "Weekly Contest 510", date: "Last Sunday", participants: 28500 },
  { id: 509, name: "Weekly Contest 509", date: "Sun, Aug 03", participants: 27300 },
  { id: 508, name: "Weekly Contest 508", date: "Sun, Jul 27", participants: 29100 },
  { id: 507, name: "Weekly Contest 507", date: "Sun, Jul 20", participants: 26800 },
];

function ContestList() {
  return (
    <div className="overflow-hidden rounded-lg border border-[#2e2e2e] bg-[#262626]">
      {contests.map((c, i) => (
        <div
          key={c.id}
          className={`flex items-center justify-between px-6 py-4 ${
            i !== contests.length - 1 ? "border-b border-[#2e2e2e]" : ""
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1f1f1f] text-[14px] font-medium text-text-secondary">
              #{c.id}
            </div>

            <div>
              <h3 className="text-[14px] font-medium text-white">{c.name}</h3>

              <div className="mt-1 flex items-center gap-3 text-[12px] text-text-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} />
                  {c.date}
                </span>

                <span className="flex items-center gap-1.5">
                  <Users size={12} />
                  {c.participants.toLocaleString()} participants
                </span>
              </div>
            </div>
          </div>

          <button className="rounded-md border border-[#3a3a3a] bg-[#262626] px-4 py-1.5 text-[12px] text-text-primary hover:bg-[#3a3a3a] cursor-pointer">
            View
          </button>
        </div>
      ))}
    </div>
  );
}

export default ContestList;
