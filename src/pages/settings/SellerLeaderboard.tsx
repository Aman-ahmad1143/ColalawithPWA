import React, { useState } from 'react';
import IMAGES from '../../constants';

const SellerLeaderboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Today' | 'Weekly' | 'Monthly' | 'All Time'>('Today');

  const topSellers = [
    {
      rank: 1,
      name: "Sasha Stores",
      score: 200,
      avatar: IMAGES.sasha,
    },
    {
      rank: 2,
      name: "Vee Stores", 
      score: 180,
      avatar: IMAGES.vee,
    },
    {
      rank: 3,
      name: "Dan Stores",
      score: 150,
      avatar: IMAGES.adam,
    }
  ];

  const leaderboardList = [
    {
      rank: 4,
      name: "Kevin Stores",
      score: 100,
      avatar: IMAGES.sasha,
    },
    {
      rank: 5,
      name: "Rabby Stores",
      score: 70,
      avatar: IMAGES.vee,
    },
    {
      rank: 6,
      name: "Dann Stores",
      score: 350,
      avatar: IMAGES.adam,
    },
    {
      rank: 7,
      name: "Don Stores",
      score: 400,
      avatar: IMAGES.sasha,
    },
    {
      rank: 8,
      name: "Scent villa stores",
      score: 500,
      avatar: IMAGES.vee,
    }
  ];

  return (
    <div className="flex-1 p-4 bg-gray-50 rounded-[20px] ">
      <div className="max-w-4xl mx-auto">
        {/* Header Section with Red Gradient Background */}
        <div className="bg-gradient-to-br from-[#FF0000] to-[#70064B] rounded-3xl p-6 text-white relative min-h-screen overflow-hidden">
          {/* Help Button */}
          <button className="absolute top-4 right-4 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
            </svg>
          </button>

          {/* Title */}
          <h1 className="text-xl font-semibold mb-6">Seller Leaderboard</h1>

          {/* Time Period Tabs */}
          <div className="flex gap-6 mb-8">
            {(['Today', 'Weekly', 'Monthly', 'All Time'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[16px] text-[#FFFFFF80] pb-1 w-full  transition-colors ${
                  activeTab === tab
                    ? ' text-white text-[40px]'
                    : 'border-transparent text-white text-opacity-70 hover:text-opacity-90'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Podium Section */}
          <div className="relative flex items-end justify-center gap-4 h-40 mt-40">
            {/* Second Place */}
            <div className="flex flex-col items-center">
              <img
                src={topSellers[1].avatar}
                alt={topSellers[1].name}
                className="w-24 h-24 rounded-full border-4 border-[#FF4444] mb-2"
              />
              <p className="text-xs font-medium text-center mb-1">{topSellers[1].name}</p>
              <p className="text-sm font-bold mb-2">{topSellers[1].score}</p>
              <div className="bg-pink-300 rounded-t-lg w-16 h-16 flex items-center justify-center relative">
                <span className="text-2xl font-bold text-purple-800">2</span>
              </div>
            </div>

            {/* First Place */}
            <div className="flex flex-col items-center">
              <img
                src={topSellers[0].avatar}
                alt={topSellers[0].name}
                className="w-29 h-29 rounded-full border-4 border-[#FF4444] mb-2"
              />
              <p className="text-sm font-medium text-center mb-1">{topSellers[0].name}</p>
              <p className="text-lg font-bold mb-2">{topSellers[0].score}</p>
              <div className="bg-pink-400 rounded-t-lg w-20 h-24 flex items-center justify-center relative">
                <span className="text-3xl font-bold text-purple-800">1</span>
              </div>
            </div>

            {/* Third Place */}
            <div className="flex flex-col items-center">
              <img
                src={topSellers[2].avatar}
                alt={topSellers[2].name}
                className="w-24 h-24 rounded-full border-4 border-[#FF4444] mb-2"
              />
              <p className="text-xs font-medium text-center mb-1">{topSellers[2].name}</p>
              <p className="text-sm font-bold mb-2">{topSellers[2].score}</p>
              <div className="bg-pink-200 rounded-t-lg w-16 h-12 flex items-center justify-center relative">
                <span className="text-2xl font-bold text-purple-800">3</span>
              </div>
            </div>
          </div>
        </div>

        {/* Leaderboard List */}
        <div className="bg-white rounded-3xl mt-6 p-6 shadow-sm">
          <div className="space-y-4">
            {leaderboardList.map((seller) => (
              <div
                key={seller.rank}
                className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
              >
                <div className="flex items-center gap-4">
                  <span className="text-lg font-medium text-gray-600 w-6">{seller.rank}</span>
                  <img
                    src={seller.avatar}
                    alt={seller.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="font-medium text-gray-900">{seller.name}</span>
                </div>
                <span className="text-lg font-bold text-[#E53E3E]">{seller.score}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerLeaderboard;


