import React from "react";
import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <div className="flex gap-6">
      <NavLink to="/" className="text-white">Home</NavLink>

      <NavLink to="/problems" className="text-white">Problems</NavLink>

      <NavLink to="/contests" className="text-white">Contests</NavLink>

      <NavLink to="/discuss" className="text-white">Discuss</NavLink>
    </div>
  );
}

export default NavLinks;