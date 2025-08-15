import React from 'react';

const Reviews: React.FC = () => {
  return (
    <div className="flex-1 p-8 bg-white rounded-[20px]">
      <div className="max-w-2xl">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">My Reviews</h1>
        <div className="text-center py-20">
          <div className="text-gray-500 text-lg mb-4">No reviews yet</div>
          <div className="text-gray-400 text-sm">Share your experience by reviewing products you've purchased.</div>
          <button className="mt-6 bg-[#E53E3E] text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors">
            Browse Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
