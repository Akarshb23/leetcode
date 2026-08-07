import React from "react";
import { Search } from "lucide-react";

function SearchBar({ placeholder = "Search...", className = "", ...rest }) {
  return (
    <div className={`relative ${className}`}>
      <Search
        size={16}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
      />

      <input
        type="text"
        placeholder={placeholder}
        className="h-9 w-full rounded-md border border-border bg-surface pl-9 pr-3 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-[#5a5a5a]"
        {...rest}
      />
    </div>
  );
}

export default SearchBar;
