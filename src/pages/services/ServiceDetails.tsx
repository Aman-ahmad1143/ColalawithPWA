import React from "react";
import IMAGES from "../../constants";
import { serviceDetailData } from "./serviceDetailsData";

const ServiceDetails: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-6  ">
      {/* Container with max width constraint */}
      <div className="max-w-[1280px] mx-auto px-18">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-[40px] font-bold text-black">Service Details</h1>
          <div className="flex items-center gap-4">
            <span className="w-10 h-10 flex items-center justify-center border border-[#CDCDCD] rounded-full"><img src={IMAGES.kebab} alt="more options" className="w-1 h-auto cursor-pointer " /></span>
            <span className="w-10 h-10 flex items-center justify-center border border-[#CDCDCD] rounded-full"><img src={IMAGES.black_heart} alt="favorite" className="w-[21px] h-[18px] cursor-pointer" /></span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-8">
          {/* Left Side - Image Gallery */}
          <div className="flex gap-4">
            {/* Thumbnails */}
            <div className="flex flex-col gap-3">
              {serviceDetailData.thumbnails.map((thumbnail, index) => (
                <div key={index} className="w-[74px] h-[74px] border border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:border-[#E53E3E]">
                  <img
                    src={thumbnail}
                    alt={`thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="relative w-[434px] h-[369px] rounded-lg overflow-hidden">
              <img
                src={serviceDetailData.mainImage}
                alt={serviceDetailData.title}
                className="w-full h-full object-cover"
              />
              
              {/* Video Icon Overlay */}
              <div className="absolute  inset-0 flex items-center justify-center">
                <div className="bg-[#000000CC] rounded-full px-7 py-[35px]">
                  <img src={IMAGES.video} alt="play video" className="w-9 h-auto" />
                </div>
              </div>

              {/* Store Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#000000CC] text-white p-4 py-[6px] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={serviceDetailData.storeAvatar}
                    alt={serviceDetailData.storeName}
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="text-sm">{serviceDetailData.storeName}</span>
                </div>
                <div className="flex items-center gap-1">
                  <img src={IMAGES.starFilled} alt="rating" className="w-4 h-4" />
                  <span className="text-[12px]">{serviceDetailData.rating}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Service Info */}
          <div className="flex-1">
            {/* Service Title and Rating */}
            <div className="mb-4 border-b border-b-[#00000080]">
              <div className="flex justify-between items-center">
                <h2 className="text-[20px] font-semibold text-black mb-2">
                {serviceDetailData.title}
              </h2>
              <div className="flex items-center gap-2 mb-4">
                <img src={IMAGES.starFilled} alt="rating" className="w-5 h-5" />
                <span className="text-gray-600">{serviceDetailData.rating}</span>
              </div>
              </div>
              <div className="text-[#E53E3E] font-semibold text-lg mb-6">
                {serviceDetailData.price}
              </div>
            </div>

            {/* Description */}
            <div className="mb-4 pb-2 border-b border-b-[#00000080]">
              <h3 className="text-[12px] font-medium text-[#00000080] mb-2 ">Description</h3>
              <p className="text-gray-700 text-sm font-medium pr-50">
                {serviceDetailData.description}
              </p>
            </div>

            {/* Price Breakdown */}
            <div className="mb-8">
              <h3 className="text-[12px] font-medium text-[#00000080] mb-4">Price Breakdown</h3>
              <div className="space-y-1 ">
                {serviceDetailData.priceBreakdown.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-4 px-4 bg-[#EDEDED] border border-[#CACACA] rounded-[5px] first:rounded-t-xl last:rounded-b-xl hover:bg-[#DCDCDC]">
                    <span className="text-gray-700 text-[12px]">{item.category}</span>
                    <span className="text-[#E53E3E] font-medium text-[12px]">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Actions */}
            <div className="flex gap-2">
              <button className="flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-[15px] px-[14px] py-[14px] hover:bg-gray-50 transition-colors">
                <img src={IMAGES.whatsapp} alt="whatsapp" className="w-5 h-5" />
              </button>
              <button className="flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-[15px] px-[14px] py-[14px] hover:bg-gray-50 transition-colors">
                <img src={IMAGES.phoneIcon} alt="phone" className="w-5 h-5" />
              </button>
              <button className="flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-[15px] px-[14px] py-[14px] hover:bg-gray-50 transition-colors">
                <img src={IMAGES.message} alt="message" className="w-5 h-5" />
              </button>
              <button className="flex-1 bg-[#E53E3E] text-white rounded-lg px-6 py-3 hover:bg-red-600 transition-colors">
                Message Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
