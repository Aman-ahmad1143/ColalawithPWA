import React from "react";
import { useNavigate } from "react-router-dom";
import IMAGES from "../../constants";

const serviceCategories = [
  {
    title: "House Keeping",
    listings: 20,
    image: IMAGES.services1,
  },
  {
    title: "Gardening",
    listings: 20,
    image: IMAGES.services2,
  },
  {
    title: "Fashion Designing",
    listings: 20,
    image: IMAGES.services1,
  },
  {
    title: "Gardening",
    listings: 20,
    image: IMAGES.services2,
  },
  {
    title: "Fashion Designing",
    listings: 20,
    image: IMAGES.services3,
  },
  {
    title: "Electronics Repair",
    listings: 20,
    image: IMAGES.services4,
  },
  {
    title: "Errand Running",
    listings: 20,
    image: IMAGES.services5,
  },
  {
    title: "Janitorial Services",
    listings: 20,
    image: IMAGES.services6,
  },
  {
    title: "Car Washing",
    listings: 20,
    image: IMAGES.services7,
  },
  {
    title: "Design Services",
    listings: 20,
    image: IMAGES.services8,
  },
];

const Services: React.FC = () => {
  const navigate = useNavigate();

  const handleViewAllServices = () => {
    navigate('/all-services');
  };

  return (
    <div className="bg-white min-h-screen py-16">
      {/* Container with max width constraint */}
      <div className="max-w-[1280px] mx-auto px-16">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-black">Service Categories</h1>
          <button 
            onClick={handleViewAllServices}
            className="bg-[#E53E3E] text-white rounded-xl px-6 py-3 text-sm font-semibold hover:bg-red-600 transition-colors"
          >
            View All Services
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-8 gap-4">
          {serviceCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded shadow-md  border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow cursor-pointer w-[123px] h-[130px]"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="h-[110px] w-full object-cover"
              />
              <div className="p-3  flex-1 flex flex-col justify-center">
                <h2 className=" text-[8px] text-black mb-1 ">{cat.title}</h2>
                <p className="text-gray-400 text-[6px]">{cat.listings} Listings</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
