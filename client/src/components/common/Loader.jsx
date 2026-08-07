import React from "react";
import Spinner from "./Spinner";

function Loader({ label = "Loading..." }) {
  return (
    <div className="flex items-center justify-center gap-2 py-10 text-sm text-text-secondary">
      <Spinner />

      <span>{label}</span>
    </div>
  );
}

export default Loader;
