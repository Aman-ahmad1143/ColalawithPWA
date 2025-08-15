import React from 'react';

const LoyaltyPoints: React.FC = () => {
  return (
    <div className="flex-1 p-8 bg-white rounded-[20px]">
      <div className="max-w-2xl">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Loyalty Points</h1>
        
        <div className="bg-gradient-to-r from-[#E53E3E] to-[#ff6b6b] text-white p-8 rounded-xl mb-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">1,250</h2>
            <p className="text-lg opacity-90">Available Points</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-4 border border-gray-200 rounded-lg text-center">
            <div className="text-2xl font-bold text-[#E53E3E]">850</div>
            <div className="text-sm text-gray-600">Points Earned</div>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600">400</div>
            <div className="text-sm text-gray-600">Points Redeemed</div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Recent Activity</h3>
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Purchase Reward</p>
                <p className="text-sm text-gray-600">Order #12345</p>
              </div>
              <div className="text-green-600 font-medium">+50 points</div>
            </div>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Welcome Bonus</p>
                <p className="text-sm text-gray-600">Account creation</p>
              </div>
              <div className="text-green-600 font-medium">+100 points</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoyaltyPoints;
