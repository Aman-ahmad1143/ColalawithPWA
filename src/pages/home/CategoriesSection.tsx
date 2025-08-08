import React from 'react';
import IMAGES from '../../constants';

// Categories data
export const categories = [
  {
    id: 1,
    name: "Mobile Phones & Tablets",
    image: "/mobile.png",
    color: "#C7E1E1"
  },
  {
    id: 2,
    name: "Fashion",
    image: "/fashion.png",
    color: "#C7C7FA"
  },
  {
    id: 3,
    name: "Electronics",
    image: "/electronics.png",
    color: "#C7E1C7"
  },
  {
    id: 4,
    name: "Food & Grocery",
    image: "/foodandgrocery.png",
    color: "#E7CDC9"
  },
  {
    id: 5,
    name: "Beauty & Health",
    image: "/beautyandhealth.png",
    color: "#FAFAC7"
  },
  {
    id: 6,
    name: "Services",
    image: "/services.png",
    color: "#E0E0E0"
  }
];

const CategoriesSection: React.FC = () => {
  return (
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
  );
};

export default CategoriesSection;
