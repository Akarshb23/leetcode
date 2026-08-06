import React from "react";
import RightSidebar from "./RightSidebar";
import FeedSection from "./FeedSection";

function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <div className="mx-auto flex max-w-7xl gap-6 px-6 py-6">
        <div className="flex-1 min-w-0">
          <FeedSection />
        </div>

        <div className="hidden lg:block w-80">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

export default Home;