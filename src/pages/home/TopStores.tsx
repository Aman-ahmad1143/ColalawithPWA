import React, { useState } from 'react';
import IMAGES from '../../constants';

// Stores data
export const stores = [
  {
    id: 1,
    name: "Sasha Stores",
    followers: "5",
    following: "54",
    image: "/store1.svg",
    coverImage: "/avatar1.svg",
    isFollowing: false,
    badge1: "Electronics",
    badge2: "Phones"
  },  
  {
    id: 2,
    name: "Sasha Stores",
    followers: "5",
    following: "54", 
    image: "/store2.svg",
    coverImage: "/avatar2.svg",
    isFollowing: false,
    badge1: "Wholesales",
    badge2: "Retail"
  },
  {
    id: 3,
    name: "Sasha Stores",
    followers: "5",
    following: "54",
    image: "/store3.svg", 
    coverImage: "/avatar3.svg",
    isFollowing: false,
    badge1: "Wholesales",
    badge2: "Retail"
  },
  {
    id: 4,
    name: "Sasha Stores",
    followers: "5",
    following: "54",
    image: "/store4.svg",
    coverImage: "/avatar4.svg",
    isFollowing: false,
    badge1: "Wholesales",
    badge2: "Retail"
  }
];

const TopStores: React.FC = () => {
  const [followStates, setFollowStates] = useState<{[key: number]: boolean}>({});

  const toggleFollow = (storeId: number) => {
    setFollowStates(prev => ({
      ...prev,
      [storeId]: !prev[storeId]
    }));
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-[#E53E3E] text-white px-4 py-3 rounded-lg flex items-center justify-between mb-4">
          <h2 className="text-sm font-medium">Top  Stores</h2>
          <a href="#" className="font-medium text-sm hover:underline">View All</a>
        </div>
        
        <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex space-x-4 pb-2">
            {stores.map((store) => (
              <div key={store.id} className="flex-shrink-0 w-[330px]  bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                {/* Cover Image with Avatar */}
                <div className="relative h-20 ">
                  <img src={store.coverImage} alt="Store cover" className="w-full h-full object-cover mb-1" />
                  {/* Store Avatar positioned over cover */}
                  <div className="absolute -bottom-8 left-4">
                    <img src={store.image} alt={store.name} className="w-20 h-20 rounded-full border-3 border-white object-cover shadow-md" />
                  </div>
                </div>

                {/* Content */}
                <div className="pt-8 pb-4 px-4">
                  {/* Store Name and Rating positioned above avatar */}
                  <div className="mb-1">
                    <div className="flex items-end justify-between -mt-6 ml-20 mb-1">
                      <h3 className="font-bold text-gray-900 text-[16px]">{store.name}</h3>
                      <div className="flex items-center space-x-1">
                        
                      </div>
                    </div>
                    
                    <div className="flex items-end text-right space-x-2 ml-18 mb-4">
                      <span className="bg-[#0000FF33] text-[#0000FF] px-2 py-1 rounded-lg text-xs font-medium border border-[#0000FF]">{store.badge1}</span>
                      <span className="bg-[#FF000033] text-[#FF0000] px-1 py-1 rounded-lg text-xs font-medium border border-[#FF0000]">{store.badge2}</span>
                    <div className="flex items-center   ml-10 space-x-1">
                        <span className="text-red-500 text-lg">★</span>
                        <span className="text-sm text-gray-600 font-medium">4.5</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Section - Stats and Button in one row */}
                  <div className="flex items-center justify-between">
                    {/* Stats Section */}
                    <div className="flex items-center space-x-6">
                      <div className="text-center border-r-1 border-[#CDCDCD] pr-5 ">
                        <div className="flex items-center space-x-1 mb-0.1">
                          <img src={IMAGES.shop} alt="qty sold" className="w-4 h-6 text-gray-400" />
                          <span className="text-[8px] text-gray-500">Qty Sold</span>
                        </div>
                        <span className="text-[12px] font-bold ml-2 text-gray-900">100</span>
                      </div>
                      
                      <div className="text-center  border-r-1 border-[#CDCDCD] pr-8">
                        <div className="flex items-center space-x-1 mb-0.1">
                          <img src={IMAGES.followers} alt="followers" className="w-4 h-6 text-gray-400" />
                          <span className="text-[8px] text-gray-500">Followers</span>
                        </div>
                        <span className="text-[14px] font-bold ml-0.1 text-gray-900">{store.followers}</span>
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    <button 
                      onClick={() => toggleFollow(store.id)}
                      className={`px-2 py-3 rounded-xl font-medium cursor-pointer text-sm transition-colors ${
                        followStates[store.id] 
                          ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' 
                          : 'bg-[#E53E3E] text-white hover:bg-[#E53E3E]'
                      }`}
                    >
                      {followStates[store.id] ? 'Following' : 'Go to Shop'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopStores;
