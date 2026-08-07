import React from "react";
import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <div className="flex items-center gap-6 text-[14px]">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-white font-medium"
            : "text-[#9b9b9b] hover:text-white"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/problems"
        className={({ isActive }) =>
          isActive
            ? "text-white font-medium"
            : "text-[#9b9b9b] hover:text-white"
        }
      >
        Problems
      </NavLink>

      <NavLink
        to="/contests"
        className={({ isActive }) =>
          isActive
            ? "text-white font-medium"
            : "text-[#9b9b9b] hover:text-white"
        }
      >
        Contests
      </NavLink>

      <NavLink
        to="/discuss"
        className={({ isActive }) =>
          isActive
            ? "text-white font-medium"
            : "text-[#9b9b9b] hover:text-white"
        }
      >
        Discuss
      </NavLink>
    </div>
  );
}

export default NavLinks;