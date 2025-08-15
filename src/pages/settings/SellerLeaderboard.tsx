import React from 'react';

const SellerLeaderboard: React.FC = () => {
  const sellers = [
    { rank: 1, name: "Sasha Stores", rating: 4.9, sales: 1250, badge: "🥇" },
    { rank: 2, name: "Tech Hub", rating: 4.8, sales: 980, badge: "🥈" },
    { rank: 3, name: "Fashion Palace", rating: 4.7, sales: 875, badge: "🥉" },
    { rank: 4, name: "Electronics Plus", rating: 4.6, sales: 720, badge: "" },
    { rank: 5, name: "Home Essentials", rating: 4.5, sales: 650, badge: "" },
  ];

  return (
    <div className="flex-1 p-8 bg-white rounded-[20px]">
      <div className="max-w-2xl">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Seller Leaderboard</h1>
        
        <div className="mb-6">
          <p className="text-gray-600">Top performing sellers this month</p>
        </div>

        <div className="space-y-4">
          {sellers.map((seller) => (
            <div key={seller.rank} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="flex items-center gap-4 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{seller.badge || `#${seller.rank}`}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{seller.name}</h3>
                  <p className="text-sm text-gray-600">⭐ {seller.rating} rating</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{seller.sales}</p>
                  <p className="text-sm text-gray-600">sales</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="bg-[#E53E3E] text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors">
            View All Sellers
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellerLeaderboard;
