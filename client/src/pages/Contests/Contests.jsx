import React from "react";
import ContestList from "./ContestList";
import UpcomingContest from "./UpcomingContest";

function Contests() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-6">
      <div className="mb-6">
        <h1 className="text-[28px] font-semibold text-white">Contests</h1>

        <p className="mt-1 text-[13px] text-text-secondary">
          Compete with engineers from around the world.
        </p>
      </div>

      <UpcomingContest />

      <h2 className="mt-8 mb-3 text-[15px] font-medium uppercase tracking-wide text-text-muted">
        Past Contests
      </h2>

      <ContestList />
    </div>
  );
}

export default Contests;
