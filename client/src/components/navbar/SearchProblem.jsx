import React from "react";
import { Search } from "lucide-react";

function SearchProblem() {
  return (
    <div className="relative w-[260px]">
      <Search
        size={16}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
      />

      <input
        type="text"
        placeholder="Search problems or topics..."
        className="h-9 w-full rounded-md border border-transparent bg-[#3a3a3a] pl-9 pr-3 text-sm text-white placeholder:text-[#9b9b9b] outline-none focus:border-[#5a5a5a]"
      />
    </div>
  );
}

export default SearchProblem;