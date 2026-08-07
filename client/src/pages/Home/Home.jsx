import React from "react";
import RightSidebar from "./RightSidebar";
import FeedSection from "./FeedSection";

function Home() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-6">
      <div className="flex items-start gap-5">
        {/* Feed */}
        <div className="flex-1 min-w-0">
          <FeedSection />
        </div>

        {/* Right Sidebar */}
        <aside className="hidden lg:block w-[300px] flex-shrink-0">
          <RightSidebar />
        </aside>
      </div>
    </div>
  );
}

export default Home;