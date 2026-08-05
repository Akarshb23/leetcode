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
        className="h-10 w-auto object-contain"
      />

      <h1 className="text-xl font-bold text-text-primary">
        LeetCode
      </h1>
    </Link>
  );
}

export default Logo;