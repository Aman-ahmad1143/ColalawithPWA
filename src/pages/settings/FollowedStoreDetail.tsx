import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { storesData, formatRating } from "../stores/storesData";
import IMAGES from "../../constants";
import ProductCard from "../../components/ProductCard";

// Social Feed Post Interface
interface SocialFeedPost {
  id: string;
  author: string;
  avatar: string;
  timestamp: string;
  caption: string;
  image: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
}

// Generate social feed posts for store
const generateStoreSocialFeed = (
  storeName: string,
  storeAvatar: string
): SocialFeedPost[] => {
  return [
    {
      id: "1",
      author: storeName,
      avatar: storeAvatar,
      timestamp: "30 min ago",
      caption: "Get this phone at a cheap price for a limited period",
      image: IMAGES.feedPhone || "/top1.png",
      likes: 500,
      comments: 26,
      shares: 26,
      isLiked: false,
    },
    {
      id: "2",
      author: storeName,
      avatar: storeAvatar,
      timestamp: "2h ago",
      caption:
        "New arrivals in store! Check out our latest collection of premium products with amazing deals.",
      image: IMAGES.feedPhone || "/top2.png",
      likes: 320,
      comments: 18,
      shares: 12,
      isLiked: false,
    },
    {
      id: "3",
      author: storeName,
      avatar: storeAvatar,
      timestamp: "1 day ago",
      caption:
        "Special weekend offer! Limited time only. Don't miss out on these incredible discounts.",
      image: IMAGES.feedPhone || "/top3.png",
      likes: 780,
      comments: 45,
      shares: 32,
      isLiked: true,
    },
  ];
};

// Generate store reviews data
const generateStoreReviews = (storeName: string, storeAvatar: string) => {
  return [
    {
      id: "1",
      author: "Adam Sandler",
      avatar: IMAGES.adam,
      timestamp: "07-16-25/05:33AM",
      rating: 5,
      text: "The store is great",
      replyCount: 0,
      replies: [],
    },
    {
      id: "2",
      author: "Adam Sandler",
      avatar: IMAGES.adam,
      timestamp: "07-16-25/05:33AM",
      rating: 5,
      text: "Really great product, i bought from your store",
      replyCount: 1,
      replies: [
        {
          id: "reply-1",
          author: storeName,
          avatar: storeAvatar,
          timestamp: "07-16-25/05:33AM",
          text: "Thanks for the review",
        },
      ],
    },
  ];
};

// Generate services based on store categories
const generateStoreServices = (
  services: string[],
  storeName: string,
  categories: string[]
) => {
  const serviceImages = [
    IMAGES.services1,
    IMAGES.services2,
    IMAGES.services3,
    IMAGES.services4,
    IMAGES.services5,
    IMAGES.services6,
    IMAGES.services7,
    IMAGES.services8,
  ];

  return services.map((serviceName, index) => {
    const serviceImage =
      serviceImages[index % serviceImages.length] || IMAGES.services1;

    // Generate price based on service type and store categories
    let basePrice = 50000 + Math.floor(Math.random() * 150000); // Base: 50k - 200k

    if (
      serviceName.toLowerCase().includes("installation") ||
      serviceName.toLowerCase().includes("maintenance")
    ) {
      basePrice = basePrice * 0.6;
    }
    if (
      categories.includes("Electronics") ||
      categories.includes("Computing")
    ) {
      basePrice = basePrice * 1.3;
    }

    const originalPrice = Math.round(basePrice * 1.3);

    return {
      id: index + 1000, // Offset to avoid conflicts with products
      name: serviceName,
      salePrice: `₦${basePrice.toLocaleString()}`,
      originalPrice: `₦${originalPrice.toLocaleString()}`,
      image: serviceImage,
      store: storeName,
    };
  });
};

