import React from "react";
import { NavLink } from "react-router-dom";

function NavLinks() {
  const links = [
    { to: "/", label: "Home", exact: true },
    { to: "/problems", label: "Problems" },
    { to: "/contests", label: "Contest" },
    { to: "/discuss", label: "Discuss" },
  ];

  return (
    <div className="flex items-center gap-1 text-[14px]">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.exact}
          className={({ isActive }) =>
            `px-3 py-1.5 rounded-md transition-colors ${
              isActive
                ? "text-white font-medium bg-[#262626]"
                : "text-[#9b9b9b] hover:text-white"
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
}

export default NavLinks;
