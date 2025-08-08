import React from "react";
import { useNavigate } from "react-router-dom";
import IMAGES from "../../constants";
import { categoriesData } from "./categoriesData";

const Categories: React.FC = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName: string) => {
    // Navigate to specific category pages
    if (categoryName === "Phones & Tablets") {
      navigate('/phones-tablets');
    }
    // Add more category navigations here as needed
  };

  // Split categories into left and right groups
  const leftCategories = categoriesData.slice(0, Math.ceil(categoriesData.length / 2));
  const rightCategories = categoriesData.slice(Math.ceil(categoriesData.length / 2));

  const CategoryGroup = ({ categories }: { categories: typeof categoriesData }) => (
    <div className="flex flex-col gap-[23px] w-1/2">
      {categories.map((category) => (
        <div
          key={category.id}
          className="bg-white rounded-[10px] border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer group"
          onClick={() => handleCategoryClick(category.name)}
        >
          {/* Main Category Header */}
          <div className="flex items-center justify-between pr-4 group-hover:pb-4 ">
            {/* Category Info */}
            <div className="flex items-center gap-4">
              {/* Category Image */}
              <div className="rounded-tl-lg rounded-bl-lg group-hover:rounded-br-lg  group-hover:rounded-bl-none  overflow-hidden flex-shrink-0 ">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-22 h-auto object-cover"
                />
              </div>

              {/* Category Details */}
              <div>
                <h3 className="text-[18px] font-semibold text-black mb-1">
                  {category.name}
                </h3>
                <p className="text-[14px] text-gray-500">
                  {category.productCount} {category.type === 'service' ? 'Services' : 'products'}
                </p>
              </div>
            </div>

            {/* Dropdown Arrow */}
            <div className="flex-shrink-0 bg-white rounded-full p-2 py-3 border border-gray-200 shadow-sm">
              <img
                src={IMAGES.dropdownRed}
                alt="expand"
                className="w-6 h-3 transform rotate-0 transition-transform group-hover:rotate-180"
              />
            </div>
          </div>

          {/* Subcategories - Hidden by default, shown on hover */}
          <div className="hidden group-hover:block overflow-hidden">
            {category.subcategoryGroups.map((group, groupIndex) => (
              <div key={group.id} className="w-full px-3">
                {/* Red Header for each subcategory group */}
                <div className={`bg-[#E53E3E] text-white px-4 py-2 flex items-center rounded-lg justify-between ${groupIndex === 0 ? '' : 'border-t border-red-600'}`}>
                  <span className="text-[16px] font-medium">{group.groupName}</span>
                  <button className="text-white underline px-3 py-1 rounded text-[12px] hover:bg-[#B91C1C] transition-colors cursor-pointer">
                    View All
                  </button>
                </div>

                {/* Subcategories Container */}
                <div className={`p-4 bg-white flex flex-wrap gap-3 ${groupIndex === category.subcategoryGroups.length - 1 ? 'rounded-b-[10px]' : ''}`}>
                  {group.subcategories.map((subcategory) => (
                    <div 
                      key={subcategory.id} 
                      className=" cursor-pointer bg-[#F7F7F7] hover:bg-gray-300 rounded-[5px]  transition-colors flex-shrink-0"
                      style={{ width: 'calc(25% - 9px)' }}
                    >
                      {/* Subcategory Image */}
                      <div className=" mx-auto mb-2 rounded-t-lg overflow-hidden">
                        <img
                          src={subcategory.image}
                          alt={subcategory.name}
                          className="w-30 h-15 object-cover"
                        />
                      </div>
                      
                      {/* Subcategory Name */}
                      <div className="text-[10px] text-gray-700 py-[2px] px-2  font-medium mb-1">
                        {subcategory.name}
                      </div>
                      
                      {/* Product Count */}
                      <div className="text-[8px] text-gray-500 pb-2 px-2">
                        {subcategory.productCount} Products
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-white min-h-screen py-8">
      {/* Container with max width constraint */}
      <div className="max-w-[1280px] mx-auto px-16">
        {/* Header */}
        <h1 className="text-[40px] font-bold text-black mb-8">Categories</h1>

        {/* Main Categories Container - Left and Right Groups */}
        <div className="flex gap-[23px]">
          {/* Left Categories Group */}
          <CategoryGroup categories={leftCategories} />
          
          {/* Right Categories Group */}
          <CategoryGroup categories={rightCategories} />
        </div>
      </div>
    </div>
  );
};

export default Categories;
