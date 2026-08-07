import React from "react";
import { Link } from "react-router-dom";

import LC from "../../assets/images/LC.jpg";
// import LClight from "../../assets/images/LClight.jpg";

function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 cursor-pointer select-none"
    >
      <img
        src={LC}
        alt="LeetCode Logo"
        className="h-7 w-auto object-contain"
      />

      <h1 className="text-[19px] font-semibold tracking-[-0.01em] text-white">
        LeetCode
      </h1>
    </Link>
  );
}

export default Logo;