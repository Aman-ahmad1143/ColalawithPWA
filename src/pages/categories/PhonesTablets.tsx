import React, { useState } from "react";
import IMAGES from "../../constants";

const PhonesTablets: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>("Location");
  const [selectedStore, setSelectedStore] = useState<string>("Store");
  const [selectedBrand, setSelectedBrand] = useState<string>("Brand");
  const [selectedPrice, setSelectedPrice] = useState<string>("Price");
  const [selectedRatings, setSelectedRatings] = useState<string>("Ratings");
  const [sortBy, setSortBy] = useState<string>("Sort by");

  const locations = ["All Locations", "New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  const stores = ["All Stores", "Apple Store", "Best Buy", "Amazon", "Walmart", "Target"];
  const brands = ["All Brands", "Apple", "Samsung", "Google", "OnePlus", "Xiaomi"];
  const prices = ["All Prices", "Under $200", "$200 - $500", "$500 - $800", "$800 - $1200", "Over $1200"];
  const ratings = ["All Ratings", "5 Stars", "4 Stars & Up", "3 Stars & Up", "2 Stars & Up"];
  const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low", "Newest", "Most Popular", "Best Rating"];

  const DropdownFilter = ({ 
    selected, 
    options, 
    onSelect 
  }: { 
    selected: string;
    options: string[];
    onSelect: (value: string) => void;
  }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="relative">
        <button
          className="bg-[#F5F5F5]    rounded-lg px-4 py-3 flex items-center justify-between min-w-[140px] hover:bg-gray-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-[14px] text-gray-700">
            {selected}
          </span>
          <img
            src={IMAGES.dropdown}
            alt="dropdown"
            className={`w-4 h-4 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[180px]">
            {options.map((option, index) => (
              <button
                key={index}
                className="w-full text-left px-4 py-2 text-[14px] text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors"
                onClick={() => {
                  onSelect(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white min-h-screen py-8 ">
      {/* Container with max width constraint */}
      <div className="max-w-[1280px] mx-auto px-16">
        {/* Page Header */}
        <h1 className="text-[40px] font-bold text-black mb-8">Phones & Tablets</h1>

        {/* Filters Container */}
        <div className="bg-white rounded-lg  p-6 mb-8">
          <div className="flex items-center justify-between">
            {/* Filter Dropdowns */}
            <div className="flex items-center gap-4">
              <DropdownFilter
                selected={selectedLocation}
                options={locations}
                onSelect={setSelectedLocation}
              />
              
              <DropdownFilter
                selected={selectedStore}
                options={stores}
                onSelect={setSelectedStore}
              />
              
              <DropdownFilter
                selected={selectedBrand}
                options={brands}
                onSelect={setSelectedBrand}
              />
              
              <DropdownFilter
                selected={selectedPrice}
                options={prices}
                onSelect={setSelectedPrice}
              />
              
              <DropdownFilter
                selected={selectedRatings}
                options={ratings}
                onSelect={setSelectedRatings}
              />
            </div>

            {/* Sort By Dropdown */}
            <div className="flex items-center bg-[#F5F5F5] border pl-1 border-gray-200 rounded-lg">
              <img
                src={IMAGES.funnel}
                alt="filter"
                className="w-5 h-5 "
              />
              <DropdownFilter 
                selected={sortBy}
                options={sortOptions}
                onSelect={setSortBy}
              />
            </div>
          </div>
        </div>

        {/* Products Section */}
      </div>
    </div>
  );
};

export default PhonesTablets;
