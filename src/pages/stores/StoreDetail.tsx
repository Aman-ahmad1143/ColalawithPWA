import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { storesData, formatRating } from "./storesData";
import IMAGES from "../../constants";

// Sample product data for the store
const sampleProducts = [
  {
    id: "1",
    name: "Dell Inspiron Laptop",
    price: "₦2,000,000",
    originalPrice: "₦2,500,000",
    image: "/Laptop.png",
    rating: 4.8,
    isSponsored: true,
  },
  {
    id: "2", 
    name: "Dell Inspiron Laptop",
    price: "₦2,000,000",
    originalPrice: "₦2,500,000",
    image: "/Laptop.png",
    rating: 4.5,
    isSponsored: false,
  },
  {
    id: "3",
    name: "Dell Inspiron Laptop", 
    price: "₦2,000,000",
    originalPrice: "₦2,500,000",
    image: "/Laptop.png",
    rating: 4.8,
    isSponsored: false,
  },
  {
    id: "4",
    name: "Dell Inspiron Laptop",
    price: "₦2,000,000", 
    originalPrice: "₦2,500,000",
    image: "/Laptop.png",
    rating: 4.5,
    isSponsored: false,
  },
  {
    id: "5",
    name: "Dell Inspiron Laptop",
    price: "₦2,000,000",
    originalPrice: "₦2,500,000", 
    image: "/Laptop.png",
    rating: 4.8,
    isSponsored: false,
  },
  {
    id: "6",
    name: "Dell Inspiron Laptop",
    price: "₦2,000,000",
    originalPrice: "₦2,500,000",
    image: "/Laptop.png", 
    rating: 4.5,
    isSponsored: false,
  },
];

const StoreDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState("products");
  const [searchQuery, setSearchQuery] = useState("");

  // Find the store by ID
  const store = storesData.find(s => s.id === id);

  if (!store) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Store Not Found</h2>
          <p className="text-gray-600">The store you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Breadcrumb */}
        <div className="px-4 py-4">
          <div className="flex items-center text-sm text-gray-500">
            <span>Stores</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{store.name}</span>
          </div>
        </div>

        <div className="flex gap-6 px-4">
          {/* Left Side - Store Info */}
          <div className="w-80 flex-shrink-0">
            
            {/* Store Header Card */}
            <div className="bg-white rounded-2xl overflow-hidden mb-6">
              {/* Store Cover Image */}
              <div className="relative h-48">
                <img 
                  src={store.image} 
                  alt={store.name}
                  className="w-full h-full object-cover"
                />
                {/* Back Button */}
                <button className="absolute top-4 left-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                {/* Share Button */}
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                </button>
              </div>

              {/* Store Info */}
              <div className="p-6">
                {/* Store Avatar and Basic Info */}
                <div className="flex items-start gap-4 mb-4">
                  <img 
                    src={store.avatar} 
                    alt={store.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white -mt-8"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h1 className="text-xl font-bold text-gray-900">{store.name}</h1>
                      <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                        <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Status */}
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-green-600">Open Now - 07:00AM</span>
                      <span className="text-sm text-gray-500">08:00PM</span>
                    </div>
                    
                    {/* Contact Info */}
                    <div className="space-y-1 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>sashastores@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>07012545789</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{store.location}</span>
                        <button className="text-blue-600 text-xs underline">View Store Addresses</button>
                      </div>
                    </div>

                    {/* Categories */}
                    <div className="flex gap-2 mb-4">
                      {store.categories.map((category, index) => (
                        <span
                          key={index}
                          className={`px-2 py-1 text-xs rounded-full ${
                            category === "Electronics"
                              ? "bg-blue-100 text-blue-600"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          {category}
                        </span>
                      ))}
                    </div>

                    {/* Follow Button */}
                    <button className="w-full bg-red-500 text-white py-2 rounded-lg font-medium hover:bg-red-600 transition-colors">
                      Follow
                    </button>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg mb-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-lg font-bold text-gray-900">100</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                      <span className="text-lg font-bold text-gray-900">500</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      <img src={IMAGES.starFilled} alt="Star" className="w-4 h-4" />
                      <span className="text-lg font-bold text-gray-900">{formatRating(store.rating)}</span>
                    </div>
                  </div>
                </div>

                {/* New on this coming morning */}
                <div className="bg-red-500 text-white p-3 rounded-lg text-center mb-4">
                  <p className="text-sm font-medium">New on this coming morning</p>
                </div>
              </div>
            </div>

            {/* Promotional Banner */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 text-white mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold mb-1">Shop with ease on</h3>
                  <h2 className="text-xl font-bold mb-2">Sasha Stores</h2>
                  <p className="text-sm opacity-90 mb-3">
                    Experience a variety of choices for your retail or wholesale products
                  </p>
                  <button className="bg-white text-red-500 px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors">
                    Shop Now
                  </button>
                </div>
                <div className="ml-4">
                  <img src="/shopping-bag.png" alt="Shopping" className="w-20 h-20 opacity-80" />
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mb-4">
              <button className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </button>
              <button className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </button>
              <button className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition-colors">
                Call
              </button>
              <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Chat
              </button>
              <button className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors">
                Leave a store review
              </button>
            </div>
          </div>

          {/* Right Side - Products */}
          <div className="flex-1">
            {/* Tabs and Search */}
            <div className="bg-white rounded-2xl p-6 mb-6">
              {/* Tabs */}
              <div className="flex gap-6 mb-6">
                <button
                  onClick={() => setActiveTab("products")}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === "products"
                      ? "bg-red-500 text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Products
                </button>
                <button
                  onClick={() => setActiveTab("socialFeed")}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === "socialFeed"
                      ? "bg-red-500 text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Social Feed
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === "reviews"
                      ? "bg-red-500 text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Reviews
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search store products"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-100 border-0 rounded-xl px-4 py-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sampleProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  {/* Product Image */}
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    {product.isSponsored && (
                      <div className="absolute top-2 left-2">
                        <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded-full font-medium">
                          Sponsored
                        </span>
                      </div>
                    )}
                    {/* Store Badge */}
                    <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                      <img src={store.avatar} alt={store.name} className="w-4 h-4 rounded-full" />
                      <span className="text-white text-xs">{store.name}</span>
                    </div>
                    {/* Rating */}
                    <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                      <img src={IMAGES.starFilled} alt="Star" className="w-3 h-3" />
                      <span className="text-white text-xs">{formatRating(product.rating)}</span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                    
                    {/* Price */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg font-bold text-gray-900">{product.price}</span>
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                    </div>

                    {/* Rating Bar */}
                    <div className="flex gap-1 mb-3">
                      <div className="flex-1 bg-yellow-400 h-1 rounded"></div>
                      <div className="flex-1 bg-yellow-400 h-1 rounded"></div>
                      <div className="flex-1 bg-yellow-400 h-1 rounded"></div>
                      <div className="flex-1 bg-yellow-400 h-1 rounded"></div>
                      <div className="flex-1 bg-gray-200 h-1 rounded"></div>
                    </div>

                    {/* Add to Cart Button */}
                    <button className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 py-2 rounded-lg transition-colors">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293A1 1 0 006 16v2a1 1 0 001 1h11M16 20a2 2 0 100-4 2 2 0 000 4zM8 20a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreDetail;
