import React, { useState } from "react";
import { storesData, Store, locationOptions, categoryOptions, reviewOptions, formatRating } from "./storesData";
import IMAGES from "../../constants";

const Stores: React.FC = () => {
  const [stores] = useState<Store[]>(storesData);
  const [filters, setFilters] = useState({
    location: "",
    category: "",
    review: "",
  });

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  // Filter stores based on selected filters
  const filteredStores = stores.filter(store => {
    if (filters.location && !store.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }
    if (filters.category && !store.categories.some(cat => cat.toLowerCase().includes(filters.category.toLowerCase()))) {
      return false;
    }
    if (filters.review) {
      const minRating = parseFloat(filters.review);
      if (store.rating < minRating) {
        return false;
      }
    }
    return true;
  });

  return (
    <div className=" bg-gray-50 py-6">
      <div className="max-w-[1280px] mx-auto px-4">
        
        {/* Filters Section */}
        <div className="mb-8 max-w-262 mx-auto">
          <div className="flex gap-4 items-center">
            {/* Location Filter */}
            <div className="relative">
              <select
                value={filters.location}
                onChange={(e) => handleFilterChange("location", e.target.value)}
                className="appearance-none bg-gray-200 border-0 rounded-xl px-4 py-3 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-0 focus:bg-gray-300 transition-colors min-w-[120px] cursor-pointer"
              >
                {locationOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={filters.category}
                onChange={(e) => handleFilterChange("category", e.target.value)}
                className="appearance-none bg-gray-200 border-0 rounded-xl px-4 py-3 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-0 focus:bg-gray-300 transition-colors min-w-[120px] cursor-pointer"
              >
                {categoryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Review Filter */}
            <div className="relative">
              <select
                value={filters.review}
                onChange={(e) => handleFilterChange("review", e.target.value)}
                className="appearance-none bg-gray-200 border-0 rounded-xl px-4 py-3 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-0 focus:bg-gray-300 transition-colors min-w-[120px] cursor-pointer"
              >
                {reviewOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Stores Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-262 mx-auto">
          {filteredStores.map((store) => (
            <div key={store.id} className="bg-white rounded-[20px] shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow max-w-47 ">
              {/* Store Image */}
              <div className="relative ">
                <img
                  src={store.image}
                  alt={store.name}
                  className="w-47 h-22 object-cover"
                />
                {/* Store Avatar */}
                <div className="absolute -bottom-6 left-4">
                  <img
                    src={store.avatar}
                    alt={`${store.name} avatar`}
                    className="w-12 h-12 rounded-full  object-cover"
                  />
                </div>
              </div>

              {/* Store Info */}
              <div className="pt-7 pb-4 px-3">
                {/* Store Name and Rating */}
                <div className="flex items-center justify-between mb-[6px]">
                  <h3 className="font-medium text-gray-900 text-sm">{store.name}</h3>
                  <div className="flex items-center">
                    <img src={IMAGES.starFilled} alt="Star" className="w-[9px] h-[9px] mr-1" />
                    <span className="text-[8px] font-[400] text-gray-600">{formatRating(store.rating)}</span>
                  </div>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-2.5">
                  {store.categories.map((category, index) => (
                    <span
                      key={index}
                      className={`px-1.5 py-0.5 w-auto h-auto text-[8px] rounded-[5px] ${
                        category === "Electronics"
                          ? "bg-[#0000FF33] border border-[#0000FF] text-[#0000FF]"
                          : "bg-[#FF000033] text-[#E53E3E] border border-[#E53E3E]"
                      }`}
                    >
                      {category}
                    </span>
                  ))}
                </div>

                {/* Go to Shop Button */}
                <button className="w-full bg-[#E53E3E] text-white text-[8px] py-2.5 rounded-xl font-[400] hover:bg-red-600 transition-colors">
                  Go to Shop
                </button>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default Stores;
