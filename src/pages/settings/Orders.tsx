import React from 'react';

const Orders: React.FC = () => {
  return (
    <div className="flex-1 p-8 bg-white rounded-[20px]">
      <div className="max-w-2xl">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">My Orders</h1>
        <div className="text-center py-20">
          <div className="text-gray-500 text-lg mb-4">No orders yet</div>
          <div className="text-gray-400 text-sm">When you make your first purchase, your orders will appear here.</div>
          <button className="mt-6 bg-[#E53E3E] text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors">
            Start Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
