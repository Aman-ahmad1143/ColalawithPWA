import React from 'react';
import IMAGES from '../../constants';

// Flash sales products data
export const flashSalesProducts = [
  {
    id: 1,
    name: "Dell Inspiron Laptop",
    image: "/top1.png",
    originalPrice: "N3,000,000",
    salePrice: "N2,000,000",
    rating: 4.5,
    reviews: 128,
    store: "Sasha Stores",
    timeLeft: "2d 14h 30m"
  },
  {
    id: 2,
    name: "Dell Inspiron Laptop",
    image: "/top2.png",
    originalPrice: "N3,000,000",
    salePrice: "N2,000,000",
    rating: 4.8,
    reviews: 89,
    store: "Sasha Stores",
    timeLeft: "1d 8h 45m"
  },
  {
    id: 3,
    name: "Dell Inspiron Laptop",
    image: "/top3.png",
    originalPrice: "N2,000,000",
    salePrice: "N2,000,000",
    rating: 4.6,
    reviews: 156,
    store: "Sasha Stores",
    timeLeft: "3d 2h 15m"
  },
  {
    id: 4,
    name: "Dell Inspiron Laptop",
    image: "/top4.png",
    originalPrice: "N3,000,000",
    salePrice: "N2,000,000",
    rating: 4.4,
    reviews: 94,
    store: "Sasha Stores",
    timeLeft: "1d 20h 10m"
  },
  {
    id: 5,
    name: "Dell Inspiron Laptop",
    image: "/top5.png",
    originalPrice: "N3,000,000",
    salePrice: "N2,000,000",
    rating: 4.3,
    reviews: 203,
    store: "Sasha Stores",
    timeLeft: "4d 6h 25m"
  },
  {
    id: 6,
    name: "Dell Inspiron Laptop",
    image: "/top6.png",
    originalPrice: "N3,000,000",
    salePrice: "N2,000,000",
    rating: 4.7,
    reviews: 67,
    store: "Sasha Stores",
    timeLeft: "2d 12h 40m"
  },
  {
    id: 7,
    name: "Dell Inspiron Laptop",
    image: "/top6.png",
    originalPrice: "N3,000,000",
    salePrice: "N2,000,000",
    rating: 4.7,
    reviews: 67,
    store: "Sasha Stores",
    timeLeft: "2d 12h 40m"
  }
];

interface TopSellingProductsProps {
  onProductClick?: (productId: number) => void;
}

const TopSellingProducts: React.FC<TopSellingProductsProps> = ({ onProductClick }) => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-[#E53E3E] text-white px-4 py-3 rounded-lg flex items-center justify-between mb-4">
          <h2 className="text-sm font-medium">Top selling products</h2>
          <a href="#" className="font-medium text-sm hover:underline">View All</a>
        </div>
         
        <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex space-x-4 pb-2" >
            {flashSalesProducts.map((product) => (
              <div 
                key={product.id} 
                className="flex-shrink-0 max-w-[200px] bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => onProductClick?.(product.id)}
              >
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
  );
};

export default TopSellingProducts;
