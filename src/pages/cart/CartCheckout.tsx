import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import IMAGES from '../../constants';

interface CartStore {
  id: string;
  name: string;
  items: any[];
}

const CartCheckout: React.FC = () => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart, getTotalItems } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [pointsCode, setPointsCode] = useState('');
  const [selectedAddress, setSelectedAddress] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

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
  const totalAmount = 4995000; // Based on the hardcoded value from your summary
  const walletBalance = 3000000; // Current wallet balance

  // Payment handler
  const handlePayment = async () => {
    if (!paymentMethod) {
      alert('Please select a payment method');
      return;
    }

    setIsProcessing(true);

    try {
      if (paymentMethod === 'wallet') {
        // Check if wallet has sufficient balance
        if (walletBalance >= totalAmount) {
          // Simulate wallet payment processing
          setTimeout(() => {
            setIsProcessing(false);
            setShowSuccessModal(true);
            // Here you would typically update the wallet balance and clear cart
          }, 2000);
        } else {
          setIsProcessing(false);
          alert('Insufficient wallet balance. Please choose another payment method or top up your wallet.');
        }
      } else {
        // Redirect to Flutterwave for card/bank payments
        initiateFlutterwavePayment();
      }
    } catch (error) {
      setIsProcessing(false);
      alert('Payment failed. Please try again.');
    }
  };

  // Flutterwave payment integration
  const initiateFlutterwavePayment = () => {
    // You would typically use Flutterwave's React SDK here
    // For now, we'll simulate the process

    // const flutterwaveConfig = {
    //   public_key: "FLWPUBK_TEST-your-public-key", // Replace with actual key
    //   tx_ref: `TX-${Date.now()}`,
    //   amount: totalAmount,
    //   currency: "NGN",
    //   customer: {
    //     email: "customer@example.com",
    //     phone_number: addresses[selectedAddress]?.phone || "07033256789",
    //     name: addresses[selectedAddress]?.name || "Customer",
    //   },
    //   callback: (response: any) => {
    //     if (response.status === "successful") {
    //       setIsProcessing(false);
    //       setShowSuccessModal(true);
    //     } else {
    //       setIsProcessing(false);
    //       alert('Payment was not successful');
    //     }
    //   },
    //   onClose: () => {
    //     setIsProcessing(false);
    //   },
    // };

    // Simulate Flutterwave redirect
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccessModal(true);
    }, 3000);
  };

  // const closeModal = () => {
  //   setShowSuccessModal(false);
  // };

  const goToOrderDetails = () => {
    setShowSuccessModal(false);
    navigate('/order-details');
  };

  const goHome = () => {
    setShowSuccessModal(false);
    navigate('/');
  };

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
                      <div className="bg-white rounded-2xl p-4">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-black text-[12px] font-medium">Do you have a coupon code, input here</span>
                        </div>
                        <div className="relative">
                          <input
                            type="text"
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                            placeholder="Input coupon code"
                            className="w-full px-7 py-3 pr-24 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E53E3E] text-sm"
                          />
                          <button className="absolute right-3 top-3 bottom-3 bg-[#E53E3E] text-white px-3 rounded-2xl font-medium hover:bg-red-600 text-[10px]">
                            Apply Code
                          </button>
                        </div>
                      </div>


                      {/* Discount Points Section inside store */}
                      <div className="bg-white rounded-2xl p-4">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-black text-[12px] font-medium">Discount Points</span>
                          <span className="text-[#E53E3E] text-[12px] font-medium">Bal: 200 Points</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="text"
                            value={pointsCode}
                            onChange={(e) => setPointsCode(e.target.value)}
                            placeholder="Add points"
                            className="flex-1 px-7 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E53E3E] text-sm"
                          />
                        </div>
                      </div>

                      {/* Loyalty Points Notice inside store */}
                      <div className="bg-[#FF000033] border border-[#FF0000]  rounded-2xl p-2 w-[710x]">
                        <p className="text-center text-[#FF0000] text-[10px]">
                          Kindly note that 1 point is equivalent to N1
                        </p>
                      </div>

                      {/* Delivery Address inside store */}
                      <div className="bg-white  rounded-2xl p-4">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-black font-medium">Delivery Address</span>
                          <span className="text-[#E53E3E] text-[12px] font-medium"><u>Delivery New Location</u></span>
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
                              <div className="flex-1 border border-[#CDCDCD] rounded-lg p-2">
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
                      <div className="bg-white rounded-2xl p-2">
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between bg-[#EDEDED] p-2 border border-[#CACACA] rounded-lg mb-1">
                            <span className="text-black text-[12px] ">No of Items</span>
                            <span className="text-black text-[12px] font-bold">{store.items.length}</span>
                          </div>
                          <div className="flex justify-between bg-[#EDEDED] p-2 border border-[#CACACA] rounded-lg mb-1">
                            <span className="text-black text-[12px] ">Items Cost</span>
                            <span className="text-[#E53E3E] text-[12px] font-bold">{calculateStoreTotal(store.items).toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between bg-[#EDEDED] p-2 border border-[#CACACA] rounded-lg mb-1">
                            <span className="text-black text-[12px] ">Coupon Discount</span>
                            <span className="text-red-500 text-[12px] font-bold">-5,000</span>
                          </div>
                          <div className="flex justify-between bg-[#EDEDED] p-2 border border-[#CACACA] rounded-lg mb-1">
                            <span className="text-black text-[12px] ">Points Discount</span>
                            <span className="text-red-500 text-[12px] font-bold">-10,000</span>
                          </div>
                          <div className="flex justify-between bg-[#EDEDED] p-2 border border-[#CACACA] rounded-lg mb-1">
                            <span className="text-black text-[12px] ">Delivery fee</span>
                            <span className="text-[#E53E3E] text-[12px] font-bold">10,000</span>
                          </div>
                          <div className="flex justify-between bg-[#EDEDED] p-2 border border-[#CACACA] rounded-lg mb-1">
                            <span className="text-black text-[12px] ">Total to pay</span>
                            <span className="text-[#E53E3E] font-bold text-[12px]">N4,995,000</span>
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
            <div className=" rounded-2xl p-4  w-[500px] mb-0.5">
              <h3 className="text-black mr-20 text-[12px] font-medium mb-2">Select Payment Method</h3>
              <div className="mb-3 pr-24">
                <select 
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full px-5 py-4 border bg-white border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#E53E3E] text-[#00000080] text-sm"
                >
                  <option value="">Choose Payment Method</option>
                  <option value="card">Credit/Debit Card</option>
                  <option value="bank">Bank Transfer</option>
                  <option value="wallet">Wallet</option>
                </select>
              </div>
            </div>

            {/* Total Items */}
            <div className="bg-[#EDEDED] border border-[#CACACA] rounded-2xl p-4 mb-1">
              <div className="flex items-center justify-between">
                <span className="text-black text-[12px] font-medium">Total Items</span>
                <span className="text-black text-[12px] font-bold">{getTotalItems()}</span>
              </div>
            </div>

            {/* Total */}
            <div className="bg-[#EDEDED] rounded-2xl   border border-[#CACACA]  p-4">
              <div className="flex items-center justify-between">
                <span className="text-black text-[12px] font-medium">Total</span>
                <span className="text-[#E53E3E] text-[12px] font-bold ">
                  ₦{subtotal.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Shopping Wallet Balance */}
            <div className="bg-gradient-to-r from-[#F90909] to-[#920C5F] rounded-2xl p-4 text-white">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px]">Shopping Wallet Balance</span>
                <span className="text-xs bg-white text-[#F90909] px-2 py-1 rounded-full">Topup</span>
              </div>
              <div className="text-[19px] font-bold">₦3,000,000</div>
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
            <button 
              onClick={handlePayment}
              disabled={isProcessing}
              className="w-full bg-[#E53E3E] text-white py-4 rounded-2xl font-semibold text-[14px] hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? 'Processing...' : 'Proceed'}
            </button>
          </div>
        </div>

        {/* Success Modal */}
        {showSuccessModal && (
          <div className="fixed inset-0  backdrop-brightness-50 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-[389px] h-[287px] mx-4 text-center">
              {/* Success Icon */}
              <div className="w-16 h-16 bg-[#00800033] rounded-full flex items-center justify-center mx-auto mb-7">
                <div className="w-8 h-8  rounded-full flex items-center justify-center">
                 <img src="/public/tick.svg" alt="Success" />
                </div>
              </div>

              {/* Success Message */}
              <h2 className="text-[14px] font-md text-black mb-6">
                Congratulations your order has been placed successfully
                visit the order details page to chat with store and track your order
              </h2>
             
              {/* <p className="text-gray-600 text-sm mb-6">
                visit the order details page to chat with store and track your order
              </p> */}

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={goHome}
                  className="flex-1 px-4 py-3 border border-gray-300 text-[#000000] text-[12px] rounded-lg font-medium hover:bg-gray-50"
                >
                  Home
                </button>
                <button
                  onClick={goToOrderDetails}
                  className="flex-1 px-4 py-3 bg-[#E53E3E] text-[12px] text-white rounded-lg font-medium hover:bg-red-600"
                >
                  Order Details
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartCheckout;
