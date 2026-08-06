import React from "react";
import {
  FaTrophy,
  FaUserCircle,
} from "react-icons/fa";
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
    <div className="w-full rounded-xl  bg-[#1a1a1a] overflow-hidden ">
      {feed.map((item, index) => (
        <div
          key={index}
          className={`flex gap-5 p-6 text-sm ${
            index !== feed.length - 1 ? "border-b border-zinc-800" : ""
          }`}
        >
        
          <div className="flex-shrink-0 pt-1">
            {item.type === "contest" ? (
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2a2a2a]">
                <FaTrophy className="text-3xl text-yellow-400" />
              </div>
            ) : item.type === "leetcode" ? (
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black">
                <SiLeetcode className="text-2xl text-orange-500" />
              </div>
            ) : (
              <FaUserCircle className="text-5xl text-gray-400" />
            )}
          </div>

          {/* Content */}
          <div className="flex-1">
            <p className="text-sm text-gray-500">{item.time}</p>

            {item.type === "contest" ? (
              <h3 className="mt-1 text-xl text-white">
                {item.title}{" "}
                <span className="cursor-pointer text-[#3b82f6] hover:underline">
                  {item.highlight}
                </span>
              </h3>
            ) : (
              <>
                <h3 className="mt-1 text-xl">
                  <span className="text-[#3b82f6] cursor-pointer hover:underline">
                    {item.author}
                  </span>{" "}
                  <span className="text-gray-300">posted</span>{" "}
                  <span className="cursor-pointer text-[#3b82f6] hover:underline">
                    {item.title}
                  </span>
                </h3>

                {item.desc && (
                  <p className="mt-3 max-w-4xl leading-8 text-gray-300">
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