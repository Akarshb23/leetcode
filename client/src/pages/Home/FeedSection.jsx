import React from "react";
import { FaTrophy, FaUserCircle } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const feed = [
  {
    type: "contest",
    time: "in 3 days",
    title: "Join our next Contest",
    highlight: "Weekly Contest 514",
  },
  {
    type: "leetcode",
    time: "3 days ago",
    author: "LeetCode",
    title: "If AI Had Personalities, Which One Would You Choose?",
    desc: "🌙 A Late-Night Submission Story It's 11:47 PM. You're stuck on a Dynamic Programming problem. Your 17th submission just got Wrong Answer. And, of course... it's today's Daily Challenge...",
  },
  {
    type: "leetcode",
    time: "4 months ago",
    author: "LeetCode",
    title: "📱 LeetCode at Your Fingertips",
    desc: "Introducing the LeetCode mobile app, now available for smartphones and tablets. One LeetCode a day keeps your reasoning in play. Jump in for quick practice, browse your collections, and...",
  },
  {
    type: "user",
    time: "10 minutes ago",
    author: "Jay_Parkash",
    title: "How to Create a gRPC Microservice from Scratch: Step-by-Step Guide",
    desc: "How to Create a gRPC Microservice from Scratch: Step-by-Step Guide",
  },
  {
    type: "user",
    time: "30 minutes ago",
    author: "Anonymous User",
    title: "LokalApp YC startup || Round3 || SDE2",
    desc: "Detailed questions about past company projects, resume discussion, design payment service and partner selection based on failure rate...",
  },
  {
    type: "user",
    time: "44 minutes ago",
    author: "r01k12",
    title: "Can I ask for virtual onsite at Google?",
  },
];

function FeedSection() {
  return (
    <div className="overflow-hidden rounded-lg bg-[#1a1a1a]">
      {feed.map((item, index) => (
        <div
          key={index}
          className={`flex gap-4 px-6 py-5 ${
            index !== feed.length - 1 ? "border-b border-[rgba(255,255,255,0.05)]" : ""
          }`}
        >
          <div className="flex-shrink-0 pt-1">
            {item.type === "contest" ? (
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2b2b2b]">
                <FaTrophy className="text-[18px] text-yellow-400" />
              </div>
            ) : item.type === "leetcode" ? (
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111111]">
                <SiLeetcode className="text-[17px] text-orange-500" />
              </div>
            ) : (
              <FaUserCircle className="text-[36px] text-zinc-500" />
            )}
          </div>

          <div className="flex-1">
            <p className="text-xs text-text-muted">
              {item.time}
            </p>

            {item.type === "contest" ? (
              <h3 className="mt-1 text-[18px] font-medium leading-7 text-text-primary">
                {item.title}{" "}
                <span className="cursor-pointer text-[#3b82f6]">
                  {item.highlight}
                </span>
              </h3>
            ) : (
              <>
                <h3 className="mt-1 text-[17px] font-medium leading-7">
                  <span className="cursor-pointer text-[#3b82f6]">
                    {item.author}
                  </span>{" "}
                  <span className="text-text-secondary">
                    posted
                  </span>{" "}
                  <span className="cursor-pointer text-[#3b82f6]">
                    {item.title}
                  </span>
                </h3>

                {item.desc && (
                  <p className="mt-2 text-[15px] leading-6 text-[#b3b3b3]">
                    {item.desc}
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeedSection;