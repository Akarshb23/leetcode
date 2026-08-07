import React from "react";
import { Search } from "lucide-react";

function SearchProblem() {
  return (
    <div className="relative w-[290px]">
      <Search
        size={16}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
      />

      <input
        type="text"
        placeholder="Search problems..."
        className="h-9 w-full rounded-md border border-[#3a3a3a] bg-[#2b2b2b] pl-9 pr-3 text-sm text-white placeholder:text-zinc-500 outline-none"
      />
    </div>
  );
}

export default SearchProblem;