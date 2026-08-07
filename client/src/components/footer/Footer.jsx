import React from "react";

import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";

function Footer() {
  return (
    <footer className="mt-10 border-t border-[#2d2d2d] bg-[#1a1a1a]">
      <div className="mx-auto max-w-[1280px] px-6 py-5">
        <FooterLinks />
        <FooterBottom />
      </div>
    </footer>
  );
}

export default Footer;