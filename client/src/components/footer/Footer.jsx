import React from "react";

import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";

function Footer() {
  return (
    <footer className="bg-navbar border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <FooterLinks />
        <FooterBottom />
      </div>
    </footer>
  );
}

export default Footer;