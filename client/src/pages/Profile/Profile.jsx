import React from "react";
import { MapPin, Briefcase, Calendar, Edit } from "lucide-react";

const stats = [
  { label: "Solved", value: "184", color: "text-white" },
  { label: "Easy", value: "120", color: "text-[#00b8a3]" },
  { label: "Medium", value: "55", color: "text-[#ffc01e]" },
  { label: "Hard", value: "9", color: "text-[#ff375f]" },
];

const activity = [
  { title: "Two Sum", difficulty: "Easy", time: "2h ago" },
  { title: "Valid Parentheses", difficulty: "Easy", time: "4h ago" },
  { title: "Median of Two Sorted Arrays", difficulty: "Hard", time: "1d ago" },
  { title: "Merge Two Sorted Lists", difficulty: "Easy", time: "2d ago" },
  { title: "3Sum", difficulty: "Medium", time: "3d ago" },
];

function Profile() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-6">
      {/* Profile Header */}
      <div className="rounded-lg border border-[#2e2e2e] bg-[#262626]">
        <div className="h-24 rounded-t-lg bg-gradient-to-r from-[#ffa116] to-[#ffb800]" />

        <div className="px-6 pb-6">
          <div className="flex items-start gap-5">
            <div className="-mt-10 flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#262626] bg-[#ffa116] text-[28px] font-semibold text-[#1a1a1a]">
              A
            </div>

            <div className="flex-1 pt-3">
              <h1 className="text-[22px] font-semibold text-white">
                Akarsh Bhat
              </h1>

              <p className="text-[13px] text-text-muted">@akarshb23</p>

              <div className="mt-3 flex flex-wrap items-center gap-5 text-[13px] text-text-secondary">
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-text-muted" />
                  India
                </span>

                <span className="flex items-center gap-1.5">
                  <Briefcase size={14} className="text-text-muted" />
                  Software Engineer
                </span>

                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-text-muted" />
                  Joined Aug 2026
                </span>
              </div>
            </div>

            <button className="mt-3 flex items-center gap-1.5 rounded-md border border-[#3a3a3a] bg-[#262626] px-3 py-1.5 text-[13px] text-text-primary hover:bg-[#3a3a3a] cursor-pointer">
              <Edit size={12} />
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-lg border border-[#2e2e2e] bg-[#262626] p-5 text-center"
          >
            <p className={`text-[26px] font-semibold ${s.color}`}>{s.value}</p>

            <p className="mt-1 text-[12px] text-text-muted">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Activity */}
      <div className="mt-5 rounded-lg border border-[#2e2e2e] bg-[#262626]">
        <div className="border-b border-[#2e2e2e] px-5 py-3">
          <h2 className="text-[14px] font-medium uppercase tracking-wide text-text-muted">
            Recent Activity
          </h2>
        </div>

        <ul>
          {activity.map((a, i) => (
            <li
              key={i}
              className={`flex items-center justify-between px-5 py-3 text-[13px] hover:bg-[#2e2e2e] ${
                i !== activity.length - 1 ? "border-b border-[#2e2e2e]" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-[#00b8a3]">✓</span>

                <span className="text-text-primary">{a.title}</span>
              </div>

              <div className="flex items-center gap-3 text-text-muted">
                <span
                  className={
                    a.difficulty === "Easy"
                      ? "text-[#00b8a3]"
                      : a.difficulty === "Medium"
                      ? "text-[#ffc01e]"
                      : "text-[#ff375f]"
                  }
                >
                  {a.difficulty}
                </span>

                <span>·</span>

                <span>{a.time}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
