import React from "react";
import Trophy from "../../assets/images/trophy.png";
import Msg from "../../assets/images/msg.png";
import Coin from "../../assets/images/coin.png";
import Banner from "../../assets/images/banner.png";

function RightSidebar() {
  return (
    <div className="space-y-4">
      {/* Banner */}
      <div className="overflow-hidden rounded-lg border border-[#2e2e2e] bg-[#262626]">
        <img src={Banner} alt="Banner" className="w-full" />
      </div>

      {/* Daily Challenge */}
      <div className="rounded-lg border border-[#2e2e2e] bg-[#262626]">
        <div className="flex items-center justify-between border-b border-[#2e2e2e] px-4 py-3">
          <h2 className="text-[14px] font-medium text-white">
            Daily Challenge
          </h2>

          <span className="rounded bg-[#1f3d3a] px-2 py-0.5 text-[10px] font-medium text-[#00b8a3]">
            Easy
          </span>
        </div>

        <div className="space-y-2 p-4">
          <p className="text-[14px] font-medium text-white">
            1342. Number of Operations to Make Network Connected
          </p>

          <p className="text-[12px] text-text-muted">
            Practice the daily problem to keep your streak.
          </p>

          <button className="rounded bg-[#3a3a3a] px-3 py-1.5 text-[12px] text-text-secondary hover:bg-[#4a4a4a] hover:text-white cursor-pointer">
            Solve Challenge
          </button>
        </div>
      </div>

      {/* Contest Card */}
      <div className="rounded-lg border border-[#2e2e2e] bg-[#262626] p-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1.5">
            <h2 className="text-[14px] font-medium text-white">
              LeetCode Contest
            </h2>

            <p className="text-[12px] text-text-secondary">
              Participate and win prizes.
            </p>

            <button className="rounded bg-[#3a3a3a] px-3 py-1.5 text-[12px] text-text-secondary hover:bg-[#4a4a4a] hover:text-white cursor-pointer">
              Join Contest
            </button>
          </div>

          <img src={Trophy} alt="Trophy" className="h-16 w-16 object-contain" />
        </div>
      </div>

      {/* Discuss Card */}
      <div className="rounded-lg border border-[#2e2e2e] bg-[#262626] p-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1.5">
            <h2 className="text-[14px] font-medium text-white">Discuss Now</h2>

            <p className="text-[12px] text-text-secondary">
              Share interview questions, get solutions.
            </p>

            <button className="rounded bg-[#3a3a3a] px-3 py-1.5 text-[12px] text-text-secondary hover:bg-[#4a4a4a] hover:text-white cursor-pointer">
              Let's Discuss
            </button>
          </div>

          <img src={Msg} alt="Message" className="h-16 w-16 object-contain" />
        </div>
      </div>

      {/* LeetCoins Card */}
      <div className="rounded-lg border border-[#2e2e2e] bg-[#262626] p-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1.5">
            <h2 className="text-[14px] font-medium text-white">
              Shop with LeetCoins
            </h2>

            <p className="text-[12px] text-text-secondary">
              Use your points in our LeetCode Store.
            </p>

            <button className="rounded bg-[#3a3a3a] px-3 py-1.5 text-[12px] text-text-secondary hover:bg-[#4a4a4a] hover:text-white cursor-pointer">
              Redeem
            </button>
          </div>

          <img src={Coin} alt="Coin" className="h-16 w-16 object-contain" />
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
