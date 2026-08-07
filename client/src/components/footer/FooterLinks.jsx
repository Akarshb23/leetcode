import React from "react";
import { Link } from "react-router-dom";

function FooterLinks() {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#9ca3af]">
      <Link to="/help-center">Help Center</Link>

      <Link to="/jobs">Jobs</Link>

      <Link to="/bug-bounty">Bug Bounty</Link>

      <Link to="/online-interview">Online Interview</Link>

      <Link to="/students">Students</Link>

      <Link to="/terms">Terms</Link>

      <Link to="/privacy">Privacy Policy</Link>
    </div>
  );
}

export default FooterLinks;