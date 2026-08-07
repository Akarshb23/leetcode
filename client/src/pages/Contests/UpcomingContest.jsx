import React from "react";
import { Calendar, Clock } from "lucide-react";
import Trophy from "../../assets/images/trophy.png";

function UpcomingContest() {
  return (
    <div className="flex items-center justify-between rounded-lg border border-[#2e2e2e] bg-[#262626] p-6">
      <div>
        <p className="text-[11px] font-medium uppercase tracking-wider text-[#ffa116]">
          Upcoming
        </p>

        <h3 className="mt-1.5 text-[20px] font-semibold text-white">
          Weekly Contest 514
        </h3>

        <div className="mt-2 flex items-center gap-4 text-[13px] text-text-secondary">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} className="text-text-muted" />
            Sun, Aug 10
          </span>

          <span className="flex items-center gap-1.5">
            <Clock size={14} className="text-text-muted" />
            8:00 AM IST
          </span>

          <span>·</span>

          <span>Starts in 3 days</span>
        </div>

        <button className="mt-4 rounded-md bg-[#ffa116] px-5 py-1.5 text-[13px] font-medium text-[#1a1a1a] hover:bg-[#ffb800] cursor-pointer">
          Register Now
        </button>
      </div>

      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1f1f1f]">
        <img
          src={Trophy}
          alt="Trophy"
          className="h-16 w-16 object-contain"
        />
      </div>
    </div>
  );
}

export default UpcomingContest;