// Generate sample products based on store category
const generateStoreProducts = (
  storeName: string,
  categories: string[]
) => {
  const baseProducts = [
    {
      id: 1,
      name: "Dell Inspiron Laptop",
      salePrice: "₦2,000,000",
      originalPrice: "₦2,500,000",
      image: "/top1.png",
    },
    {
      id: 2,
      name: "Samsung Galaxy Phone",
      salePrice: "₦800,000",
      originalPrice: "₦1,000,000",
      image: "/top2.png",
    },
    {
      id: 3,
      name: "HP Printer",
      salePrice: "₦150,000",
      originalPrice: "₦200,000",
      image: "/top3.png",
    },
    {
      id: 4,
      name: "iPhone 14 Pro",
      salePrice: "₦1,200,000",
      originalPrice: "₦1,500,000",
      image: "/top4.png",
    },
    {
      id: 5,
      name: "MacBook Air",
      salePrice: "₦1,800,000",
      originalPrice: "₦2,200,000",
      image: "/top5.png",
    },
    {
      id: 6,
      name: "Sony Headphones",
      salePrice: "₦45,000",
      originalPrice: "₦65,000",
      image: "/top6.png",
    },
  ];

  // Customize products based on store categories
  if (categories.includes("Beauty") || categories.includes("Fragrances")) {
    return [
      {
        ...baseProducts[0],
        name: "Premium Perfume Set",
        salePrice: "₦25,000",
        originalPrice: "₦35,000",
      },
      {
        ...baseProducts[1],
        name: "Skincare Bundle",
        salePrice: "₦18,000",
        originalPrice: "₦25,000",
      },
      {
        ...baseProducts[2],
        name: "Makeup Kit Pro",
        salePrice: "₦35,000",
        originalPrice: "₦50,000",
      },
      {
        ...baseProducts[3],
        name: "Hair Care Set",
        salePrice: "₦20,000",
        originalPrice: "₦28,000",
      },
      {
        ...baseProducts[4],
        name: "Body Lotion Collection",
        salePrice: "₦15,000",
        originalPrice: "₦22,000",
      },
      {
        ...baseProducts[5],
        name: "Facial Cleanser",
        salePrice: "₦12,000",
        originalPrice: "₦20,000",
      },
    ].map((product) => ({ ...product, store: storeName }));
  }

  if (categories.includes("Grocery") || categories.includes("Food")) {
    return [
      {
        ...baseProducts[0],
        name: "Organic Rice 10kg",
        salePrice: "₦8,000",
        originalPrice: "₦10,000",
      },
      {
        ...baseProducts[1],
        name: "Fresh Vegetables",
        salePrice: "₦3,500",
        originalPrice: "₦4,500",
      },
      {
        ...baseProducts[2],
        name: "Dairy Products",
        salePrice: "₦2,500",
        originalPrice: "₦3,200",
      },
      {
        ...baseProducts[3],
        name: "Meat Package",
        salePrice: "₦15,000",
        originalPrice: "₦18,000",
      },
      {
        ...baseProducts[4],
        name: "Fruits Basket",
        salePrice: "₦5,000",
        originalPrice: "₦6,500",
      },
      {
        ...baseProducts[5],
        name: "Spices Set",
        salePrice: "₦4,000",
        originalPrice: "₦5,500",
      },
    ].map((product) => ({ ...product, store: storeName }));
  }

  if (categories.includes("Home") || categories.includes("Furniture")) {
    return [
      {
        ...baseProducts[0],
        name: "Sofa Set",
        salePrice: "₦250,000",
        originalPrice: "₦320,000",
      },
      {
        ...baseProducts[1],
        name: "Dining Table",
        salePrice: "₦80,000",
        originalPrice: "₦120,000",
      },
      {
        ...baseProducts[2],
        name: "Bed Frame",
        salePrice: "₦65,000",
        originalPrice: "₦85,000",
      },
      {
        ...baseProducts[3],
        name: "Wardrobe",
        salePrice: "₦90,000",
        originalPrice: "₦130,000",
      },
      {
        ...baseProducts[4],
        name: "Office Chair",
        salePrice: "₦35,000",
        originalPrice: "₦45,000",
      },
      {
        ...baseProducts[5],
        name: "Coffee Table",
        salePrice: "₦25,000",
        originalPrice: "₦35,000",
      },
    ].map((product) => ({ ...product, store: storeName }));
  }

  if (categories.includes("Sports") || categories.includes("Fitness")) {
    return [
      {
        ...baseProducts[0],
        name: "Treadmill",
        salePrice: "₦180,000",
        originalPrice: "₦250,000",
      },
      {
        ...baseProducts[1],
        name: "Dumbbells Set",
        salePrice: "₦25,000",
        originalPrice: "₦35,000",
      },
      {
        ...baseProducts[2],
        name: "Yoga Mat Premium",
        salePrice: "₦8,000",
        originalPrice: "₦12,000",
      },
      {
        ...baseProducts[3],
        name: "Exercise Bike",
        salePrice: "₦120,000",
        originalPrice: "₦160,000",
      },
      {
        ...baseProducts[4],
        name: "Protein Supplements",
        salePrice: "₦15,000",
        originalPrice: "₦20,000",
      },
      {
        ...baseProducts[5],
        name: "Fitness Tracker",
        salePrice: "₦35,000",
        originalPrice: "₦45,000",
      },
    ].map((product) => ({ ...product, store: storeName }));
  }

  if (categories.includes("Gaming")) {
    return [
      {
        ...baseProducts[0],
        name: "Gaming Console",
        salePrice: "₦450,000",
        originalPrice: "₦550,000",
      },
      {
        ...baseProducts[1],
        name: "Gaming Headset",
        salePrice: "₦35,000",
        originalPrice: "₦45,000",
      },
      {
        ...baseProducts[2],
        name: "Mechanical Keyboard",
        salePrice: "₦25,000",
        originalPrice: "₦35,000",
      },
      {
        ...baseProducts[3],
        name: "Gaming Mouse",
        salePrice: "₦15,000",
        originalPrice: "₦22,000",
      },
      {
        ...baseProducts[4],
        name: "Game Controllers",
        salePrice: "₦28,000",
        originalPrice: "₦38,000",
      },
      {
        ...baseProducts[5],
        name: "Gaming Chair",
        salePrice: "₦85,000",
        originalPrice: "₦120,000",
      },
    ].map((product) => ({ ...product, store: storeName }));
  }

  // Default Electronics/Computing products
  return baseProducts.map((product) => ({ ...product, store: storeName }));
};

