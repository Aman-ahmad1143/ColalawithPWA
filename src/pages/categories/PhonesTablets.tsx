import React, { useState } from "react";
import IMAGES from "../../constants";

interface LocationOption {
  name: string;
  count: number | null;
  type: 'all' | 'popular' | 'state';
}

interface LagosArea {
  name: string;
  count: number;
}

interface StoreOption {
  name: string;
  count: number;
  image: string;
  type: 'popular' | 'all';
}

interface BrandOption {
  name: string;
  count: number;
  type: 'popular' | 'all';
}

const PhonesTablets: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>("Location");
  const [selectedStore, setSelectedStore] = useState<string>("Store");
  const [selectedBrand, setSelectedBrand] = useState<string>("Brand");
  const [selectedPrice, setSelectedPrice] = useState<string>("Price");
  const [selectedRatings, setSelectedRatings] = useState<string>("Ratings");
  const [sortBy, setSortBy] = useState<string>("Sort by");
  const [showLagosDropdown, setShowLagosDropdown] = useState(false);
  const [showStoreDropdown, setShowStoreDropdown] = useState(false);
  const [showBrandDropdown, setShowBrandDropdown] = useState(false);

  const storeOptions: StoreOption[] = [
    { name: "Sasha Stores", count: 5000, image: IMAGES.sashaImg, type: "popular" },
    { name: "Adam Stores", count: 4329, image: IMAGES.adam, type: "popular" },
    { name: "Tarra Stores", count: 3876, image: IMAGES.tarra, type: "all" },
    { name: "Vee Stores", count: 2145, image: IMAGES.vee, type: "all" },
    { name: "Adewale Stores", count: 1987, image: IMAGES.adewale, type: "all" },
    { name: "Favour Stores", count: 1654, image: IMAGES.favour, type: "all" },
    { name: "Scent Villa Stores", count: 1234, image: IMAGES.scent, type: "all" }
  ];

  const brandOptions: BrandOption[] = [
    { name: "iPhone", count: 2500, type: "popular" },
    { name: "Samsung", count: 2100, type: "popular" },
    { name: "Google Pixel", count: 890, type: "popular" },
    { name: "Apple", count: 2650, type: "all" },
    { name: "Amazon", count: 1456, type: "all" },
    { name: "Asus", count: 678, type: "all" },
    { name: "BlackBerry", count: 234, type: "all" },
    { name: "Cubot", count: 345, type: "all" },
    { name: "Gionee", count: 567, type: "all" },
    { name: "HMD", count: 432, type: "all" },
    { name: "Huawei", count: 789, type: "all" },
    { name: "Infinix", count: 654, type: "all" },
    { name: "Itel", count: 123, type: "all" }
  ];

  const lagosAreas: LagosArea[] = [
    { name: "All Lagos State", count: 4329 },
    { name: "Ajah", count: 1876 },
    { name: "Alimosho", count: 2145 },
    { name: "Ikeja", count: 3247 },
    { name: "Surulere", count: 1532 },
    { name: "Agege", count: 892 },
    { name: "Ajegunle", count: 1234 },
    { name: "Agbara Igbesan", count: 567 },
    { name: "Agboyi ketu", count: 743 },
    { name: "Badagry", count: 456 },
    { name: "Egbe", count: 321 },
    { name: "Ejigbo", count: 678 },
    { name: "Eko Atlantic", count: 234 }
  ];

  const locations: LocationOption[] = [
    { name: "All Locations", count: 5000, type: "all" },
    { name: "Lagos State", count: 4329, type: "popular" },
    { name: "Oyo State", count: 1582, type: "popular" },
    { name: "FCT, Abuja", count: 1456, type: "popular" },
    { name: "Rivers State", count: 891, type: "popular" },
    { name: "Abia State", count: 756, type: "state" },
    { name: "Adamawa State", count: 234, type: "state" },
    { name: "Akwa Ibom State", count: 567, type: "state" },
    { name: "Anambra State", count: 892, type: "state" },
    { name: "Bauchi State", count: 345, type: "state" },
    { name: "Bayelsa State", count: 198, type: "state" },
    { name: "Benue State", count: 423, type: "state" },
    { name: "Borno State", count: 176, type: "state" }
  ];
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

  const StoreDropdown = ({ 
    selected, 
    stores, 
    onSelect 
  }: { 
    selected: string;
    stores: StoreOption[];
    onSelect: (value: string) => void;
  }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="relative ">
        <button
          className="bg-[#F5F5F5] rounded-lg px-4 py-3 flex items-center justify-between min-w-[140px] hover:bg-gray-100 transition-colors"
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
          <>
            {/* Full Screen Overlay */}
            <div 
              className="relative left-10 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown Content - Centered */}
            <div className="fixed inset-0 left-0 xl:left-40 flex items-center z-50 p-4">
              <div className="bg-white rounded-4xl shadow-xl w-[400px] max-h-[1050px] overflow-hidden border border-gray-200">
                {/* Header with close button */}
                <div className="flex items-center justify-between p-4">
                  <h2 className="text-[18px] font-semibold text-black text-center flex-1">Store</h2>
                  <button 
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <img
                      src={IMAGES.xcircle}
                      alt="close"
                      className="w-5 h-5"
                    />
                  </button>
                </div>

                {/* Search Box */}
                <div className="px-4 pt-3 pb-1">
                  <input
                    type="text"
                    placeholder="Search Stores"
                    className="w-full px-4 py-3 bg-[#F5F5F5] rounded-lg text-[14px] text-gray-600 placeholder-gray-400 border-0 outline-none"
                  />
                </div>

                {/* Scrollable Content */}
                <div className="max-h-[600px] overflow-y-auto">
                  {/* Popular Section */}
                  <div className="p-4 pt-1 pb-2">
                    <h3 className="text-[14px] text-black mb-4">Popular</h3>
                    {stores.filter((store: StoreOption) => store.type === 'popular').map((store: StoreOption, index: number) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-2 px-2 bg-[#EDEDED] my-[2px] rounded-lg cursor-pointer transition-colors last:rounded-b-2xl first:rounded-t-2xl"
                        onClick={() => {
                          onSelect(store.name);
                          setIsOpen(false);
                        }}
                      >
                        <div className="flex items-center flex-1">
                          <img
                            src={store.image}
                            alt={store.name}
                            className="w-8 h-8 rounded-full mr-3 object-cover"
                          />
                          <div className="flex-1">
                            <div className="text-[12px] font-medium text-black">{store.name}</div>
                            <div className="text-[8px] text-gray-500 mt-1">{store.count.toLocaleString()} products</div>
                          </div>
                        </div>
                        <img
                          src={IMAGES.caretRight}
                          alt="arrow"
                          className="w-5 h-5 text-gray-400"
                        />
                      </div>
                    ))}
                  </div>

                  {/* All Stores Section */}
                  <div className="p-2 pt-2 pl-4 border-gray-200">
                    <h3 className="text-[14px] font-medium text-black">All Stores</h3>
                    {stores.filter((store: StoreOption) => store.type === 'all').map((store: StoreOption, index: number) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-2 px-2 bg-[#EDEDED] my-[2px] rounded-lg cursor-pointer transition-colors last:rounded-b-2xl first:rounded-t-2xl"
                        onClick={() => {
                          onSelect(store.name);
                          setIsOpen(false);
                        }}
                      >
                        <div className="flex items-center flex-1">
                          <img
                            src={store.image}
                            alt={store.name}
                            className="w-8 h-8 rounded-full mr-3 object-cover"
                          />
                          <div className="flex-1">
                            <div className="text-[12px] font-medium text-black">{store.name}</div>
                            <div className="text-[8px] text-gray-500 mt-1">{store.count.toLocaleString()} products</div>
                          </div>
                        </div>
                        <img
                          src={IMAGES.caretRight}
                          alt="arrow"
                          className="w-5 h-5 text-gray-400"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  };

  const BrandDropdown = ({ 
    selected, 
    brands, 
    onSelect 
  }: { 
    selected: string;
    brands: BrandOption[];
    onSelect: (value: string) => void;
  }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="relative ">
        <button
          className="bg-[#F5F5F5] rounded-lg px-4 py-3 flex items-center justify-between min-w-[140px] hover:bg-gray-100 transition-colors"
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
          <>
            {/* Full Screen Overlay */}
            <div 
              className="relative left-10 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown Content - Centered */}
            <div className="fixed inset-0 left-0 xl:left-40 flex items-center z-50 p-4">
              <div className="bg-white rounded-4xl shadow-xl w-[400px] max-h-[1050px] overflow-hidden border border-gray-200">
                {/* Header with close button */}
                <div className="flex items-center justify-between p-4">
                  <h2 className="text-[18px] font-semibold text-black text-center flex-1">Brand</h2>
                  <button 
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <img
                      src={IMAGES.xcircle}
                      alt="close"
                      className="w-5 h-5"
                    />
                  </button>
                </div>

                {/* Search Box */}
                <div className="px-4 pt-3 pb-1">
                  <input
                    type="text"
                    placeholder="Search Brand"
                    className="w-full px-4 py-3 bg-[#F5F5F5] rounded-lg text-[14px] text-gray-600 placeholder-gray-400 border-0 outline-none"
                  />
                </div>

                {/* Scrollable Content */}
                <div className="max-h-[600px] overflow-y-auto">
                  {/* Popular Section */}
                  <div className="p-4 pt-1 pb-2">
                    <h3 className="text-[14px] text-black mb-4">Popular Brands</h3>
                    {brands.filter((brand: BrandOption) => brand.type === 'popular').map((brand: BrandOption, index: number) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-2 px-2 bg-[#EDEDED] my-[2px] rounded-lg cursor-pointer transition-colors last:rounded-b-2xl first:rounded-t-2xl"
                        onClick={() => {
                          onSelect(brand.name);
                          setIsOpen(false);
                        }}
                      >
                        <div className="flex-1">
                          <div className="text-[12px] font-medium text-black">{brand.name}</div>
                          <div className="text-[8px] text-gray-500 mt-1">{brand.count.toLocaleString()} products</div>
                        </div>
                        <img
                          src={IMAGES.caretRight}
                          alt="arrow"
                          className="w-5 h-5 text-gray-400"
                        />
                      </div>
                    ))}
                  </div>

                  {/* All Brands Section */}
                  <div className="p-2 pt-2 pl-4 border-gray-200">
                    <h3 className="text-[14px] font-medium text-black">All Brands</h3>
                    {brands.filter((brand: BrandOption) => brand.type === 'all').map((brand: BrandOption, index: number) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-2 px-2 bg-[#EDEDED] my-[2px] rounded-lg cursor-pointer transition-colors last:rounded-b-2xl first:rounded-t-2xl"
                        onClick={() => {
                          onSelect(brand.name);
                          setIsOpen(false);
                        }}
                      >
                        <div className="flex-1">
                          <div className="text-[12px] font-medium text-black">{brand.name}</div>
                          <div className="text-[8px] text-gray-500 mt-1">{brand.count.toLocaleString()} products</div>
                        </div>
                        <img
                          src={IMAGES.caretRight}
                          alt="arrow"
                          className="w-5 h-5 text-gray-400"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  };

  const LagosStateDropdown = ({ 
    onSelect,
    onClose
  }: { 
    onSelect: (value: string) => void;
    onClose: () => void;
  }) => {
    return (
      <div className="fixed inset-0 left-0 xl:left-40 flex items-center z-50 p-4">
        <div className="bg-white rounded-4xl shadow-xl w-[400px] max-h-[1050px] overflow-hidden border border-gray-200">
          {/* Header with close button */}
          <div className="flex items-center justify-between p-4">
            <h2 className="text-[18px] font-semibold text-black text-center flex-1">Location</h2>
            <button 
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              onClick={onClose}
            >
              <img
                src={IMAGES.xcircle}
                alt="close"
                className="w-5 h-5"
              />
            </button>
          </div>

          {/* Search Box */}
          <div className="px-4 pt-3 pb-1">
            <input
              type="text"
              placeholder="Search location"
              className="w-full px-4 py-3 bg-[#F5F5F5] rounded-lg text-[14px] text-gray-600 placeholder-gray-400 border-0 outline-none"
            />
          </div>

          {/* Scrollable Content */}
          <div className="max-h-[600px] overflow-y-auto">
            {/* Popular Section */}
            <div className="p-4 pt-1 pb-2">
              <h3 className="text-[14px] text-black mb-4">Popular</h3>
              {lagosAreas.slice(0, 5).map((area: LagosArea, index: number) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 px-2 bg-[#EDEDED] my-[2px] rounded-lg cursor-pointer transition-colors last:rounded-b-2xl first:rounded-t-2xl"
                  onClick={() => {
                    onSelect(area.name);
                    onClose();
                  }}
                >
                  <div className="flex-1">
                    <div className="text-[12px] font-medium text-black">{area.name}</div>
                    <div className="text-[8px] text-gray-500 mt-1">{area.count.toLocaleString()} locations</div>
                  </div>
                  <img
                    src={IMAGES.caretRight}
                    alt="arrow"
                    className="w-5 h-5 text-gray-400"
                  />
                </div>
              ))}
            </div>

            {/* Others Section */}
            <div className="p-2 pt-2 pl-4 border-gray-200">
              <h3 className="text-[14px] font-medium text-black">Others</h3>
              {lagosAreas.slice(5).map((area: LagosArea, index: number) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 px-2 bg-[#EDEDED] my-[2px] rounded-lg cursor-pointer transition-colors last:rounded-b-2xl first:rounded-t-2xl"
                  onClick={() => {
                    onSelect(area.name);
                    onClose();
                  }}
                >
                  <div className="flex-1">
                    <div className="text-[12px] font-medium text-black">{area.name}</div>
                    <div className="text-[8px] text-gray-500 mt-1">{area.count.toLocaleString()} locations</div>
                  </div>
                  <img
                    src={IMAGES.caretRight}
                    alt="arrow"
                    className="w-5 h-5 text-gray-400"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const LocationDropdown = ({ 
    selected, 
    locations, 
    onSelect 
  }: { 
    selected: string;
    locations: LocationOption[];
    onSelect: (value: string) => void;
  }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLocationClick = (locationName: string) => {
      if (locationName === "Lagos State") {
        setIsOpen(false); // Close main dropdown
        setShowLagosDropdown(true); // Show Lagos dropdown
      } else {
        onSelect(locationName);
        setIsOpen(false);
      }
    };

    return (
      <div className="relative ">
        <button
          className="bg-[#F5F5F5] rounded-lg px-4 py-3 flex items-center justify-between min-w-[140px] hover:bg-gray-100 transition-colors"
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
          <>
            {/* Full Screen Overlay */}
            <div 
              className="relative left-10   z-40 "
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown Content - Centered */}
            <div className="fixed inset-0 left-0 xl:left-40 flex items-center  z-50 p-4">
              <div className="bg-white rounded-4xl shadow-xl w-[400px] max-h-[1050px] overflow-hidden border border-gray-200">
                {/* Header with close button */}
                <div className="flex items-center justify-between p-4 ">
                  <h2 className="text-[18px] font-semibold text-black text-center flex-1">Location</h2>
                  <button 
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <img
                      src={IMAGES.xcircle}
                      alt="close"
                      className="w-5 h-5"
                    />
                  </button>
                </div>

                {/* Search Box */}
                <div className="px-4 pt-3 pb-1  ">
                  <input
                    type="text"
                    placeholder="Search location"
                    className="w-full px-4 py-3 bg-[#F5F5F5] rounded-lg text-[14px] text-gray-600 placeholder-gray-400 border-0 outline-none"
                  />
                </div>

                {/* Scrollable Content */}
                <div className="max-h-[600px] overflow-y-auto">
                  {/* Popular Section */}
                  <div className="p-4 pt-1 pb-2">
                    <h3 className="text-[14px]  text-black mb-4 rounded-2xl ">Popular</h3>
                    {locations.filter((loc: LocationOption) => loc.type === 'popular' || loc.type === 'all').map((location: LocationOption, index: number) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-2 px-2 bg-[#EDEDED] my-[2px]  rounded-lg cursor-pointer transition-colors last:rounded-b-2xl first:rounded-t-2xl   "
                        onClick={() => handleLocationClick(location.name)}
                      >
                        <div className="flex-1 ">
                          <div className="text-[12px] font-medium text-black">{location.name}</div>
                          {location.count && (
                            <div className="text-[8px] text-gray-500 mt-1">{location.count.toLocaleString()} locations</div>
                          )}
                        </div>
                        <img
                          src={IMAGES.caretRight}
                          alt="arrow"
                          className="w-5 h-5 text-gray-400"
                        />
                      </div>
                    ))}
                  </div>

                  {/* All States Section */}
                  <div className="p-2 pt-2 pl-4  border-gray-200">
                    <h3 className="text-[14px] font-medium text-black ">All States</h3>
                    {locations.filter((loc: LocationOption) => loc.type === 'state').map((location: LocationOption, index: number) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-2 px-2 bg-[#EDEDED] my-[2px]  rounded-lg cursor-pointer transition-colors last:rounded-b-2xl first:rounded-t-2xl   "
                        onClick={() => handleLocationClick(location.name)}
                      >
                        <div className="flex-1">
                          <div className="text-[12px] font-medium text-black">{location.name}</div>
                          <div className="text-[8px] text-gray-500 mt-1">{location.count?.toLocaleString()} locations</div>
                        </div>
                        <img
                          src={IMAGES.caretRight}
                          alt="arrow"
                          className="w-5 h-5 text-gray-400"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Lagos State Dropdown */}
        {showLagosDropdown && (
          <LagosStateDropdown
            onSelect={onSelect}
            onClose={() => setShowLagosDropdown(false)}
          />
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
              <LocationDropdown
                selected={selectedLocation}
                locations={locations}
                onSelect={setSelectedLocation}
              />
              
              <StoreDropdown
                selected={selectedStore}
                stores={storeOptions}
                onSelect={setSelectedStore}
              />
              
              <BrandDropdown
                selected={selectedBrand}
                brands={brandOptions}
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
