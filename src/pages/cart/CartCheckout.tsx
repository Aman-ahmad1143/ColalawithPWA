import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import IMAGES from '../../constants';

interface CartStore {
  id: string;
  name: string;
  items: any[];
}

const CartCheckout: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalItems } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [pointsCode, setPointsCode] = useState('');
  const [selectedAddress, setSelectedAddress] = useState(0);

  // Group cart items by store
  const groupedByStore = cartItems.reduce((acc, item) => {
    if (!acc[item.storeId]) {
      acc[item.storeId] = {
        id: item.storeId,
        name: item.storeName,
        items: []
      };
    }
    acc[item.storeId].items.push(item);
    return acc;
  }, {} as Record<string, CartStore>);

  const cartStores = Object.values(groupedByStore);

  const updateItemQuantity = (itemId: string, newQuantity: number) => {
    updateQuantity(itemId, newQuantity);
  };

  const removeItem = (itemId: string) => {
    removeFromCart(itemId);
  };

  const calculateStoreTotal = (items: any[]) => {
    return items.reduce((total, item) => {
      const price = parseFloat(item.salePrice.replace(/[^0-9.-]+/g, ""));
      return total + (price * item.quantity);
    }, 0);
  };

  const calculateSubtotal = () => {
    return cartStores.reduce((total, store) => total + calculateStoreTotal(store.items), 0);
  };

  const subtotal = calculateSubtotal();

  const addresses = [
    {
      id: 1,
      phone: "07033256789",
      name: "Adekunle",
      address: "No 7, alani street, Ajah , Lagos"
    },
    {
      id: 2,
      phone: "07033256789", 
      name: "Adekunle",
      address: "No 7, alani street, Ajah , Lagos"
    }
  ];

  return (
    <div className="bg-[#F9F9F9] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-black">Cart</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Side - Cart Items and Forms */}
          <div className="lg:col-span-2 space-y-4">
            
            {/* Cart Items */}
            {cartStores.map((store) => (
              <div key={store.id} className="space-y-3">
                {/* Store Header with Checkbox on the side */}
                <div className="flex items-center space-x-1">
                  {/* Checkbox */}
                  <div>
                    <input
                      type="checkbox"
                      defaultChecked={true}
                      className="mt-1 w-4 h-4 text-[#E53E3E] border-gray-300 rounded focus:ring-[#E53E3E]"
                    />
                  </div>
                  
                  {/* Header Section in separate rounded container */}
                  <div className="flex-1 bg-[#E53E3E] text-white px-6 py-3 pb-7 flex items-center justify-between rounded-2xl">
                    <span className="font-medium text-sm">{store.name}</span>
                    <span className="text-xs bg-white text-[#E53E3E] px-2 py-1 rounded-full font-medium">
                      Start Chat
                    </span>
                  </div>
                </div>

                {/* Store Container connected to header - Increased Height */}
                <div className="bg-white rounded-2xl overflow-hidden ml-5 relative -mt-8 min-h-[400px]">
                  {/* Store Items */}
                  <div className="p-4 pt-6">
                    {store.items.map((item) => (
                      <div key={item.id} className="flex items-center bg-[#F9F9F9] rounded-2xl p-4 mb-3 space-x-4">
                        {/* Product Image */}
                        <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Product Info */}
                        <div className="flex-1">
                          <h3 className="font-medium text-black text-sm mb-1">{item.name}</h3>
                          <p className="text-[#E53E3E] font-bold text-sm">{item.salePrice}</p>
                          
                          {/* Quantity Controls */}
                          <div className="flex items-center space-x-2 mt-2">
                            <button
                              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                              className="w-6 h-6 bg-[#E53E3E] text-white rounded flex items-center justify-center text-sm font-bold"
                            >
                              −
                            </button>
                            <span className="text-sm font-bold text-[#E53E3E] min-w-[20px] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                              className="w-6 h-6 bg-[#E53E3E] text-white rounded flex items-center justify-center text-sm font-bold"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center space-x-2">
                          <button className="p-1 hover:bg-gray-100 rounded">
                            <img src={IMAGES.edit} alt="Edit" className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <img src={IMAGES.trash} alt="Delete" className="w-4 h-4 text-red-500" />
                          </button>
                        </div>
                      </div>
                    ))}

                   
                      
                      {/* Coupon Code Section inside store */}
                      <div className="bg-[#EDEDED] rounded-2xl p-4">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-black font-medium">Do you have a coupon code, input here</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="text"
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                            placeholder="Input coupon code"
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E53E3E] text-sm"
                          />
                          <button className="bg-[#E53E3E] text-white px-3 py-2 rounded-lg font-medium hover:bg-red-600 text-sm">
                            Apply Code
                          </button>
                        </div>
                      </div>

                      {/* Discount Points Section inside store */}
                      <div className="bg-[#EDEDED] rounded-2xl p-4">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-black font-medium">Discount Points</span>
                          <span className="text-[#E53E3E] text-sm font-medium">Bal: 200 Points</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="text"
                            value={pointsCode}
                            onChange={(e) => setPointsCode(e.target.value)}
                            placeholder="Add points"
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E53E3E] text-sm"
                          />
                        </div>
                      </div>

                      {/* Loyalty Points Notice inside store */}
                      <div className="bg-pink-100 rounded-2xl p-3">
                        <p className="text-center text-black text-sm">
                          Kindly note that 1 point is equivalent to N1
                        </p>
                      </div>

                      {/* Delivery Address inside store */}
                      <div className="bg-[#EDEDED] rounded-2xl p-4">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-black font-medium">Delivery Address</span>
                          <span className="text-[#E53E3E] text-sm font-medium">Delivery New Location</span>
                        </div>
                        <div className="space-y-3">
                          {addresses.map((address, index) => (
                            <div key={address.id} className="flex items-start space-x-3">
                              <input
                                type="radio"
                                name={`address-${store.id}`}
                                checked={selectedAddress === index}
                                onChange={() => setSelectedAddress(index)}
                                className="mt-1 w-4 h-4 text-[#E53E3E] border-gray-300 focus:ring-[#E53E3E]"
                              />
                              <div className="flex-1">
                                <div className="text-black font-medium text-sm">Phone number</div>
                                <div className="text-black text-sm">{address.phone}</div>
                                <div className="text-black text-sm">Address</div>
                                <div className="text-gray-600 text-sm">{address.address}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Summary Section inside store */}
                      <div className="bg-[#EDEDED] rounded-2xl p-4">
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-black">No of Items</span>
                            <span className="text-black font-bold">{store.items.length}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-black">Items Cost</span>
                            <span className="text-[#E53E3E] font-bold">{calculateStoreTotal(store.items).toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-black">Coupon Discount</span>
                            <span className="text-red-500 font-bold">-5,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-black">Points Discount</span>
                            <span className="text-red-500 font-bold">-10,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-black">Delivery fee</span>
                            <span className="text-[#E53E3E] font-bold">10,000</span>
                          </div>
                          <div className="flex justify-between border-t pt-2">
                            <span className="text-black font-medium">Total to pay</span>
                            <span className="text-[#E53E3E] font-bold text-lg">N4,995,000</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
            ))}

          </div>

          {/* Right Side - Payment Method and Summary */}
          <div className="lg:col-span-1 space-y-4">
            
            {/* Payment Method */}
            <div className="bg-white rounded-2xl p-4">
              <h3 className="text-black font-medium mb-3">Select Payment Method</h3>
              <div className="mb-3">
                <select 
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E53E3E] text-sm"
                >
                  <option value="">Choose Payment Method</option>
                  <option value="card">Credit/Debit Card</option>
                  <option value="bank">Bank Transfer</option>
                  <option value="wallet">Wallet</option>
                </select>
              </div>
            </div>

            {/* Total Items */}
            <div className="bg-[#EDEDED] rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <span className="text-black font-medium">Total Items</span>
                <span className="text-black font-bold">{getTotalItems()}</span>
              </div>
            </div>

            {/* Total */}
            <div className="bg-[#EDEDED] rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <span className="text-black font-medium">Total</span>
                <span className="text-[#E53E3E] font-bold text-lg">
                  ₦{subtotal.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Shopping Wallet Balance */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-4 text-white">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Shopping Wallet Balance</span>
                <span className="text-xs bg-white text-purple-600 px-2 py-1 rounded-full">pending</span>
              </div>
              <div className="text-xl font-bold">₦3,000,000</div>
            </div>

            {/* Terms and Conditions */}
            <div className="mb-4">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 text-[#E53E3E] border-gray-300 rounded focus:ring-[#E53E3E]"
                />
                <span className="text-sm text-black">
                  I agree to Colala's{' '}
                  <span className="text-[#E53E3E] underline cursor-pointer">terms of use</span>,{' '}
                  <span className="text-[#E53E3E] underline cursor-pointer">return policy</span> and{' '}
                  <span className="text-[#E53E3E] underline cursor-pointer">privacy policy</span>
                </span>
              </label>
            </div>

            {/* Proceed Button */}
            <button className="w-full bg-[#E53E3E] text-white py-4 rounded-2xl font-semibold text-lg hover:bg-red-600">
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCheckout;
