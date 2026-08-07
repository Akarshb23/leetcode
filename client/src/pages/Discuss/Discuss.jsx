import React from "react";
import CreatePost from "./CreatePost";
import PostList from "./PostList";

function Discuss() {
  return (
    <div className="mx-auto max-w-[800px] px-6 py-6">
      <div className="mb-6">
        <h1 className="text-[28px] font-semibold text-white">Discuss</h1>

        <p className="mt-1 text-[13px] text-text-secondary">
          Share interview questions, solutions, and more.
        </p>
      </div>

      <CreatePost />

      <h2 className="mb-3 mt-6 text-[15px] font-medium uppercase tracking-wide text-text-muted">
        Recent Posts
      </h2>

      <PostList />
    </div>
  );
}

export default Discuss;
