import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#1a1a1a] px-4 text-center">
      <h1 className="text-[80px] font-bold text-[#ffa116]">404</h1>

      <h2 className="mt-2 text-[22px] font-medium text-white">
        Page not found
      </h2>

      <p className="mt-2 max-w-md text-[14px] text-text-secondary">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 rounded-md bg-[#ffa116] px-5 py-2 text-[13px] font-medium text-[#1a1a1a] hover:bg-[#ffb800]"
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
