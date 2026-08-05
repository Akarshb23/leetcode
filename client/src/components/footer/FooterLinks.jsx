import React from "react";
import { Link } from "react-router-dom";

function FooterLinks() {
  return (
    <div className="flex flex-wrap justify-center gap-8 text-sm text-text-secondary mb-8">
      <Link to="/" className="hover:text-primary transition-colors">
        Home
      </Link>

      <Link to="/problems" className="hover:text-primary transition-colors">
        Problems
      </Link>

      <Link to="/contests" className="hover:text-primary transition-colors">
        Contests
      </Link>

      <Link to="/discuss" className="hover:text-primary transition-colors">
        Discuss
      </Link>
    </div>
  );
}

export default FooterLinks;