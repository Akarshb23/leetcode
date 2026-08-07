import React from "react";
import RightSidebar from "./RightSidebar";
import FeedSection from "./FeedSection";

function Home() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 py-6">
      <div className="flex items-start gap-6">
        <div className="flex-1 min-w-0">
          <FeedSection />
        </div>

        <aside className="hidden lg:block w-[320px] flex-shrink-0">
          <RightSidebar />
        </aside>
      </div>
    </div>
  );
}

export default Home;
