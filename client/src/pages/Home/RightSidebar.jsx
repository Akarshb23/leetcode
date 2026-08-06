import React from 'react'
import Trophy from "../../assets/images/trophy.png"
import Msg from "../../assets/images/msg.png"
import Coin from "../../assets/images/coin.png"
import Banner from "../../assets/images/banner.png"

function FeedSection() {
  return (
    <div className="w-80 bg-navbar rounded-xl border border-border p-5">


      <img
        src={Banner}
        alt="Banner"
        className="w-full rounded-lg mb-6"
      />

 
      <div className="flex justify-between items-center py-5 border-b border-border">

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-text-primary">
            LeetCode Contest
          </h2>

          <h3 className="text-text-secondary">
            Participate and win prizes.
          </h3>

          <button
            className="px-5 py-2 bg-surface rounded-lg text-text-secondary hover:bg-background-secondary transition"
          >
            Join Contest
          </button>
        </div>

        <img
          src={Trophy}
          alt="Trophy"
          className="w-28 h-28 object-contain"
        />

      </div>

 
      <div className="flex justify-between items-center py-5 border-b border-border">

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-text-primary">
            Discuss Now
          </h2>

          <h3 className="text-text-secondary">
            Share interview questions.
          </h3>

          <h3 className="text-text-secondary">
            Get solutions.
          </h3>

          <button
            className="px-5 py-2 bg-surface text-text-secondary rounded-lg hover:bg-background-secondary transition"
          >
            Let's Discuss
          </button>
        </div>

        <img
          src={Msg}
          alt="Message"
          className="w-28 h-28 object-contain"
        />

      </div>

      <div className="flex justify-between items-center py-5 border-b border-border">

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-text-primary">
            Shop with LeetCoins
          </h2>

          <h3 className="text-text-secondary">
            Use your points in our LeetCode store.
          </h3>

          

          <button
            className="px-5 py-2 bg-surface text-text-secondary rounded-lg hover:bg-background-secondary transition"
          >
            Redeem
          </button>
        </div>

        <img
          src={Coin}
          alt="Message"
          className="w-27 h-27 object-contain"
        />

      </div>

      
      

      

    </div>
  )
}

export default FeedSection