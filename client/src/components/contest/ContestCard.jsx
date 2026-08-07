import React from "react";

function ContestCard({ name, date, participants }) {
  return (
    <div className="rounded-md border border-border bg-surface p-4">
      <h3 className="text-[14px] font-medium text-white">{name}</h3>

      <p className="mt-1 text-[12px] text-text-muted">{date}</p>

      <p className="mt-2 text-[12px] text-text-secondary">
        {participants.toLocaleString()} participants
      </p>
    </div>
  );
}

export default ContestCard;
