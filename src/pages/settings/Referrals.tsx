import React from 'react';

const Referrals: React.FC = () => {
  return (
    <div className="flex-1 p-8 bg-white rounded-[20px]">
      <div className="max-w-2xl">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Referrals</h1>
        <div className="p-6 border border-gray-200 rounded-lg mb-6">
          <h3 className="text-lg font-medium mb-4">Your Referral Code</h3>
          <div className="flex items-center gap-4">
            <div className="flex-1 px-4 py-3 bg-gray-50 rounded-lg font-mono text-lg">
              COLALA2024
            </div>
            <button className="bg-[#E53E3E] text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors">
              Copy
            </button>
          </div>
        </div>
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg mb-4">0 Successful Referrals</div>
          <div className="text-gray-400 text-sm">Invite friends and earn rewards when they make their first purchase!</div>
        </div>
      </div>
    </div>
  );
};

export default Referrals;
