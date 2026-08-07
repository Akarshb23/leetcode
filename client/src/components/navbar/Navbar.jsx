import React from "react";

import Logo from "./Logo.jsx";
import NavLinks from "./Navlinks.jsx";
import PremiumBtn from "./PremiumBtn.jsx";
import Theme from "./Theme.jsx";
import DropDown from "./ProfileDropDown.jsx";

function Navbar() {
  return (
    <nav className="sticky top-0 z-30 h-14 border-b border-[#2e2e2e] bg-[#1f1f1f]">
      <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Logo />
          <NavLinks />
        </div>

        <div className="flex items-center gap-3">
          <PremiumBtn />
          <Theme />
          <DropDown />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
