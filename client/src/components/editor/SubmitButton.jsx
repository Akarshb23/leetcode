import React from "react";

function SubmitButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 rounded-md bg-[#00b8a3] px-3.5 py-1.5 text-[12px] font-medium text-white hover:bg-[#00a394] cursor-pointer"
    >
      Submit
    </button>
  );
}

export default SubmitButton;
