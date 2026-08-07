import React from "react";
import LeaderboardRow from "./LeaderboardRow";

function Leaderboard() {
  const entries = [
    { rank: 1, user: "lee_215", score: 3891, time: "01:18:42" },
    { rank: 2, user: "votrubac", score: 3654, time: "01:21:08" },
    { rank: 3, user: "r00t", score: 3587, time: "01:24:30" },
    { rank: 4, user: "akarshb23", score: 3410, time: "01:29:55" },
    { rank: 5, user: "sara_codes", score: 3305, time: "01:32:11" },
  ];

  return (
    <div className="divide-y divide-border">
      {entries.map((e) => (
        <LeaderboardRow
          key={e.rank}
          rank={e.rank}
          user={e.user}
          score={e.score}
          time={e.time}
        />
      ))}
    </div>
  );
}

export default Leaderboard;
