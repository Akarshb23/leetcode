import React from "react";
import Trophy from "../../assets/images/trophy.png";
import Msg from "../../assets/images/msg.png";
import Coin from "../../assets/images/coin.png";
import Banner from "../../assets/images/banner.png";

function RightSidebar() {
  return (
    <div className="rounded-lg border border-[rgba(255,255,255,0.07)] bg-[#262626] p-4">
      <img
        src={Banner}
        alt="Banner"
        className="mb-3 w-full rounded"
      />

      <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.05)] py-3">
        <div className="space-y-1.5">
          <h2 className="text-[15px] font-medium text-white">
            LeetCode Contest
          </h2>

          <p className="text-[13px] leading-[18px] text-[#b3b3b3]">
            Participate and win prizes.
          </p>

          <button className="rounded-[3px] bg-[#3a3a3a] px-3 py-1.5 text-[13px] text-[#d9d9d9] hover:bg-[#4a4a4a]">
            Join Contest
          </button>
        </div>

        <img
          src={Trophy}
          alt="Trophy"
          className="h-16 w-16 object-contain"
        />
      </div>


      <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.05)] py-3">
        <div className="space-y-1.5">
          <h2 className="text-[15px] font-medium text-white">
            Discuss Now
          </h2>

          <p className="text-[13px] leading-[18px] text-[#b3b3b3]">
            Share interview questions.
          </p>

          <p className="text-[13px] leading-[18px] text-[#b3b3b3]">
            Get solutions.
          </p>

          <button className="rounded-[3px] bg-[#3a3a3a] px-3 py-1.5 text-[13px] text-[#d9d9d9] hover:bg-[#4a4a4a]">
            Let's Discuss
          </button>
        </div>

        <img
          src={Msg}
          alt="Message"
          className="h-16 w-16 object-contain"
        />
      </div>

      {/* LeetCoins */}
      <div className="flex items-center justify-between py-3">
        <div className="space-y-1.5">
          <h2 className="text-[15px] font-medium text-white">
            Shop with LeetCoins
          </h2>

          <p className="text-[13px] leading-[18px] text-[#b3b3b3]">
            Use your points in our LeetCode Store.
          </p>

          <button className="rounded-[3px] bg-[#3a3a3a] px-3 py-1.5 text-[13px] text-[#d9d9d9] hover:bg-[#4a4a4a]">
            Redeem
          </button>
        </div>

        <img
          src={Coin}
          alt="Coin"
          className="h-16 w-16 object-contain"
        />
      </div>
    </div>
  );
}

export default RightSidebar;