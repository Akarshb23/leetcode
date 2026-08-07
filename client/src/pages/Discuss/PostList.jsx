import React from "react";
import { ThumbsUp, MessageCircle, Share2 } from "lucide-react";
import CommentSection from "./CommentSection";

const posts = [
  {
    author: "rahul_dsa",
    avatar: "R",
    title: "My O(n) hash-map solution explained",
    excerpt:
      "Iterate once, store the complement, and check on each step. Here's a clean walkthrough…",
    time: "2h ago",
    likes: 87,
    replies: 12,
  },
  {
    author: "sara_codes",
    avatar: "S",
    title: "Why a brute force solution still works",
    excerpt:
      "Sometimes the simplest solution is the best for an interview. Here's my take…",
    time: "1d ago",
    likes: 42,
    replies: 5,
  },
  {
    author: "leo_dsa",
    avatar: "L",
    title: "Striver's A2Z sheet vs Neetcode 150 — which one should I follow?",
    excerpt:
      "Both are great, but here's my honest take after completing each…",
    time: "2d ago",
    likes: 156,
    replies: 22,
  },
];

function PostList() {
  return (
    <div className="space-y-4">
      {posts.map((p, i) => (
        <div
          key={i}
          className="rounded-lg border border-[#2e2e2e] bg-[#262626]"
        >
          <div className="px-5 pt-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3a3a3a] text-[12px] font-medium text-text-secondary">
                {p.avatar}
              </div>

              <div>
                <p className="text-[13px] font-medium text-white">
                  {p.author}
                </p>

                <p className="text-[11px] text-text-muted">{p.time}</p>
              </div>
            </div>

            <h3 className="mt-3 cursor-pointer text-[15px] font-medium text-[#4ea1ff] hover:underline">
              {p.title}
            </h3>

            <p className="mt-2 text-[13px] text-text-secondary">
              {p.excerpt}
            </p>
          </div>

          <div className="mt-3 flex items-center gap-5 border-t border-[#2e2e2e] px-5 py-2.5 text-[12px] text-text-muted">
            <button className="flex items-center gap-1.5 hover:text-white cursor-pointer">
              <ThumbsUp size={13} />
              {p.likes}
            </button>

            <button className="flex items-center gap-1.5 hover:text-white cursor-pointer">
              <MessageCircle size={13} />
              {p.replies}
            </button>

            <button className="flex items-center gap-1.5 hover:text-white cursor-pointer">
              <Share2 size={13} />
              Share
            </button>
          </div>

          <div className="border-t border-[#2e2e2e] bg-[#1f1f1f] px-5 py-3">
            <CommentSection />
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
