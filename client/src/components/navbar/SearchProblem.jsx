import React from "react";
import { Search } from "lucide-react";

function SearchProblem() {
  return (
    <div className="relative w-80">
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary"
      />

      <input
        type="text"
        placeholder="Search problems..."
        className="w-full rounded-lg bg-surface border border-border py-2 pl-10 pr-4 text-text-primary placeholder:text-text-muted outline-none focus:border-primary transition-colors duration-200"
      />
    </div>
  );
}

export default SearchProblem;