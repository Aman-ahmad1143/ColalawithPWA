import React, { useState } from 'react';
import IMAGES from '../../constants';
import OrderStore from './OrderStore';
import OrderTracker from './OrderTracker';
import FullOrderDetail from './FullOrderDetail';

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

interface OrderStoreType {
  id: string;
  name: string;
  items: OrderItem[];
}

const OrderDetails: React.FC = () => {
  const [selectedOrderIndex, setSelectedOrderIndex] = useState(0);
  const [activeStatus, setActiveStatus] = useState('Order Placed');
  const [showTracker, setShowTracker] = useState(false);
  const [showFullOrderDetail, setShowFullOrderDetail] = useState(false);
  const [selectedStore, setSelectedStore] = useState<OrderStoreType | null>(null);
  const [fullOrderData, setFullOrderData] = useState<any>(null);

  // Handle track order button click
  const handleTrackOrder = (store: OrderStoreType) => {
    setSelectedStore(store);
    setShowTracker(true);
    setShowFullOrderDetail(false);
  };

  // Handle back from tracker
  const handleBackFromTracker = () => {
    setShowTracker(false);
    setSelectedStore(null);
  };

  // Handle show full order detail
  const handleShowFullOrderDetail = (orderData: any) => {
    setFullOrderData(orderData);
    setShowTracker(false);
    setShowFullOrderDetail(true);
  };

  // Handle back from full order detail
  const handleBackFromFullOrderDetail = () => {
    setShowFullOrderDetail(false);
    setShowTracker(true);
  };

  // Sample order data matching the image
  const orders: Order[] = [
    { id: 'Ord-1wcjmefmvk', stores: '2 stores', amount: 'N9,999,990', status: 'Order Placed' },
    { id: 'Ord-1wcjmefmvk', stores: '2 stores', amount: 'N9,999,990', status: 'Out for Delivery' },
    { id: 'Ord-1wcjmefmvk', stores: '2 stores', amount: 'N9,999,990', status: 'Delivered' },
    { id: 'Ord-1wcjmefmvk', stores: '2 stores', amount: 'N9,999,990', status: 'Completed' },
    { id: 'Ord-1wcjmefmvk', stores: '2 stores', amount: 'N9,999,990', status: 'Completed' }
  ];

  // Multiple order stores data
  const allOrderStores: OrderStoreType[][] = [
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
    <div className="min-h-screen bg-[#F9F9F9]">
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

          {/* Right Side - Conditional Rendering */}
          {showFullOrderDetail && fullOrderData ? (
            <FullOrderDetail
              onBack={handleBackFromFullOrderDetail}
              orderData={fullOrderData}
            />
          ) : showTracker && selectedStore ? (
            <OrderTracker 
              onBack={handleBackFromTracker}
              storeName={selectedStore.name}
              storeData={selectedStore}
              onShowFullOrderDetail={handleShowFullOrderDetail}
            />
          ) : (
            <OrderStore 
              activeStatus={activeStatus}
              setActiveStatus={setActiveStatus}
              currentOrderStores={currentOrderStores}
              onTrackOrder={handleTrackOrder}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
