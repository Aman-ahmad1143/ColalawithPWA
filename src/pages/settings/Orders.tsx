import React from 'react';
import IMAGES from '../../constants';

interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: string;
  status: 'delivered' | 'pending' | 'shipped' | 'cancelled';
}

const Orders: React.FC = () => {
  // Sample order data - replace with actual data from your backend
  const orderItems: OrderItem[] = [
    {
      id: '1',
      name: 'Ord-1wcpnetmvk',
      quantity: 2,
      price: '₦9,999,990',
      status: 'delivered'
    },
    {
      id: '2',
      name: 'Ord-1wcpnetmvk',
      quantity: 2,
      price: '₦9,999,990',
      status: 'delivered'
    },
    {
      id: '3',
      name: 'Ord-1wcpnetmvk',
      quantity: 2,
      price: '₦9,999,990',
      status: 'pending'
    },
    {
      id: '4',
      name: 'Ord-1wcpnetmvk',
      quantity: 2,
      price: '₦9,999,990',
      status: 'shipped'
    },
    {
      id: '5',
      name: 'Ord-1wcpnetmvk',
      quantity: 2,
      price: '₦9,999,990',
      status: 'delivered'
    }
  ];

  return (
    <div className="flex-1 p-8 bg-white mt-8 rounded-[20px] h-[1054px]">
      <div className="max-w-2xl">
       
        
        {/* Order Summary Section */}
        <div className="bg-white">
          <h2 className="text-[20px] font-semibold text-[#000000] mb-6">Order Summary</h2>
          
          <div className="space-y-3">
            {orderItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-2xl h-[70px] hover:bg-gray-50 transition-colors">
                {/* Left side - Cart icon and order details */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#B9191933] rounded-full flex items-center justify-center">
                    <img src={IMAGES.ordercart} alt="Order" className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[14px] text-gray-900">{item.name}</h3>
                    <p className="text-[10px] text-gray-500">{item.quantity} stores</p>
                  </div>
                </div>
                
                {/* Right side - Price */}
                <div className="text-right">
                  <p className="font-semibold text-red-600 text-[14px]">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
          
        
          
        </div>
      </div>
    </div>
  );
};

export default Orders;
