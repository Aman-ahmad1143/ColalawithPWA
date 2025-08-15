import React, { useState } from 'react';
import IMAGES from '../../constants';

interface Order {
  id: string;
  stores: string;
  amount: string;
  status: 'Order Placed' | 'Out for Delivery' | 'Delivered' | 'Completed';
}

interface OrderItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
  image: string;
}

interface OrderStore {
  id: string;
  name: string;
  items: OrderItem[];
}

const OrderDetails: React.FC = () => {
  const [selectedOrderIndex, setSelectedOrderIndex] = useState(0);
  const [activeStatus, setActiveStatus] = useState('Order Placed');

  // Sample order data matching the image
  const orders: Order[] = [
    { id: 'Ord-1wcjmefmvk', stores: '2 stores', amount: 'N9,999,990', status: 'Order Placed' },
    { id: 'Ord-1wcjmefmvk', stores: '2 stores', amount: 'N9,999,990', status: 'Out for Delivery' },
    { id: 'Ord-1wcjmefmvk', stores: '2 stores', amount: 'N9,999,990', status: 'Delivered' },
    { id: 'Ord-1wcjmefmvk', stores: '2 stores', amount: 'N9,999,990', status: 'Completed' },
    { id: 'Ord-1wcjmefmvk', stores: '2 stores', amount: 'N9,999,990', status: 'Completed' }
  ];

  // Multiple order stores data
  const allOrderStores: OrderStore[][] = [
    // Order 1 stores
    [
      {
        id: '1',
        name: 'Sasha Stores',
        items: [
          {
            id: 1,
            name: 'Iphone 16 pro max - Black',
            price: 'N2,500,000',
            quantity: 1,
            image: '/public/iphone.svg'
          },
          {
            id: 2,
            name: 'Iphone 16 pro max - Black',
            price: 'N2,500,000',
            quantity: 1,
            image: '/public/iphone.svg'
          }
        ]
      },
      {
        id: '2',
        name: 'Sasha Stores',
        items: [
          {
            id: 3,
            name: 'Iphone 16 pro max - Black',
            price: 'N2,500,000',
            quantity: 1,
            image: '/public/iphone.svg'
          },
          {
            id: 4,
            name: 'Iphone 16 pro max - Black',
            price: 'N2,500,000',
            quantity: 1,
            image: '/public/iphone.svg'
          }
        ]
      }
    ],
    // Order 2 stores (different items)
    [
      {
        id: '3',
        name: 'Sasha Stores',
        items: [
          {
            id: 5,
            name: 'Iphone 16 pro max - Blue',
            price: 'N2,500,000',
            quantity: 1,
            image: '/public/iphone.svg'
          }
        ]
      },
      {
        id: '4',
        name: 'Tech World',
        items: [
          {
            id: 6,
            name: 'Samsung Galaxy S24',
            price: 'N1,800,000',
            quantity: 2,
            image: '/public/iphone.svg'
          }
        ]
      }
    ],
    // Order 3 stores
    [
      {
        id: '5',
        name: 'Mobile Hub',
        items: [
          {
            id: 7,
            name: 'Iphone 15 Pro',
            price: 'N2,200,000',
            quantity: 1,
            image: '/public/iphone.svg'
          }
        ]
      }
    ],
    // Order 4 stores
    [
      {
        id: '6',
        name: 'Electronics Plus',
        items: [
          {
            id: 8,
            name: 'MacBook Pro',
            price: 'N3,500,000',
            quantity: 1,
            image: '/public/iphone.svg'
          }
        ]
      }
    ],
    // Order 5 stores
    [
      {
        id: '7',
        name: 'Smart Devices',
        items: [
          {
            id: 9,
            name: 'iPad Pro',
            price: 'N1,900,000',
            quantity: 1,
            image: '/public/iphone.svg'
          }
        ]
      }
    ]
  ];

  // Get current order stores based on selected order
  const currentOrderStores = allOrderStores[selectedOrderIndex] || allOrderStores[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Order List */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-6 text-black">Order Details</h2>
            <div className="space-y-2">
              {orders.map((order, index) => (
                <div 
                  key={index} 
                  className={`rounded-2xl p-4 border-2 cursor-pointer transition-all ${
                    selectedOrderIndex === index 
                      ? 'border-[#E53E3E]' 
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedOrderIndex(index)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-[#B9191933] p-3 rounded-full">
                      <img src={IMAGES.ordercart} alt="Order" className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-black text-sm">{order.id}</p>
                      <p className="text-[14px] text-gray-500">{order.stores}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-[#E53E3E] text-base">{order.amount}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Order Details */}
          <div className="lg:col-span-2">
            {/* Status Tabs moved below */}
            <div className="flex space-x-2 mb-0.5 mt-14">
              <button 
                className={`px-3 py-3 rounded-lg font-medium text-[10px] ${
                  activeStatus === 'Order Placed' 
                    ? 'bg-[#E53E3E] text-white' 
                    : 'bg-[#EDEDED] text-gray-600 hover:bg-gray-300'
                }`}
                onClick={() => setActiveStatus('Order Placed')}
              >
                Order Placed
              </button>
              <button 
                className={`px-3 py-3 rounded-lg font-medium text-[10px] ${
                  activeStatus === 'Out for Delivery' 
                    ? 'bg-[#E53E3E] text-white' 
                    : 'bg-[#EDEDED] text-gray-600 hover:bg-gray-300'
                }`}
                onClick={() => setActiveStatus('Out for Delivery')}
              >
                Out for delivery
              </button>
              <button 
                className={`px-3 py-3 rounded-lg font-medium text-[10px] ${
                  activeStatus === 'Delivered' 
                    ? 'bg-[#E53E3E] text-white' 
                    : 'bg-[#EDEDED] text-gray-600 hover:bg-gray-300'
                }`}
                onClick={() => setActiveStatus('Delivered')}
              >
                Delivered
              </button>
              <button 
                className={`px-3 py-3 rounded-lg font-medium text-[10px] ${
                  activeStatus === 'Completed' 
                    ? 'bg-[#E53E3E] text-white' 
                    : 'bg-[#EDEDED] text-gray-600 hover:bg-gray-300'
                }`}
                onClick={() => setActiveStatus('Completed')}
              >
                Completed
              </button>
            </div>

            {/* Order Stores moved further below - REDUCED HEIGHT */}
            <div className="space-y-6 mt-5">
              {currentOrderStores.map((store) => (
                <div key={store.id} className="overflow-hidden">
                  {/* Store Header - Reduced padding */}
                  <div className="bg-[#E53E3E] text-white px-4 py-3 pb-4 flex items-center justify-between rounded-2xl">
                    <span className="font-medium text-sm">{store.name}</span>
                  </div>
                  
                  {/* Store Items Container - REDUCED HEIGHT */}
                  <div className="ml-0.5 bg-white rounded-2xl relative -mt-2 h-[320px]">
                    <div className="p-1 space-y-8">
                      {store.items.map((item) => (
                        <div key={item.id} className="flex items-center mb-1 bg-[#F9F9F9] p-4 rounded-2xl space-x-2">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-20 h-20 rounded-xl object-cover border border-gray-200"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-black text-[12px] mb-1">{item.name}</h4>
                            <p className="text-[#E53E3E] font-bold text-[12px] text-base mb-2">{item.price}</p>
                            <p className="text-[#E53E3E] text-xs font-medium">Qty: {item.quantity}</p>
                          </div>
                          <button className="bg-[#E53E3E] text-white px-4 py-2 rounded-2xl  mt-10 font-sm text-xs hover:bg-red-600 transition-colors">
                            Track Order
                          </button>
                        </div>
                      ))}

                      {/* Open Chat Button */}
                      <div className="mt-4">
                        <button className="w-full py-3 px-2 bg-white border border-[#CACACA] rounded-2xl text-gray-700 font-medium text--[12px] hover:bg-gray-100 transition-colors">
                          Open Chat
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
