import React from "react";

function DiscussionTab() {
  const posts = [
    {
      author: "rahul_dsa",
      title: "My O(n) hash-map solution explained",
      time: "2 hours ago",
      replies: 12,
    },
    {
      author: "sara_codes",
      title: "Why a brute force solution still works",
      time: "1 day ago",
      replies: 5,
    },
  ];

  return (
    <div className="space-y-3">
      {posts.map((p, i) => (
        <div
          key={i}
          className="rounded-md border border-border bg-surface p-4 hover:border-[#3a3a3a] cursor-pointer"
        >
          <h3 className="text-[14px] font-medium text-[#4ea1ff] hover:underline">
            {p.title}
          </h3>

          <div className="mt-1 flex items-center gap-3 text-[12px] text-text-muted">
            <span>{p.author}</span>
            <span>·</span>
            <span>{p.time}</span>
            <span>·</span>
            <span>{p.replies} replies</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DiscussionTab;
