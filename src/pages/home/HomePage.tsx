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

  // const renderStars = (rating: number) => {
  //   const stars: React.ReactElement[] = [];
  //   const fullStars = Math.floor(rating);
  //   const hasHalfStar = rating % 1 !== 0;

  //   for (let i = 0; i < fullStars; i++) {
  //     stars.push(
  //       <img key={i} src={IMAGES.starFilled} alt="star" className="w-4 h-4" />
  //     );
  //   }

  //   if (hasHalfStar) {
  //     stars.push(
  //       <img key="half" src={IMAGES.star} alt="half-star" className="w-4 h-4" />
  //     );
  //   }

  //   const remainingStars = 5 - Math.ceil(rating);
  //   for (let i = 0; i < remainingStars; i++) {
  //     stars.push(
  //       <img key={`empty-${i}`} src={IMAGES.star} alt="empty-star" className="w-4 h-4 opacity-30" />
  //     );
  //   }

  //   return stars;
  // };

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

      {/* All Products Section */}
     <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="bg-[#E53E3E] text-white px-4 py-3 rounded-lg flex items-center justify-between mb-4">
            <h2 className="text-sm font-medium">All Products</h2>
            <a href="#" className="font-medium text-sm hover:underline">View All</a>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white flex-shrink-0 max-w-[200px]  rounded-lg overflow-hidden  shadow-xl hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-32 object-contain bg-gray-50" />
                  
                </div>
                
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
                    <h3 className="text-gray-900 font-medium text-base mb-2 text-[10px] leading-tight">{product.name}</h3>
                    
                    {/* Price */}
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-red-500 font-bold text-[12px]">{product.salePrice}</span>
                      <span className="text-gray-400 line-through text-[8px]">{product.originalPrice}</span>
                    </div>
                    
                    {/* Service badges */}
                    <div className="flex space-x-2 mb-2">
                      <img src="/public/frame 268.svg" alt="Free delivery" className="h-6 w-15" />
                      <img src="/public/frame 269.svg" alt="20% Off in bulk" className="h-6 w-15" />
                    </div>
                    
                    {/* Location and Cart */}
                    <div className="flex items-center justify-between mb-0.5">
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
    
  );
};

export default Home;