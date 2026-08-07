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
  {
    type: "user",
    time: "1 hour ago",
    author: "aditya_1729",
    title: "Amazon SDE-2 Onsite Interview Experience (Rejected)",
    desc: "Sharing my Amazon SDE-2 onsite interview experience. Round 1 was about system design (design URL shortener), Round 2 about coding (graphs + DP), behavioral round was tough...",
  },
  {
    type: "user",
    time: "1 hour ago",
    author: "sara_codes",
    title: "Is it worth doing a Master's in CS in 2026?",
    desc: "I'm currently working as a software engineer with 2 years of experience. Considering a Master's in CS from US/Canada. Is it still worth it given the current market and AI disruption?",
  },
  {
    type: "leetcode",
    time: "5 months ago",
    author: "LeetCode",
    title: "🎯 New Study Plan: Top Interview 150",
    desc: "We've curated the Top Interview 150 questions, the most frequently asked problems in top tech interviews. Whether you're prepping for FAANG or your dream startup, this collection is designed to help you master...",
  },
  {
    type: "user",
    time: "2 hours ago",
    author: "rahul_verma",
    title: "Microsoft Redmond vs Microsoft Hyderabad, which is better?",
    desc: "Got offers from both Redmond and Hyderabad teams. Pay is similar after tax adjustments. Curious about the WLB, tech stack, and growth opportunities across the two locations...",
  },
  {
    type: "user",
    time: "2 hours ago",
    author: "Anonymous User",
    title: "How to negotiate salary at Meta L6 offer?",
    desc: "Recently received a Meta L6 offer. Base is around 280k, RSU ~600k over 4 years. Any tips on negotiating higher base or sign-on bonus? Recruiter said this is the best they can do...",
  },
  {
    type: "user",
    time: "3 hours ago",
    author: "leo_dsa",
    title: "Striver's A2Z sheet vs Neetcode 150 - which one should I follow?",
  },
  {
    type: "user",
    time: "3 hours ago",
    author: "priya_dev",
    title: "Just got my Google L4 offer! Here's my prep journey 📝",
    desc: "After 1.5 years of grinding LeetCode, system design books and mock interviews, I finally landed my Google L4 offer. Sharing my full timeline, resources, and a few tips that made the difference...",
  },
  {
    type: "user",
    time: "4 hours ago",
    author: "tom_at_tiktok",
    title: "TikTok E5 onsite — questions asked, prep strategy",
    desc: "Completed my onsite for E5 Backend Engineer at TikTok last week. Sharing all the coding and system design questions asked, along with how I prepared over 2 months...",
  },
  {
    type: "user",
    time: "5 hours ago",
    author: "kavya_ml",
    title: "Switching from ML Engineering to SDE — is it a downgrade?",
  },
  {
    type: "leetcode",
    time: "1 month ago",
    author: "LeetCode",
    title: "🚀 Introducing LeetCode Premium — Ace Your Next Interview",
    desc: "Get access to company-specific questions, premium solutions, and detailed editorials curated by industry experts. Join thousands of engineers who landed their dream job with LeetCode Premium...",
  },
  {
    type: "user",
    time: "6 hours ago",
    author: "victor_intern",
    title: "Summer 2026 SWE internship timeline — when to apply?",
    desc: "I'm a sophomore at a US target school. When should I start applying for Summer 2026 SWE internships? Are most big tech companies closing applications by November already?",
  },
  {
    type: "user",
    time: "7 hours ago",
    author: "sneha_leet",
    title: "Reached 2000+ rating! Some thoughts on consistency 🍻",
  },
  {
    type: "user",
    time: "8 hours ago",
    author: "Anonymous User",
    title: "Should I take a 50% pay cut to move from big tech to early-stage startup?",
    desc: "Currently a senior engineer at a FAANG making ~280k TC. Got an offer from a Series A startup for 140k TC + 0.2% equity. The startup founders are solid and the product is interesting but I'm worried about the risk...",
  },
  {
    type: "user",
    time: "9 hours ago",
    author: "danielalmeida",
    title: "Stuck on Hard DP for 3 days — how do you debug DP states?",
    desc: "I'm working on 'Number of Ways to Form a Target String Given a Dictionary' (LC 1639) and I've been stuck for 3 days. I write down the state, draw the recurrence, but somewhere the logic breaks at the corner cases...",
  },
];

function FeedSection() {
  return (
    <div className="overflow-hidden rounded-lg bg-[#1a1a1a]">
      {feed.map((item, index) => (
        <div
          key={index}
          className={`flex gap-4 px-6 py-4 ${
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
              <FaUserCircle className="text-[36px] text-[#7d7d7d]" />
            )}
          </div>

          <div className="flex-1">
            <p className="text-[12px] text-[#7d7d7d]">
              {item.time}
            </p>

            {item.type === "contest" ? (
              <h3 className="mt-1 text-[16px] font-medium leading-6 text-white">
                {item.title}{" "}
                <span className="cursor-pointer text-[#4ea1ff] hover:underline">
                  {item.highlight}
                </span>
              </h3>
            ) : (
              <>
                <h3 className="mt-1 text-[15px] font-medium leading-6">
                  <span className="cursor-pointer text-[#4ea1ff] hover:underline">
                    {item.author}
                  </span>{" "}
                  <span className="text-[#b3b3b3]">
                    posted
                  </span>{" "}
                  <span className="cursor-pointer text-[#4ea1ff] hover:underline">
                    {item.title}
                  </span>
                </h3>

                {item.desc && (
                  <p className="mt-1.5 text-[14px] leading-[22px] text-[#b3b3b3]">
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