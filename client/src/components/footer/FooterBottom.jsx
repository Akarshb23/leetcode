import React from "react";

function FooterBottom() {
  return (
    <div className="border-t border-border pt-6 text-center text-sm text-text-muted">
      <p>© {new Date().getFullYear()} LeetCode. Built with React.</p>
    </div>
  );
}

export default FooterBottom;