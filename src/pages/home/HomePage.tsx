import React, { useState } from 'react';
import { categories, flashSalesProducts, stores, featuredProducts } from './homeData';
import IMAGES from '../../constants';

const Home: React.FC = () => {
  const [followStates, setFollowStates] = useState<{[key: number]: boolean}>({});

  const toggleFollow = (storeId: number) => {
    setFollowStates(prev => ({
      ...prev,
      [storeId]: !prev[storeId]
    }));
  };

  const renderStars = (rating: number) => {
    const stars: React.ReactElement[] = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <img key={i} src={IMAGES.starFilled} alt="star" className="w-4 h-4" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <img key="half" src={IMAGES.star} alt="half-star" className="w-4 h-4" />
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <img key={`empty-${i}`} src={IMAGES.star} alt="empty-star" className="w-4 h-4 opacity-30" />
      );
    }

    return stars;
  };

  return (
    <div className="min-h-screen max-w-[1280px] mx-auto bg-[#E0E0E0]">
    

      {/* Categories Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="bg-[#E53E3E] text-white px-4 py-3 rounded-lg flex items-center justify-between mb-4">
            <h2 className="text-sm font-medium">Categories</h2>
            <a href="/categories" className="font-medium text-sm hover:underline">View All</a>
          </div>

          <div className="grid grid-cols-5 grid-rows-2 gap-3 h-70 ">
            {/* Main Category - Shop with ease on Colala */}
            <div className="col-span-2 row-span-2 bg-gradient-to-br from-[#921313] via-[#921313] to-[#921313] rounded-3xl p-6 text-white relative overflow-hidden">
              {/* Background decorative large circle */}
              <div className="absolute left-0 bottom-0 w-85 h-65 bg-[#F22C2C] opacity-30 rounded-full transform -translate-x-20 translate-y-20"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-base text-[#FFFFFF] font-normal leading-tight">Shop with ease on</h3>
                  <h2 className="text-3xl text-[#FFFFFF] font-bold italic">Colala</h2>
                  <p className="text-xs opacity-80 leading-relaxed pr-4 mb-0.5">Shop from a variety of stores for your </p>
                    <p className="text-xs opacity-80 leading-relaxed pr-4 ">retail or wholesale products</p>
                </div>
                <button className="bg-white text-[#E53E3E] px-6 py-3 rounded-xl text-sm font-bold w-fit hover:bg-gray-50 transition-colors shadow-md">
                  Shop Now
                </button>
              </div>
              
              {/* Shopping woman image */}
              <div className="absolute right-4 top-6 bottom-6">
                <img 
                  src={IMAGES.maincategory} 
                  alt="Shopping woman" 
                  className="w-48 h-full object-cover rounded-3xl shadow-xl"
                />
              </div>
            </div>

            {/* Other Categories - Top Row */}
            {categories.slice(0, 3).map((category) => (
              <div
                key={category.id}
                className="rounded-3xl p-4 text-left hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between h-full"
                style={{ backgroundColor: category.color }}
              >
                <div className="flex  h-full justify-between">
                  <div>
                    <h3 className="text-base font-bold text-gray-900 leading-tight mb-2">{category.name.split(' ')[0]}</h3>
                    {category.name.split(' ').length > 1 && (
                      <h4 className="text-sm font-medium text-gray-700 leading-tight">& {category.name.split(' ').slice(1).join(' ')}</h4>
                    )}
                  </div>
                      <img src={category.image} alt={category.name} className="w-28 h-28 object-contain" />
                  
                </div>
              </div>
            ))}

            {/* Other Categories - Bottom Row */}
            {categories.slice(3, 6).map((category) => (
              <div
                key={category.id}
                className="rounded-3xl p-4 text-left hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between h-full"
                style={{ backgroundColor: category.color }}
              >
                <div className="flex  h-full justify-between">
                  <div >
                    <h3 className="text-base font-bold text-gray-900 leading-tight mb-2">{category.name.split(' ')[0]}</h3>
                    {category.name.split(' ').length > 1 && (
                      <h4 className="text-sm font-medium text-gray-700 leading-tight">& {category.name.split(' ').slice(1).join(' ')}</h4>
                    )}
                  </div>
                    <img src={category.image} alt={category.name} className="w-22 h-22 object-contain" />
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Selling Products Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="bg-[#E53E3E] text-white px-4 py-3 rounded-lg flex items-center justify-between mb-4">
            <h2 className="text-sm font-medium">Top selling products</h2>
            <a href="#" className="font-medium text-sm hover:underline">View All</a>
          </div>
           
          <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex space-x-4 pb-2" >
              {flashSalesProducts.map((product) => (
                <div key={product.id} className="flex-shrink-0 max-w-[200px]  bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-50 h-29 object-cover" />
           {/* Store name and rating */}
                    <div className="flex items-center justify-between mb-2 p-2 bg-[#F2F2F2]  border border-gray-200">
                      <div className="flex items-center space-x-2">
                        <img src={IMAGES.sasha} alt="store" className="w-5 h-5 rounded-full" />
                        <span className="text-red-500 text-[8px] font-medium">{product.store}</span>
                      </div>
                  
                      <div className="flex items-center space-x-1">
                        <img src='/public/star.svg' alt="star" className="w-2 h-2" />
                        <span className="text-[8px] text-gray-600">4.5</span>
                      </div>
                    </div>
                  <div className="p-2">
                    
                    {/* Product name */}
                    <h3 className="text-gray-900 font-medium text-base mb-3 text-[10px] leading-tight">{product.name}</h3>
                    
                    {/* Price */}
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-red-500 font-bold text-[12px]">{product.salePrice}</span>
                      <span className="text-gray-400 line-through text-[8px]">{product.originalPrice}</span>
                    </div>
                    
                    {/* Service badges */}
                    <div className="flex space-x-2 mb-4">
                      <img src="/public/frame 268.svg" alt="Free delivery" className="h-6 w-15" />
                      <img src="/public/frame 269.svg" alt="20% Off in bulk" className="h-6 w-15" />
                    </div>
                    
                    {/* Location and Cart */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <img src={IMAGES.mappin} alt="location" className="w-4 h-4" />
                        <span className="text-gray-500 text-[6px]">Lagos, Nigeria</span>
                      </div>
                      <button className="bg-[#FFFFFF] border border-[#CDCDCD] p-2 rounded-2xl  transition-colors">
                        <img src={IMAGES.shoppingCart} alt="Add to cart" className="w-5 h-5   cursor-pointer " />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Top Stores Section */}
       <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="bg-[#E53E3E] text-white px-4 py-3 rounded-lg flex items-center justify-between mb-4">
            <h2 className="text-sm font-medium">Top  Stores</h2>
            <a href="#" className="font-medium text-sm hover:underline">View All</a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {stores.map((store) => (
              <div key={store.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-20 bg-gradient-to-r from-purple-400 to-pink-400">
                  <img src={store.coverImage} alt="Store cover" className="w-full h-full object-cover" />
                  <div className="absolute -bottom-6 left-4">
                    <img src={store.image} alt={store.name} className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                  </div>
                </div>
                
                <div className="pt-8 pb-4 px-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 text-sm">{store.name}</h3>
                    <div className="flex items-center space-x-1">
                      <img src={IMAGES.star} alt="rating" className="w-3 h-3" />
                      <span className="text-xs text-gray-600">4.5</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">Electronics</span>
                      <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs">Retail</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <img src={IMAGES.users} alt="followers" className="w-3 h-3" />
                        <span>{store.followers}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <img src={IMAGES.user} alt="following" className="w-3 h-3" />
                        <span>{store.following}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => toggleFollow(store.id)}
                    className={`w-full py-2 px-4 rounded-lg font-medium text-xs transition-colors ${
                      followStates[store.id] 
                        ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' 
                        : 'bg-[#E53E3E] text-white hover:bg-[#d63333]'
                    }`}
                  >
                    {followStates[store.id] ? 'Following' : 'Go to Shop'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* All Products Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">All Products</h2>
            <a href="#" className="text-[#E53E3E] font-medium text-sm hover:underline">View All</a>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-32 object-contain bg-gray-50" />
                  <div className="absolute top-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded-full text-xs">
                    Sponsored
                  </div>
                </div>
                
                <div className="p-3 space-y-2">
                  <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <img src={IMAGES.storeImg} alt="store" className="w-3 h-3 rounded-full" />
                    <span>{product.store}</span>
                  </div>
                  
                  <h3 className="font-medium text-gray-900 text-sm line-clamp-2">{product.name}</h3>
                  
                  <div className="text-[#E53E3E] font-bold text-sm">{product.price}</div>
                  
                  <div className="flex items-center space-x-1">
                    <div className="flex">{renderStars(product.rating)}</div>
                    <span className="text-xs text-gray-500">({product.reviews})</span>
                  </div>
                  
                  <button className="w-full bg-[#E53E3E] text-white py-2 px-3 rounded-lg hover:bg-[#d63333] transition-colors flex items-center justify-center space-x-1">
                    <img src={IMAGES.cart} alt="Add to cart" className="w-3 h-3" />
                    <span className="text-xs">Add to Cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
