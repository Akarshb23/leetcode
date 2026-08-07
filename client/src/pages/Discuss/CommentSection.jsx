import React from "react";

const comments = [
  { user: "votrubac", avatar: "V", text: "Great explanation — this helped me a lot." },
  { user: "lee_215", avatar: "L", text: "Have you tried the two-pointer approach?" },
];

function CommentSection() {
  return (
    <div className="space-y-3">
      {comments.map((c, i) => (
        <div key={i} className="flex items-start gap-3">
          <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#3a3a3a] text-[11px] font-medium text-text-secondary">
            {c.avatar}
          </div>

          <div>
            <p className="text-[12px]">
              <span className="font-medium text-[#4ea1ff]">{c.user}</span>{" "}
              <span className="text-text-secondary">{c.text}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentSection;
