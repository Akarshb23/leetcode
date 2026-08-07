import React from "react";

import SearchPanel from "./SearchPanel";
import ProblemTable from "./ProblemTable";
// import ProblemFilters from "./ProblemFilters";
import Pagination from "./Pagination";

function Problems() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-6">
      <div className="mb-6">
        <h1 className="text-[28px] font-semibold text-text-primary">
          Problems
        </h1>

        <p className="mt-1 text-sm text-text-secondary">
          Practice coding interview questions.
        </p>
      </div>

      <SearchPanel />

      

      <ProblemTable />

      <Pagination />
    </div>
  );
}

export default Problems;