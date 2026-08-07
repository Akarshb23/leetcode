import React from "react";
import { Search, Filter } from "lucide-react";

function SearchPanel() {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
     
      <div className="flex items-center gap-3">
       
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
          />

          <input
            type="text"
            placeholder="Search questions"
            className="h-9 w-[280px] rounded-md border border-border bg-surface pl-9 pr-3 text-sm text-text-primary placeholder:text-text-muted outline-none"
          />
        </div>

       
        <button className="flex h-9 items-center gap-2 rounded-md border border-border bg-surface px-3 text-sm text-text-secondary">
          <Filter size={16} />
          Filter
        </button>
      </div>

      
      <div className="flex items-center gap-3">
        <select className="h-9 rounded-md border border-border bg-surface px-3 text-sm text-text-primary outline-none">
          <option>Difficulty</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <select className="h-9 rounded-md border border-border bg-surface px-3 text-sm text-text-primary outline-none">
          <option>Status</option>
          <option>Solved</option>
          <option>Attempted</option>
          <option>Todo</option>
        </select>
      </div>
    </div>
  );
}

export default SearchPanel;