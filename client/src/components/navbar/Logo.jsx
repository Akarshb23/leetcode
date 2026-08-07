import React from "react";
import { Link } from "react-router-dom";

import LC from "../../assets/images/LC.jpg";

function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 select-none cursor-pointer"
    >
      <img
        src={LC}
        alt="LeetCode Logo"
        className="h-8 w-8 rounded-md object-cover"
      />

      <span className="text-[17px] font-semibold tracking-tight text-white">
        LeetCode
      </span>
    </Link>
  );
}

export default Logo;
