import React from "react";
import TextArea from "../../components/common/TextArea";
import Button from "../../components/common/Button";

function CreatePost() {
  return (
    <div className="rounded-lg border border-[#2e2e2e] bg-[#262626] p-4">
      <TextArea
        placeholder="What's on your mind?"
        rows={3}
        className="resize-none !bg-[#1f1f1f]"
      />

      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[12px] text-text-muted">
          <button className="rounded px-2 py-1 hover:bg-[#3a3a3a] hover:text-white cursor-pointer">
            📷
          </button>

          <button className="rounded px-2 py-1 hover:bg-[#3a3a3a] hover:text-white cursor-pointer">
            🔗
          </button>
        </div>

        <Button>Post</Button>
      </div>
    </div>
  );
}

export default CreatePost;
