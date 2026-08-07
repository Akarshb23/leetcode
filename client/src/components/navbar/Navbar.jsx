import React from "react";

import Logo from "./Logo.jsx";
import NavLinks from "./Navlinks.jsx";
import SearchBar from "./SearchProblem.jsx";
import Theme from "./Theme.jsx";
import DropDown from "./ProfileDropDown.jsx";

function Navbar() {
  return (
    <nav className="h-16 border-b border-[#2e2e2e] bg-[#1f1f1f]">
      <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Logo />
          <NavLinks />
        </div>

        <div className="hidden md:block">
          <SearchBar />
        </div>

        <div className="flex items-center gap-3">
          <Theme />
          <DropDown />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;