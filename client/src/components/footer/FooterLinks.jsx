import React from "react";
import { Link } from "react-router-dom";

function FooterLinks() {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-[#9b9b9b]">
      <Link to="/help-center" className="hover:text-white">Help Center</Link>

      <Link to="/jobs" className="hover:text-white">Jobs</Link>

      <Link to="/bug-bounty" className="hover:text-white">Bug Bounty</Link>

      <Link to="/online-interview" className="hover:text-white">Online Interview</Link>

      <Link to="/students" className="hover:text-white">Students</Link>

      <Link to="/terms" className="hover:text-white">Terms</Link>

      <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
    </div>
  );
}

export default FooterLinks;