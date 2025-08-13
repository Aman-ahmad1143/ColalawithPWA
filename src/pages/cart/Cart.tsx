import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import IMAGES from '../../constants';

interface CartStore {
  id: string;
  name: string;
  items: any[];
}

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart, getTotalItems } = useCart();
  const [acceptedTerms, setAcceptedTerms] = useState(false);

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

  const calculateGrandTotal = () => {
    return cartStores.reduce((total, store) => total + calculateStoreTotal(store.items), 0);
  };

  const handleCheckout = () => {
    if (acceptedTerms && cartItems.length > 0) {
      navigate('/cart/checkout');
    }
  };

  return (
    <div className="bg-[#F9F9F9] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-black">Cart</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items - Left Side */}
          <div className="lg:col-span-2 space-y-4">
            {cartStores.length === 0 ? (
              <div className="bg-white rounded-2xl p-8 text-center">
                <p className="text-gray-500">Your cart is empty</p>
              </div>
            ) : (
              cartStores.map((store) => (
                <div key={store.id} className="space-y-3">
                  {/* Store Header with Checkbox on the side */}
                  <div className="flex items-center space-x-1  ">
                    {/* Checkbox */}
                    <div >
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

                  {/* Store Container connected to header */}
                  <div className="bg-white rounded-2xl overflow-hidden ml-5 relative -mt-8  ">
                  {/* Store Items */}
                  <div className="p-4 pt-6">
                    {store.items.map((item,) => (
                      <div key={item.id} className="flex items-center bg-[#F9F9F9] rounded-2xl p-4 mb-2 space-x-4">
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
{/* 
                    {/* Store Summary */}
                    <div className=" pt-4 mt-4 space-y-3">
                      {/* No of Items */}
                      <div className="bg-[#EDEDED] rounded-lg p-3 mb-1">
                <div className="flex items-center justify-between">
                  <span className="text-black font-md text-[12px]">Total Items</span>
                  <span className="text-black font-bold text-[12px]">{getTotalItems()}</span>
                </div>
              </div> 

                      
                      {/* Store Total */}
                      <div className="bg-[#EDEDED] rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <span className="text-black font-md text-[12px]">Total</span>
                          <div className="text-[#E53E3E] font-bold text-[12px]">
                            {calculateStoreTotal(store.items).toLocaleString('en-NG', {
                              style: 'currency',
                              currency: 'NGN',
                              minimumFractionDigits: 0
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Close Store Container */}
                </div>
                {/* Close outer store wrapper */}
                </div>
              ))
            )}
          </div>

          {/* Order Summary - Right Side */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl p-6 sticky top-6">
              {/* Total Items */}
              <div className="bg-[#EDEDED] rounded-lg p-3 mb-1">
                <div className="flex items-center justify-between">
                  <span className="text-black font-md text-[12px]">Total Items</span>
                  <span className="text-black font-bold text-[12px]">{getTotalItems()}</span>
                </div>
              </div>

              {/* Total */}
              <div className="bg-[#EDEDED] rounded-lg p-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-black font-md text-[12px]">Total</span>
                  <span className="text-[12px] font-bold text-[#E53E3E]">
                    {calculateGrandTotal().toLocaleString('en-NG', {
                      style: 'currency',
                      currency: 'NGN',
                      minimumFractionDigits: 0
                    })}
                  </span>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="mb-6">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    className="mt-1 w-4 h-4 text-[#E53E3E] border-gray-300 rounded focus:ring-[#E53E3E]"
                  />
                  <span className="text-sm text-gray-600">
                    I agree to Colala's{' '}
                    <span className="text-[#E53E3E] underline cursor-pointer">terms of use</span>,{' '}
                    <span className="text-[#E53E3E] underline cursor-pointer">returns policy</span> and{' '}
                    <span className="text-[#E53E3E] underline cursor-pointer">privacy policy</span>
                  </span>
                </label>
              </div>

              {/* Checkout Button */}
              <button 
                onClick={handleCheckout}
                disabled={!acceptedTerms || cartItems.length === 0}
                className={`w-full py-4 rounded-2xl font-semibold text-white transition-colors ${
                  acceptedTerms && cartItems.length > 0
                    ? 'bg-[#E53E3E] hover:bg-red-600' 
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
