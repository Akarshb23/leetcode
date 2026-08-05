import React from "react";

import Logo from "./Logo.jsx";
import NavLinks from "./Navlinks.jsx";
import SearchBar from "./SearchProblem.jsx";
import Theme from "./Theme";
import DropDown from "./ProfileDropDown.jsx";

function Navbar() {
  return (
    <nav className="w-full h-16 bg-navbar border-b border-border">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">


        <div className="flex items-center gap-8">
          <Logo />
          <NavLinks />
        </div>


        <div className="hidden md:block">
          <SearchBar />
        </div>


        <div className="flex items-center gap-4">
          <Theme />
          <DropDown />
        </div>

      </div>
    </nav>
  );
}

export default Navbar;