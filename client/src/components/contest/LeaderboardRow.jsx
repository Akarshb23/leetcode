import React from "react";

function LeaderboardRow({ rank, user, score, time }) {
  return (
    <div className="flex items-center justify-between py-2 text-[13px]">
      <div className="flex items-center gap-3">
        <span
          className={`w-6 text-center font-medium ${
            rank === 1
              ? "text-[#f7c948]"
              : rank === 2
              ? "text-[#c0c0c0]"
              : rank === 3
              ? "text-[#cd7f32]"
              : "text-text-secondary"
          }`}
        >
          {rank}
        </span>

        <span className="text-text-primary">{user}</span>
      </div>

      <div className="text-right">
        <span className="text-text-primary">{score}</span>

        <span className="ml-3 text-text-muted">{time}</span>
      </div>
    </div>
  );
}

export default LeaderboardRow;
