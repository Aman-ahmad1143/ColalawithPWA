import React from 'react';
import IMAGES from '../../constants';

// Featured products data
export const featuredProducts = [
  {
     id: 1,
    name: "Dell Inspiron Laptop",
    image: "/product1.svg",
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
    image: "/product2.svg",
    originalPrice: "N3,000,000",
    salePrice: "N2,000,000",
    rating: 4.8,
    reviews: 129,
    store: "Sasha Stores",
    timeLeft: "2d 14h 10m"
  },
  {
    id: 3,
    name: "Dell Inspiron Laptop",
    image: "/product3.svg",
    originalPrice: "N3,000,000",
    salePrice: "N2,000,000",
    rating: 4.2,
    reviews: 122,
    store: "Sasha Stores",
    timeLeft: "2d 14h 19m"
  },
  {
     id: 4,
    name: "Dell Inspiron Laptop",
    image: "/product4.svg",
    originalPrice: "N3,000,000",
    salePrice: "N2,000,000",
    rating: 4.3,
    reviews: 123,
    store: "Sasha Stores",
    timeLeft: "2d 14h 23m"
  },
  {
     id: 5,
    name: "Dell Inspiron Laptop",
    image: "/product5.svg",
    originalPrice: "N3,000,000",
    salePrice: "N2,000,000",
    rating: 4.4,
    reviews: 128,
    store: "Sasha Stores",
    timeLeft: "2d 14h 25m"
  },
  {
     id: 6,
    name: "Dell Inspiron Laptop",
    image: "/product6.svg",
    originalPrice: "N3,000,000",
    salePrice: "N2,000,000",
    rating: 4.0,
    reviews: 129,
    store: "Sasha Stores",
    timeLeft: "2d 14h 30m"
  },
  {
     id: 7,
    name: "Dell Inspiron Laptop",
    image: "/product7.svg",
    originalPrice: "N3,000,000",
    salePrice: "N2,000,000",
    rating: 4.1,
    reviews: 131,
    store: "Sasha Stores",
    timeLeft: "2d 14h 34m"
  },
  {
    id: 8,
    name: "Dell Inspiron Laptop",
    image: "/product8.svg",
    originalPrice: "N3,000,000",
    salePrice: "N2,000,000",
    rating: 3.4,
    reviews: 119,
    store: "Sasha Stores",
    timeLeft: "2d 14h 42m"
  },
  {
    id: 9,
    name: "Dell Inspiron Laptop",
    image: "/product9.svg",
    originalPrice: "N3,000,000",
    salePrice: "N2,000,000",
    rating: 3.5,
    reviews: 118,
    store: "Sasha Stores",
    timeLeft: "2d 14h 33m"
  },
  {
    id: 10,
    name: "Dell Inspiron Laptop",
    image: "/product10.svg",
    originalPrice: "N3,000,000",
    salePrice: "N2,000,000",
    rating: 3.6,
    reviews: 117,
    store: "Sasha Stores",
    timeLeft: "2d 14h 50m"
  }
];

interface AllProductsProps {
  onProductClick?: (productId: number) => void;
}

const AllProducts: React.FC<AllProductsProps> = ({ onProductClick }) => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-[#E53E3E] text-white px-4 py-3 rounded-lg flex items-center justify-between mb-4">
          <h2 className="text-sm font-medium">All Products</h2>
          <a href="#" className="font-medium text-sm hover:underline">View All</a>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {featuredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white flex-shrink-0 max-w-[200px] rounded-lg overflow-hidden shadow-xl hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => onProductClick?.(product.id + 6)} // Add 6 to differentiate from TopSellingProducts IDs
            >
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
  );
};

export default AllProducts;
