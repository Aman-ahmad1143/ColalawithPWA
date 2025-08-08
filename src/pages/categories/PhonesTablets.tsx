/**
 * Phones & Tablets Category Page Component
 * 
 * This component provides a comprehensive filtering interface for phone and tablet products
 * Features include location filtering, store selection, brand filtering, and advanced dropdowns
 * 
 * Key Features:
 * - Full-screen modal dropdowns for complex filtering
 * - Nested location selection (Lagos State -> Lagos Areas)
 * - Store profiles with avatars and product counts
 * - Brand filtering with popularity grouping
 * - Price range and rating filters
 * - Sorting options for product results
 * 
 * Backend Integration Points:
 * - All filter data should come from API endpoints
 * - Product counts should be real-time
 * - Location data supports hierarchical structure
 * - Store data includes images, ratings, distance calculations
 * 
 * @component
 * @returns {JSX.Element} The complete phones and tablets filtering interface
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IMAGES from '../../constants';
import TopSellingProducts from '../home/TopSellingProducts';
import AllProducts from '../home/AllProducts';


import { 
  LocationOption, 
  StoreOption, 
  BrandOption, 
  LagosArea,
  locations,
  storeOptions,
  brandOptions,
  lagosAreas,
  prices,
  ratings,
  sortOptions
} from './phonesTabletsData';

const PhonesTablets: React.FC = () => {
  const navigate = useNavigate();
  
  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  /**
   * Component State Management
   * 
   * Filter Selection States:
   * These track the current selected value for each filter type
   * Backend should sync these with URL parameters for deep linking
   */
  const [selectedLocation, setSelectedLocation] = useState<string>("Location");
  const [selectedStore, setSelectedStore] = useState<string>("Store");
  const [selectedBrand, setSelectedBrand] = useState<string>("Brand");
  const [selectedPrice, setSelectedPrice] = useState<string>("Price");
  const [selectedRatings, setSelectedRatings] = useState<string>("Ratings");
  const [sortBy, setSortBy] = useState<string>("Sort by");
  
  /**
   * Modal Dropdown Visibility States:
   * Control which full-screen dropdown modals are currently open
   * Only one should be open at a time for better UX
   */
  const [showLagosDropdown, setShowLagosDropdown] = useState(false);
  // Note: showStoreDropdown and showBrandDropdown removed as they use internal state

  /**
   * Basic Dropdown Filter Component
   * 
   * Used for simple string-based filters (Price, Ratings, Sort)
   * For complex data with images/counts, use custom dropdown components below
   * 
   * @param selected - Currently selected option
   * @param options - Array of string options to display
   * @param onSelect - Callback when user selects an option
   * 
   * Backend Integration:
   * - options array should come from API for dynamic configuration
   * - Consider adding icons or descriptions for each option
   * - Add analytics tracking for filter usage
   */

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
        {/* Dropdown Trigger Button */}
        <button
          className="bg-[#EDEDED] rounded-lg px-4 py-3 flex items-center justify-between min-w-[140px]  transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-[14px] text-gray-700">
            {selected}
          </span>
          {/* Rotating dropdown arrow icon */}
          <img
            src={IMAGES.dropdown}
            alt="dropdown"
            className={`w-4 h-4 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>

        {/* Dropdown Options Menu */}
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

  /**
   * Store Dropdown Component
   * 
   * Full-screen modal dropdown for store/merchant selection
   * Features store avatars, product counts, and popular/all categorization
   * 
   * @param selected - Currently selected store name
   * @param stores - Array of store options with images and counts
   * @param onSelect - Callback when user selects a store
   * 
   * Backend Integration:
   * - Store data should come from GET /api/stores
   * - Image URLs should be from CDN
   * - Product counts should be real-time
   * - Consider adding store ratings, verification status
   * - Add search functionality for large store lists
   * 
   * UX Features:
   * - Search box for finding specific stores
   * - Popular stores section for better discovery
   * - Circular avatars for visual appeal
   * - Product counts for informed selection
   * - Full-screen overlay for focus
   */

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
      <div className="relative">
        {/* Store Dropdown Trigger */}
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
            {/* Invisible overlay - clicking here closes dropdown (disabled for now) */}
            <div 
              className="relative left-10 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Full-Screen Modal Container */}
            <div className="fixed inset-0 left-0 xl:left-40 flex items-center z-50 p-4">
              <div className="bg-white rounded-4xl shadow-xl w-[400px] max-h-[1050px] overflow-hidden border border-gray-200">
                {/* Modal Header with Close Button */}
                <div className="flex items-center justify-between p-4">
                  <h2 className="text-[18px] font-semibold text-black text-center flex-1">Store</h2>
                  <button 
                    className="w-8 h-8 flex items-center justify-center rounded-full  hover:bg-gray-200 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <img
                      src={IMAGES.xCircle}
                      alt="close"
                      className="w-5 h-5"
                    />
                  </button>
                </div>

                {/* Search Input */}
                <div className="px-4 pt-3 pb-1">
                  <input
                    type="text"
                    placeholder="Search Stores"
                    className="w-full px-4 py-3 bg-[#F5F5F5] rounded-lg text-[14px] text-gray-600 placeholder-gray-400 border-0 outline-none"
                    // TODO: Add search functionality - filter stores based on input
                    // Backend: Implement debounced search API call
                  />
                </div>

                {/* Scrollable Store List */}
                <div className="max-h-[600px] overflow-y-auto">
                  {/* Popular Stores Section */}
                  <div className="p-4 pt-1 pb-2">
                    <h3 className="text-[14px] text-black mb-4">Popular</h3>
                    {stores.filter((store: StoreOption) => store.type === 'popular').map((store: StoreOption, index: number) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-2 px-2 bg-[#EDEDED] my-[2px] rounded-lg cursor-pointer transition-colors last:rounded-b-2xl first:rounded-t-2xl"
                        onClick={() => {
                          onSelect(store.name);
                          setIsOpen(false);
                          // Backend: Track store selection for analytics
                        }}
                      >
                        <div className="flex items-center flex-1">
                          {/* Store Avatar */}
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

  /**
   * Brand Dropdown Component
   * 
   * Full-screen modal dropdown for brand/manufacturer selection
   * Text-only interface without brand logos for simplicity
   * 
   * @param selected - Currently selected brand name
   * @param brands - Array of brand options with product counts
   * @param onSelect - Callback when user selects a brand
   * 
   * Backend Integration:
   * - Brand data from GET /api/brands?category=phones-tablets
   * - Real-time product counts per brand
   * - Popular brands based on sales or admin curation
   * - Consider adding brand descriptions or specifications
   * 
   * UX Features:
   * - Search functionality for finding specific brands
   * - Popular brands section for discovery
   * - Product counts for each brand
   * - Clean text-only design without logos
   */

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
                    className="w-8 h-8 flex items-center justify-center rounded-full  hover:bg-gray-200 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <img
                      src={IMAGES.xCircle}
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

  /**
   * Lagos State Dropdown Component
   * 
   * Nested dropdown that appears when user clicks "Lagos State" in location dropdown
   * Shows specific areas within Lagos State for more precise location filtering
   * 
   * @param onSelect - Callback when user selects a Lagos area
   * @param onClose - Callback to close the dropdown
   * 
   * Backend Integration:
   * - Area data from GET /api/locations/lagos/areas
   * - Dynamic loading based on parent location
   * - Real-time product counts per area
   * - Consider implementing for other states too
   * 
   * UX Features:
   * - Popular areas shown first
   * - Search functionality
   * - Product counts per area
   * - Smooth transition from main location dropdown
   */
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
              className="w-8 h-8 flex items-center justify-center rounded-full  hover:bg-gray-200 transition-colors"
              onClick={onClose}
            >
              <img
                src={IMAGES.xCircle}
                alt="close"
                className="w-5 h-5"
              />
            </button>
          </div>

          {/* Search Box for Lagos Areas */}
          <div className="px-4 pt-3 pb-1">
            <input
              type="text"
              placeholder="Search location"
              className="w-full px-4 py-3 bg-[#F5F5F5] rounded-lg text-[14px] text-gray-600 placeholder-gray-400 border-0 outline-none"
              // TODO: Add search functionality for Lagos areas
            />
          </div>

          {/* Scrollable Lagos Areas List */}
          <div className="max-h-[600px] overflow-y-auto">
            {/* Popular Lagos Areas */}
            <div className="p-4 pt-1 pb-2">
              <h3 className="text-[14px] text-black mb-4">Popular</h3>
              {lagosAreas.slice(0, 5).map((area: LagosArea, index: number) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 px-2 bg-[#EDEDED] my-[2px] rounded-lg cursor-pointer transition-colors last:rounded-b-2xl first:rounded-t-2xl"
                  onClick={() => {
                    onSelect(area.name);
                    onClose();
                    // Backend: Track area selection for analytics
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

            {/* Other Lagos Areas */}
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

  /**
   * Location Dropdown Component
   * 
   * Main location filter with full-screen modal interface
   * Supports nested dropdowns (Lagos State -> Lagos Areas)
   * 
   * @param selected - Currently selected location
   * @param locations - Array of location options
   * @param onSelect - Callback when user selects a location
   * 
   * Backend Integration:
   * - Location hierarchy data from GET /api/locations
   * - Dynamic loading of sub-locations
   * - Real-time product counts per location
   * - Support for multiple nesting levels
   * 
   * Special Features:
   * - Lagos State triggers nested dropdown
   * - Popular locations section
   * - Search functionality
   * - Product counts per location
   * - Hierarchical navigation
   */

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
                    className="w-8 h-8 flex items-center justify-center rounded-full  hover:bg-gray-200 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <img
                      src={IMAGES. xCircle}
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
<div className="min-h-screen max-w-[1280px] mx-auto bg-[#F9F9F9]">
      
      <TopSellingProducts onProductClick={handleProductClick} />
      
      <AllProducts onProductClick={handleProductClick} />
    </div>


      </div>



    </div>




  );

 
    
  
};

export default PhonesTablets;