// Helper function to get category colors
const getCategoryColor = (category: string) => {
  const colorMap: Record<string, string> = {
    Electronics: "bg-[#0000FF33] text-[#0000FF] border-[#0000FF]",
    Phones: "bg-[#FF000033] text-[#FF0000] border-[#FF0000]",
    Computing: "bg-[#00FFFF33] text-[#00FFFF] border-[#00FFFF]",
    Fashion: "bg-[#FF69B433] text-[#FF69B4] border-[#FF69B4]",
    Clothing: "bg-[#FF69B433] text-[#FF69B4] border-[#FF69B4]",
    Accessories: "bg-[#DDA0DD33] text-[#DDA0DD] border-[#DDA0DD]",
    Beauty: "bg-[#FFB6C133] text-[#FFB6C1] border-[#FFB6C1]",
    Fragrances: "bg-[#E6E6FA33] text-[#E6E6FA] border-[#E6E6FA]",
    Grocery: "bg-[#32CD3233] text-[#32CD32] border-[#32CD32]",
    Food: "bg-[#FFA50033] text-[#FFA500] border-[#FFA500]",
    Home: "bg-[#DEB88733] text-[#DEB887] border-[#DEB887]",
    Furniture: "bg-[#8B451333] text-[#8B4513] border-[#8B4513]",
    Sports: "bg-[#00800033] text-[#008000] border-[#008000]",
    Fitness: "bg-[#FF634733] text-[#FF6347] border-[#FF6347]",
    Gaming: "bg-[#80008033] text-[#800080] border-[#800080]",
  };
  return colorMap[category] || "bg-gray-200 text-gray-700 border-gray-400";
};

const FollowedStoreDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("products");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState({
    category: "",
    brand: "",
    location: "",
  });
  const [socialPosts, setSocialPosts] = useState<SocialFeedPost[]>([]);
  const [showStoreAddresses, setShowStoreAddresses] = useState(false);

  // Find the store by ID
  const store = storesData.find((s) => s.id === id);

  // Generate products based on store data
  const storeProducts = store
    ? generateStoreProducts(store.name, store.categories)
    : [];

  // Generate services based on store data
  const storeServices = store
    ? generateStoreServices(store.services, store.name, store.categories)
    : [];

  // Generate social feed posts
  const storeSocialPosts = store
    ? generateStoreSocialFeed(store.name, store.avatar)
    : [];

  // Generate store reviews
  const storeReviews = store
    ? generateStoreReviews(store.name, store.avatar)
    : [];

  // Initialize social posts
  React.useEffect(() => {
    if (store) {
      setSocialPosts(storeSocialPosts);
    }
  }, [store]);

  // Handle social post like
  const handleSocialLike = (postId: string) => {
    setSocialPosts(
      socialPosts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            isLiked: !post.isLiked,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          };
        }
        return post;
      })
    );
  };

  // Handle back navigation - go back to followed stores
  const handleBack = () => {
    navigate("/settings/followed-stores");
  };

  // Handle add to cart
  const handleAddToCart = (productId: number) => {
    console.log(`Added product ${productId} to cart from ${store?.name}`);
    // Add your cart logic here
  };

  // Handle filter changes
  const handleFilterChange = (filterType: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  // Clear all filters
  const handleClearFilters = () => {
    setFilters({
      category: "",
      brand: "",
      location: "",
    });
  };

  // Apply filters (you can add filtering logic here)
  const handleApplyFilters = () => {
    console.log("Applying filters:", filters);
    setShowFilter(false);
  };

  if (!store) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Store Not Found
          </h2>
          <p className="text-gray-600">
            The store you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1080px] mx-auto pt-6">
        {/* Breadcrumb */}
        <div className="px-4 py-4">
          <div className="flex items-center text-[25px] text-gray-500 mb-2">
            <span>Followed Stores</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{store.name}</span>
          </div>
        </div>

        <div className="flex gap-6 px-4">
          {/* Left Side - Store Info */}
          <div className="max-w-108 ">
            {/* Store Header Card */}
            <div className=" rounded-[20px] overflow-hidden mb-6">
              {/* Store Cover Image */}
              <div className="relative ">
                <img
                  src={store.image}
                  alt={store.name}
                  className="w-[430px] h-[145px] rounded-[20px] object-cover"
                />
                {/* Back Button */}
                <button
                  onClick={handleBack}
                  className="absolute top-4 left-4  w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <img src={IMAGES.heart} alt="Like" className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Store Info Card */}
            <div className="bg-white rounded-[20px] p-6 mb-6">
              {/* Store Avatar and Basic Info */}
              <div className="flex items-start gap-4 mb-6">
                <img
                  src={store.avatar}
                  alt={store.name}
                  className="w-[70px] h-[70px] rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h1 className="text-[25px] font-bold text-gray-900">
                      {store.name}
                    </h1>
                    {store.isVerified && (
                      <img
                        src={IMAGES.verification}
                        alt="Verified"
                        className="w-6 h-6"
                      />
                    )}
                  </div>
                  <p className="text-gray-600 mb-2">{store.email}</p>
                  <p className="text-gray-600 mb-2 flex items-center">
                    <img
                      src={IMAGES.phone}
                      alt="Phone"
                      className="w-4 h-4 mr-2"
                    />
                    {store.phone} | {store.location}
                  </p>
                  <p className="text-gray-700">{store.description}</p>
                </div>
              </div>

              {/* Store Categories */}
              <div className="flex flex-wrap gap-2 mb-6">
                {store.categories.map((category, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 text-sm rounded-full border ${getCategoryColor(
                      category
                    )}`}
                  >
                    {category}
                  </span>
                ))}
              </div>

              {/* Store Stats */}
              <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">
                    {store.qtySold}
                  </div>
                  <div className="text-sm text-gray-600">Items Sold</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">
                    {store.followers}
                  </div>
                  <div className="text-sm text-gray-600">Followers</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <img
                      src={IMAGES.starFilled}
                      alt="Star"
                      className="w-5 h-5 mr-1"
                    />
                    <span className="text-2xl font-bold text-gray-900">
                      {store.rating}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-[#E53E3E] text-white py-3 rounded-lg font-medium hover:bg-red-600 transition-colors">
                  Follow Store
                </button>
                <div className="flex gap-3">
                  <button className="flex-1 bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
                    <img src={IMAGES.phone} alt="Call" className="w-5 h-5" />
                    Call
                  </button>
                  <button className="flex-1 bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                    <img src={IMAGES.message} alt="Chat" className="w-5 h-5" />
                    Chat
                  </button>
                </div>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                  Leave a store review
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Products/Services/Posts */}
          <div className="flex-1">
            {/* Tab Navigation */}
            <div className="bg-white rounded-[20px] p-6">
              <div className="flex gap-6 mb-6 border-b">
                {["products", "services", "posts", "reviews"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 px-2 font-medium capitalize ${
                      activeTab === tab
                        ? "text-[#E53E3E] border-b-2 border-[#E53E3E]"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Search and Filter Bar */}
              <div className="flex gap-4 mb-6">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search store products"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E53E3E]/20 focus:border-[#E53E3E]"
                  />
                </div>
                <button
                  onClick={() => setShowFilter(!showFilter)}
                  className="px-6 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors flex items-center gap-2"
                >
                  <img src={IMAGES.funnel} alt="Filter" className="w-4 h-4" />
                  Filter
                </button>
              </div>

              {/* Tab Content */}
              <div className="space-y-6">
                {activeTab === "products" && (
                  <div className="grid grid-cols-3 gap-6">
                    {storeProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={() => handleAddToCart(product.id)}
                      />
                    ))}
                  </div>
                )}

                {activeTab === "services" && (
                  <div className="grid grid-cols-3 gap-6">
                    {storeServices.map((service) => (
                      <ProductCard
                        key={service.id}
                        product={service}
                        onAddToCart={() => handleAddToCart(service.id)}
                      />
                    ))}
                  </div>
                )}

                {activeTab === "posts" && (
                  <div className="space-y-6">
                    {socialPosts.map((post) => (
                      <div
                        key={post.id}
                        className="border border-gray-200 rounded-2xl overflow-hidden"
                      >
                        {/* Post Header */}
                        <div className="flex items-center justify-between p-4">
                          <div className="flex items-center space-x-3">
                            <img
                              src={post.avatar}
                              alt={post.author}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                              <h3 className="font-semibold text-gray-900">
                                {post.author}
                              </h3>
                              <p className="text-sm text-gray-500">
                                {store.location} • {post.timestamp}
                              </p>
                            </div>
                          </div>
                          <button className="p-2 hover:bg-gray-100 rounded-full">
                            <svg
                              className="w-5 h-5 text-gray-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                          </button>
                        </div>

                        {/* Post Caption */}
                        <div className="px-4 pb-3">
                          <p className="text-gray-800">{post.caption}</p>
                        </div>

                        {/* Post Image */}
                        <div className="relative">
                          <img
                            src={post.image}
                            alt="Post"
                            className="w-full h-96 object-cover"
                          />
                        </div>

                        {/* Post Actions */}
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-4">
                              <button
                                onClick={() => handleSocialLike(post.id)}
                                className="flex items-center space-x-2"
                              >
                                <svg
                                  className={`w-6 h-6 ${
                                    post.isLiked
                                      ? "text-red-500 fill-current"
                                      : "text-gray-600"
                                  }`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                  />
                                </svg>
                                <span className="text-sm font-medium">
                                  {post.likes}
                                </span>
                              </button>

                              <button className="flex items-center space-x-2">
                                <svg
                                  className="w-6 h-6 text-gray-600"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                  />
                                </svg>
                                <span className="text-sm font-medium">
                                  {post.comments}
                                </span>
                              </button>

                              <button className="flex items-center space-x-2">
                                <svg
                                  className="w-6 h-6 text-gray-600"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                                  />
                                </svg>
                                <span className="text-sm font-medium">
                                  {post.shares}
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "reviews" && (
                  <div className="space-y-6">
                    {storeReviews.map((review) => (
                      <div
                        key={review.id}
                        className="border border-gray-200 rounded-lg p-6"
                      >
                        <div className="flex items-start gap-4">
                          <img
                            src={review.avatar}
                            alt={review.author}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-gray-900">
                                {review.author}
                              </h4>
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <img
                                    key={i}
                                    src={IMAGES.starFilled}
                                    alt="Star"
                                    className={`w-4 h-4 ${
                                      i < review.rating
                                        ? "opacity-100"
                                        : "opacity-30"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-sm text-gray-500 mb-2">
                              {review.timestamp}
                            </p>
                            <p className="text-gray-700 mb-4">{review.text}</p>
                            
                            {/* Store replies */}
                            {review.replies.map((reply) => (
                              <div
                                key={reply.id}
                                className="bg-gray-50 p-4 rounded-lg mt-4"
                              >
                                <div className="flex items-start gap-3">
                                  <img
                                    src={reply.avatar}
                                    alt={reply.author}
                                    className="w-8 h-8 rounded-full object-cover"
                                  />
                                  <div>
                                    <div className="flex items-center gap-2 mb-1">
                                      <h5 className="font-medium text-sm text-gray-900">
                                        {reply.author}
                                      </h5>
                                      <span className="text-xs bg-[#E53E3E] text-white px-2 py-0.5 rounded">
                                        Store Owner
                                      </span>
                                    </div>
                                    <p className="text-xs text-gray-500 mb-2">
                                      {reply.timestamp}
                                    </p>
                                    <p className="text-sm text-gray-700">
                                      {reply.text}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowedStoreDetail;
