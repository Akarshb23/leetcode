import React from "react";

function RankingCard({ title, value }) {
  return (
    <div className="rounded-md border border-border bg-surface p-4 text-center">
      <p className="text-[22px] font-semibold text-white">{value}</p>
      <p className="text-[12px] text-text-muted">{title}</p>
    </div>
  );
}

export default RankingCard;
