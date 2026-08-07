import React from "react";
import Trophy from "../../assets/images/trophy.png";
import Msg from "../../assets/images/msg.png";
import Coin from "../../assets/images/coin.png";
import Banner from "../../assets/images/banner.png";

function RightSidebar() {
  return (
    <div className="rounded-lg border border-border bg-surface p-4">
      <img
        src={Banner}
        alt="Banner"
        className="mb-3 w-full rounded-lg"
      />

      <div className="flex items-center justify-between border-b border-border py-3">
        <div className="space-y-2">
          <h2 className="text-[16px] font-medium text-text-primary">
            LeetCode Contest
          </h2>

          <p className="text-sm leading-5 text-text-secondary">
            Participate and win prizes.
          </p>

          <button className="rounded-[3px] bg-background-secondary px-4 py-2 text-sm text-text-secondary">
            Join Contest
          </button>
        </div>

        <img
          src={Trophy}
          alt="Trophy"
          className="h-20 w-20 object-contain"
        />
      </div>


      <div className="flex items-center justify-between border-b border-border py-3">
        <div className="space-y-2">
          <h2 className="text-[16px] font-medium text-text-primary">
            Discuss Now
          </h2>

          <p className="text-sm leading-5 text-text-secondary">
            Share interview questions.
          </p>

          <p className="text-sm leading-5 text-text-secondary">
            Get solutions.
          </p>

          <button className="rounded-[3px] bg-background-secondary px-4 py-2 text-sm text-text-secondary">
            Let's Discuss
          </button>
        </div>

        <img
          src={Msg}
          alt="Message"
          className="h-20 w-20 object-contain"
        />
      </div>

      {/* LeetCoins */}
      <div className="flex items-center justify-between py-3">
        <div className="space-y-2">
          <h2 className="text-[16px] font-medium text-text-primary">
            Shop with LeetCoins
          </h2>

          <p className="text-sm leading-5 text-text-secondary">
            Use your points in our LeetCode Store.
          </p>

          <button className="rounded-[3px] bg-background-secondary px-4 py-2 text-sm text-text-secondary">
            Redeem
          </button>
        </div>

        <img
          src={Coin}
          alt="Coin"
          className="h-20 w-20 object-contain"
        />
      </div>
    </div>
  );
}

export default RightSidebar;