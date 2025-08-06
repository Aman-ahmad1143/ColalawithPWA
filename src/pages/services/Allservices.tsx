import React from "react";
import IMAGES from "../../constants";

const serviceItems = [
  {
    id: 1,
    title: "Fashion designing Service",
    price: "₦5,000 - ₦100,000",
    rating: 4.5,
    storeName: "Sasha Stores",
    image: IMAGES.storeImg,
    storeAvatar: IMAGES.ellipseStore,
  },
  {
    id: 2,
    title: "Fashion designing Service",
    price: "₦5,000 - ₦100,000",
    rating: 4.5,
    storeName: "Sasha Stores",
    image: IMAGES.storeImg,
    storeAvatar: IMAGES.ellipseStore,
  },
  {
    id: 3,
    title: "Fashion designing Service",
    price: "₦5,000 - ₦100,000",
    rating: 4.5,
    storeName: "Sasha Stores",
    image: IMAGES.storeImg,
    storeAvatar: IMAGES.ellipseStore,
  },
  {
    id: 4,
    title: "Fashion designing Service",
    price: "₦5,000 - ₦100,000",
    rating: 4.5,
    storeName: "Sasha Stores",
    image: IMAGES.storeImg,
    storeAvatar: IMAGES.ellipseStore,
  },
  {
    id: 5,
    title: "Fashion designing Service",
    price: "₦5,000 - ₦100,000",
    rating: 4.5,
    storeName: "Sasha Stores",
    image: IMAGES.storeImg,
    storeAvatar: IMAGES.ellipseStore,
  },
  {
    id: 6,
    title: "Fashion designing Service",
    price: "₦5,000 - ₦100,000",
    rating: 4.5,
    storeName: "Sasha Stores",
    image: IMAGES.storeImg,
    storeAvatar: IMAGES.ellipseStore,
  },
  {
    id: 7,
    title: "Fashion designing Service",
    price: "₦5,000 - ₦100,000",
    rating: 4.5,
    storeName: "Sasha Stores",
    image: IMAGES.storeImg,
    storeAvatar: IMAGES.ellipseStore,
  },
  {
    id: 8,
    title: "Fashion designing Service",
    price: "₦5,000 - ₦100,000",
    rating: 4.5,
    storeName: "Sasha Stores",
    image: IMAGES.storeImg,
    storeAvatar: IMAGES.ellipseStore,
  },
  {
    id: 9,
    title: "Fashion designing Service",
    price: "₦5,000 - ₦100,000",
    rating: 4.5,
    storeName: "Sasha Stores",
    image: IMAGES.storeImg,
    storeAvatar: IMAGES.ellipseStore,
  },
  {
    id: 10,
    title: "Fashion designing Service",
    price: "₦5,000 - ₦100,000",
    rating: 4.5,
    storeName: "Sasha Stores",
    image: IMAGES.storeImg,
    storeAvatar: IMAGES.ellipseStore,
  },
];

const AllServices: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      {/* Container with max width constraint */}
      <div className="max-w-[1280px] mx-auto px-16">
        {/* Header */}
        <h1 className="text-4xl font-bold text-black mb-8">All Services</h1>

        {/* Filter Section */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex gap-4">
            <div className="relative">
              <select className="bg-gray-100 border-0 rounded-lg px-4 py-3 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 appearance-none min-w-[120px]">
                <option>Location</option>
              </select>
              <img 
                src={IMAGES.dropdown} 
                alt="dropdown" 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
              />
            </div>
            
            <div className="relative">
              <select className="bg-gray-100 border-0 rounded-lg px-4 py-3 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 appearance-none min-w-[120px]">
                <option>Store</option>
              </select>
              <img 
                src={IMAGES.dropdown} 
                alt="dropdown" 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
              />
            </div>
            
            <div className="relative">
              <select className="bg-gray-100 border-0 rounded-lg px-4 py-3 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 appearance-none min-w-[120px]">
                <option>Services</option>
              </select>
              <img 
                src={IMAGES.dropdown} 
                alt="dropdown" 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
              />
            </div>
            
            <div className="relative">
              <select className="bg-gray-100 border-0 rounded-lg px-4 py-3 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 appearance-none min-w-[120px]">
                <option>Price</option>
              </select>
              <img 
                src={IMAGES.dropdown} 
                alt="dropdown" 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
              />
            </div>
            
            <div className="relative">
              <select className="bg-gray-100 border-0 rounded-lg px-4 py-3 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 appearance-none min-w-[120px]">
                <option>Ratings</option>
              </select>
              <img 
                src={IMAGES.dropdown} 
                alt="dropdown" 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
              />
            </div>
          </div>

          <div className="relative">
            <select className="bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 appearance-none min-w-[120px]">
              <option>Sort by</option>
            </select>
            <img 
              src={IMAGES.dropdown} 
              alt="dropdown" 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-5 gap-6">
          {serviceItems.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              {/* Service Image */}
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-[118px] h-[118px] object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Store Info */}
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={service.storeAvatar}
                    alt={service.storeName}
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="text-sm text-[#E53E3E]">{service.storeName}</span>
                  <div className="flex items-center gap-1 ml-auto">
                    <img src={IMAGES.starFilled} alt="star" className="w-4 h-4" />
                    <span className="text-sm text-gray-600">{service.rating}</span>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className=" text-base text-black mb-2 text-[10px]">
                  {service.title}
                </h3>

                {/* Price */}
                <p className="text-red-500 font-semibold text-[12px] mb-4">
                  {service.price}
                </p>

                {/* Details Button */}
                <button className="w-full bg-[#E53E3E] text-white rounded-lg py-2.5 text-[8px] hover:bg-red-600 transition-colors">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllServices;
