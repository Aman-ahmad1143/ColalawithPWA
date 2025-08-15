import React from 'react';

const Support: React.FC = () => {
  return (
    <div className="flex-1 p-8 bg-white rounded-[20px]">
      <div className="max-w-2xl">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Support</h1>
        <div className="space-y-4">
          <div className="p-6 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
            <h3 className="text-lg font-medium mb-2">Contact Support</h3>
            <p className="text-gray-600">Get help from our support team via email or chat.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
            <h3 className="text-lg font-medium mb-2">Report an Issue</h3>
            <p className="text-gray-600">Let us know about any problems you're experiencing.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
            <h3 className="text-lg font-medium mb-2">Feature Request</h3>
            <p className="text-gray-600">Suggest new features or improvements.</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
            <h3 className="text-lg font-medium mb-2">Order Help</h3>
            <p className="text-gray-600">Get assistance with your orders and purchases.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
