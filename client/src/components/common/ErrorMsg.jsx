import React from "react";

function ErrorMsg({ message = "Something went wrong." }) {
  return (
    <div className="rounded-md border border-[#3d1f23] bg-[#2b1f20] px-4 py-3 text-[13px] text-[#ff5a5f]">
      {message}
    </div>
  );
}

export default ErrorMsg;
