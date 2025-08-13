import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import IMAGES from "../constants";

interface Product {
  id: number;
  name: string;
  image: string;
  store: string;
  salePrice: string;
  originalPrice: string;
  category: string;
  description?: string;
}

interface RecentSearch {
  id: string;
  text: string;
  timestamp: Date;
  type: "text" | "image";
  imageUrl?: string;
}

interface RecentImageSearch {
  id: string;
  imageUrl: string;
  timestamp: Date;
  searchTerm?: string;
}

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [activeTab, setActiveTab] = useState<"Products" | "Stores">("Products");
  const [selectedFilters, setSelectedFilters] = useState({
    location: "",
    store: "",
    category: "",
    review: "",
  });
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [recentSearches, setRecentSearches] = useState<RecentSearch[]>([]);
  const [recentImageSearches, setRecentImageSearches] = useState<
    RecentImageSearch[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  // Sample product data - you can replace this with API calls
  const sampleProducts: Product[] = [
    {
      id: 1,
      name: "Dell Inspiron Laptop",
      image: IMAGES.top1 || "/top1.png",
      store: "Sasha Stores",
      salePrice: "₦2,000,000",
      originalPrice: "₦2,500,000",
      category: "Electronics",
      description: "High-performance laptop for work and gaming",
    },
    {
      id: 2,
      name: "Samsung Galaxy Phone",
      image: IMAGES.top2 || "/top2.png",
      store: "Vee Stores",
      salePrice: "₦800,000",
      originalPrice: "₦1,000,000",
      category: "Electronics",
      description: "Latest Samsung smartphone with advanced features",
    },
    {
      id: 3,
      name: "HP Printer",
      image: IMAGES.top3 || "/top3.png",
      store: "Adam Stores",
      salePrice: "₦150,000",
      originalPrice: "₦200,000",
      category: "Electronics",
      description: "Multifunction printer for home and office use",
    },
    {
      id: 4,
      name: "iPhone 14 Pro",
      image: IMAGES.top4 || "/top4.png",
      store: "Sasha Stores",
      salePrice: "₦1,200,000",
      originalPrice: "₦1,500,000",
      category: "Electronics",
      description: "Latest iPhone with pro camera features",
    },
    {
      id: 5,
      name: "MacBook Pro",
      image: IMAGES.top5 || "/top5.png",
      store: "Caremal Stores",
      salePrice: "₦2,800,000",
      originalPrice: "₦3,200,000",
      category: "Electronics",
      description: "Professional laptop for creative work",
    },
    {
      id: 6,
      name: "Gaming Console",
      image: IMAGES.top6 || "/top6.png",
      store: "Sasha Stores",
      salePrice: "₦600,000",
      originalPrice: "₦750,000",
      category: "Gaming",
      description: "Latest gaming console with 4K support",
    },
    {
      id: 7,
      name: "Women's Dress",
      image: IMAGES.top1 || "/top1.png",
      store: "Lovina Stores",
      salePrice: "₦35,000",
      originalPrice: "₦50,000",
      category: "Fashion",
      description: "Elegant dress for special occasions",
    },
    {
      id: 8,
      name: "iPhone 15",
      image: IMAGES.top2 || "/top2.png",
      store: "Sasha Stores",
      salePrice: "₦1,400,000",
      originalPrice: "₦1,700,000",
      category: "Electronics",
      description: "Latest iPhone model with advanced features",
    },
    {
      id: 9,
      name: "Hisense Television",
      image: IMAGES.top3 || "/top3.png",
      store: "Vee Stores",
      salePrice: "₦180,000",
      originalPrice: "₦250,000",
      category: "Electronics",
      description: "Smart TV with 4K display and streaming capabilities",
    },
    {
      id: 10,
      name: "Office Chair",
      image: IMAGES.top4 || "/top4.png",
      store: "Adam Stores",
      salePrice: "₦45,000",
      originalPrice: "₦65,000",
      category: "Home & Office",
      description: "Ergonomic office chair for productivity",
    },
    {
      id: 11,
      name: "Wireless Headphones",
      image: IMAGES.top5 || "/top5.png",
      store: "Caremal Stores",
      salePrice: "₦85,000",
      originalPrice: "₦120,000",
      category: "Electronics",
      description: "Premium wireless headphones with noise cancellation",
    },
    {
      id: 12,
      name: "Running Shoes",
      image: IMAGES.top6 || "/top6.png",
      store: "Lovina Stores",
      salePrice: "₦25,000",
      originalPrice: "₦35,000",
      category: "Fashion",
      description: "Comfortable running shoes for athletes",
    },
  ];

  // Load recent searches from localStorage on component mount
  useEffect(() => {
    const savedSearches = localStorage.getItem("recentSearches");
    const savedImageSearches = localStorage.getItem("recentImageSearches");

    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    } else {
      // Initialize with some sample recent searches
      const initialSearches: RecentSearch[] = [
        {
          id: "1",
          text: "Iphone 15",
          timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
          type: "text",
        },
        {
          id: "2",
          text: "Womens dress",
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
          type: "text",
        },
        {
          id: "3",
          text: "Hisensense television",
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
          type: "text",
        },
      ];
      setRecentSearches(initialSearches);
      localStorage.setItem("recentSearches", JSON.stringify(initialSearches));
    }

    if (savedImageSearches) {
      setRecentImageSearches(JSON.parse(savedImageSearches));
    }

    // Show all products by default if no search query
    if (searchQuery) {
      performSearch(searchQuery);
    } else {
      // Show all products by default
      setSearchResults(sampleProducts);
    }
  }, []);

  // Perform search function
  const performSearch = (query: string) => {
    setIsLoading(true);

    // Simulate API delay
    setTimeout(() => {
      const results = sampleProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase()) ||
          product.description?.toLowerCase().includes(query.toLowerCase())
      );

      setSearchResults(results);
      setIsLoading(false);

      // Add to recent searches if it's a new search
      if (query && query.trim()) {
        addToRecentSearches(query, "text");
      }
    }, 500);
  };

  // Add search to recent searches
  const addToRecentSearches = (
    searchText: string,
    type: "text" | "image",
    imageUrl?: string
  ) => {
    const newSearch: RecentSearch = {
      id: Date.now().toString(),
      text: searchText,
      timestamp: new Date(),
      type,
      imageUrl,
    };

    const updatedSearches = [
      newSearch,
      ...recentSearches.filter((s) => s.text !== searchText),
    ].slice(0, 10);
    setRecentSearches(updatedSearches);
    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
  };

  // Handle search input
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      performSearch(query);
      // Update URL
      navigate(`/search?q=${encodeURIComponent(query)}`, { replace: true });
    } else {
      // Show all products if no search query
      setSearchResults(sampleProducts);
    }
  };

  // Handle recent search click
  const handleRecentSearchClick = (searchText: string) => {
    setSearchQuery(searchText);
    handleSearch(searchText);
  };

  // Remove recent search
  const removeRecentSearch = (id: string) => {
    const updatedSearches = recentSearches.filter((s) => s.id !== id);
    setRecentSearches(updatedSearches);
    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
  };

  // Handle filter change
  const handleFilterChange = (filterType: string, value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  // Handle add to cart
  const handleAddToCart = (productId: number) => {
    console.log(`Added product ${productId} to cart`);
    // Add your cart logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1080px] mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center  mb-6">
          <h1 className="text-[40px] font-bold text-gray-900">Search Result</h1>

          {/* Tab Buttons */}
          <div className="flex bg-white rounded-lg p-1 ml-50">
            <button
              onClick={() => setActiveTab("Products")}
              className={`px-18 py-4 rounded-lg font-medium transition-colors ${
                activeTab === "Products"
                  ? "bg-red-500 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab("Stores")}
              className={`px-18 py-4 rounded-lg font-medium transition-colors ${
                activeTab === "Stores"
                  ? "bg-red-500 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Stores
            </button>
          </div>
        </div>

        <div className="flex gap-4">
          {/* Left Sidebar */}
          <div className="w-109 space-y-6 rounded-[30px]">
            {/* Recent Search */}
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-4">
                Recent Search
              </h3>
              <div className="space-y-2">
                {recentSearches.slice(0, 5).map((search) => (
                  <div
                    key={search.id}
                    className="flex items-center justify-between group"
                  >
                    <button
                      onClick={() => handleRecentSearchClick(search.text)}
                      className="flex-1 text-left bg-[#B9191933]  px-5 py-3 rounded-full flex justify-between text-sm hover:bg-red-200 transition-colors"
                    >
                      {search.text}
                      <button
                        onClick={() => removeRecentSearch(search.id)}
                        className=" z-10 text-gray-400 hover:text-red-500 cursor-pointer p-0 "
                      >
                        <img
                          src={IMAGES.cross}
                          className="w-[14px] h-[14px]"
                          alt=""
                        />
                      </button>
                    </button>
                  </div>
                ))}
                <h3 className="font-semibold text-gray-900 mt-5 mb-2">
                  Recent Search Categories
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Home & Office", "Fashion", "Electronics"].map(
                    (category) => (
                      <button
                        key={category}
                        onClick={() => handleSearch(category)}
                        className="bg-[#B9191933]  px-5 py-2 rounded-full text-sm hover:bg-red-200 transition-colors"
                      >
                        {category}
                      </button>
                    )
                  )}
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mt-5 mb-3">
                Recent Image Search
              </h3>
              <div className="grid grid-cols-4 gap-3 ">
                {recentImageSearches.length > 0
                  ? recentImageSearches.slice(0, 8).map((imageSearch) => (
                      <div
                        key={imageSearch.id}
                        className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-80"
                      >
                        <img
                          src={imageSearch.imageUrl}
                          alt="Recent search"
                          className="w-25 h-25 object-cover"
                          onClick={() =>
                            imageSearch.searchTerm &&
                            handleSearch(imageSearch.searchTerm)
                          }
                        />
                      </div>
                    ))
                  : // Sample recent image searches
                    [IMAGES.top1, IMAGES.top2, IMAGES.top3, IMAGES.top4].map(
                      (img, index) => (
                        <div
                          key={index}
                          className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-80"
                        >
                          <img
                            src={img || `/top${index + 1}.png`}
                            alt="Recent search"
                            className="w-25 h-25 object-cover"
                          />
                        </div>
                      )
                    )}
              </div>
            </div>

            

            
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Filters Section */}
            <div className=" rounded-lg  mb-6">
              <div className="flex gap-4">
                {/* Location Filter */}
                <div className="flex-1 relative">
                  <select
                    value={selectedFilters.location}
                    onChange={(e) => handleFilterChange("location", e.target.value)}
                    className="w-full bg-gray-100 border-0 rounded-lg px-4 py-3 pr-10 text-sm focus:outline-none  appearance-none cursor-pointer"
                  >
                    <option value="">Location</option>
                    <option value="lagos">Lagos</option>
                    <option value="abuja">Abuja</option>
                    <option value="kano">Kano</option>
                    <option value="ibadan">Ibadan</option>
                    <option value="port-harcourt">Port Harcourt</option>
                  </select>
                  <img
                    src={IMAGES.dropdown}
                    alt="dropdown"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
                  />
                </div>

                {/* Store Filter */}
                <div className="flex-1 relative">
                  <select
                    value={selectedFilters.store}
                    onChange={(e) => handleFilterChange("store", e.target.value)}
                    className="w-full bg-gray-100 border-0 rounded-lg px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 appearance-none cursor-pointer"
                  >
                    <option value="">Store</option>
                    <option value="sasha-stores">Sasha Stores</option>
                    <option value="vee-stores">Vee Stores</option>
                    <option value="adam-stores">Adam Stores</option>
                    <option value="caremal-stores">Caremal Stores</option>
                    <option value="lovina-stores">Lovina Stores</option>
                  </select>
                  <img
                    src={IMAGES.dropdown}
                    alt="dropdown"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex-1 relative">
                  <select
                    value={selectedFilters.category}
                    onChange={(e) => handleFilterChange("category", e.target.value)}
                    className="w-full bg-gray-100 border-0 rounded-lg px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 appearance-none cursor-pointer"
                  >
                    <option value="">Category</option>
                    <option value="electronics">Electronics</option>
                    <option value="fashion">Fashion</option>
                    <option value="gaming">Gaming</option>
                    <option value="home-office">Home & Office</option>
                  </select>
                  <img
                    src={IMAGES.dropdown}
                    alt="dropdown"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
                  />
                </div>

                {/* Review Filter */}
                <div className="flex-1 relative">
                  <select
                    value={selectedFilters.review}
                    onChange={(e) => handleFilterChange("review", e.target.value)}
                    className="w-full bg-gray-100 border-0 rounded-lg px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 appearance-none cursor-pointer"
                  >
                    <option value="">Review</option>
                    <option value="5">5 Stars</option>
                    <option value="4">4+ Stars</option>
                    <option value="3">3+ Stars</option>
                    <option value="2">2+ Stars</option>
                    <option value="1">1+ Stars</option>
                  </select>
                  <img
                    src={IMAGES.dropdown}
                    alt="dropdown"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
                  />
                </div>
              </div>
            </div>

            {/* Loading State */}
            {isLoading && (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
              </div>
            )}

            {/* Search Results or All Products */}
            {!isLoading && (
              <>
                {searchResults.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {searchResults.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={handleAddToCart}
                      />
                    ))}
                  </div>
                ) : searchQuery ? (
                  // No Results for search query
                  <div className="text-center py-12">
                    <div className="text-gray-500 text-lg mb-2">
                      No products found for "{searchQuery}"
                    </div>
                    <div className="text-gray-400 text-sm">
                      Try searching with different keywords
                    </div>
                  </div>
                ) : (
                  // Default state - show all products
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sampleProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={handleAddToCart}
                      />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
