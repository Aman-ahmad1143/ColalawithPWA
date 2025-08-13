import React, { useState, useEffect } from "react";
import IMAGES from "../../constants";

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState("edit-profile"); // "edit-profile" or "saved-addresses"
  const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);
  const [showAddAddressModal, setShowAddAddressModal] = useState(false);
  const [resetStep, setResetStep] = useState(1); // 1 for email, 2 for code verification, 3 for new password
  const [resetEmail, setResetEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [countdown, setCountdown] = useState(59);
  const [addressForm, setAddressForm] = useState({
    phoneNumber: "",
    state: "",
    localGovernment: "",
    fullAddress: ""
  });
  const [showStateDropdown, setShowStateDropdown] = useState(false);
  const [showLGADropdown, setShowLGADropdown] = useState(false);

  // Nigerian States and LGAs data
  const nigerianStates = [
    { name: "Lagos", lgas: ["Ikeja", "Lagos Island", "Lagos Mainland", "Surulere", "Alimosho", "Oshodi-Isolo", "Mushin", "Ikorodu"] },
    { name: "Abuja (FCT)", lgas: ["Abaji", "Bwari", "Gwagwalada", "Kuje", "Kwali", "Municipal Area Council"] },
    { name: "Kano", lgas: ["Kano Municipal", "Fagge", "Dala", "Gwale", "Tarauni", "Nassarawa", "Ungogo", "Kumbotso"] },
    { name: "Rivers", lgas: ["Port Harcourt", "Obio-Akpor", "Okrika", "Ogu–Bolo", "Eleme", "Tai", "Gokana", "Khana"] },
    { name: "Oyo", lgas: ["Ibadan North", "Ibadan South-West", "Ibadan North-East", "Ibadan North-West", "Ibadan South-East", "Egbeda", "Akinyele", "Lagelu"] }
  ];

  const selectedStateData = nigerianStates.find(state => state.name === addressForm.state);
  const availableLGAs = selectedStateData ? selectedStateData.lgas : [];
  const [savedAddresses] = useState([
    {
      id: 1,
      type: "Default Address",
      phone: "07012345678",
      state: "Lagos",
      lga: "Ikeja",
      fullAddress: "No 2, achossccddf street, Ikeja"
    },
    {
      id: 2,
      type: "Default Address", 
      phone: "07012345678",
      state: "Lagos",
      lga: "Ikeja",
      fullAddress: "No 2, achossccddf street, Ikeja"
    }
  ]);
  const [formData, setFormData] = useState({
    firstName: "MalekeHenrzy",
    fullName: "Qamardeen Abdulmalik", 
    email: "abcde@gmail.com",
    phone: "07012345678"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    console.log("Saving profile data:", formData);
    // Add your save logic here
  };

  const handleLogout = () => {
    console.log("Logging out...");
    // Add your logout logic here
  };

  const handleDeleteAccount = () => {
    console.log("Deleting account...");
    // Add your delete account logic here
  };

  const handleResetPassword = () => {
    console.log("Sending reset code to email:", resetEmail);
    // Add your send code logic here
    setResetStep(2);
    setCountdown(59);
  };

  const handleVerifyCode = () => {
    console.log("Verifying code:", verificationCode);
    // Add your verification logic here
    setResetStep(3);
  };

  const handleSetNewPassword = () => {
    console.log("Setting new password:", newPassword, confirmPassword);
    // Add your password update logic here
    setShowResetPasswordModal(false);
    setResetStep(1);
    setResetEmail("");
    setVerificationCode("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleEditAddress = (addressId: number) => {
    console.log("Editing address:", addressId);
    // Add edit logic here
  };

  const handleDeleteAddress = (addressId: number) => {
    console.log("Deleting address:", addressId);
    // Add delete logic here
  };

  const handleAddNewAddress = () => {
    console.log("Opening add address modal");
    setShowAddAddressModal(true);
  };

  const handleAddressInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAddressForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleStateSelect = (stateName: string) => {
    setAddressForm(prev => ({
      ...prev,
      state: stateName,
      localGovernment: "" // Reset LGA when state changes
    }));
    setShowStateDropdown(false);
  };

  const handleLGASelect = (lgaName: string) => {
    setAddressForm(prev => ({
      ...prev,
      localGovernment: lgaName
    }));
    setShowLGADropdown(false);
  };

  const handleSaveAddress = () => {
    console.log("Saving address:", addressForm);
    // Add your save address logic here
    setShowAddAddressModal(false);
    setAddressForm({
      phoneNumber: "",
      state: "",
      localGovernment: "",
      fullAddress: ""
    });
  };

  const handleCloseAddressModal = () => {
    setShowAddAddressModal(false);
    setShowStateDropdown(false);
    setShowLGADropdown(false);
    setAddressForm({
      phoneNumber: "",
      state: "",
      localGovernment: "",
      fullAddress: ""
    });
  };

  const handleResendCode = () => {
    console.log("Resending code...");
    setCountdown(59);
    // Add resend logic here
  };

  const handleCloseModal = () => {
    setShowResetPasswordModal(false);
    setResetStep(1);
    setResetEmail("");
    setVerificationCode("");
    setNewPassword("");
    setConfirmPassword("");
  };

  // Countdown timer effect
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (resetStep === 2 && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown, resetStep]);

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <div className="max-w-[1080px] mx-auto flex pt-8">
        {/* Left Sidebar */}
        <div className="w-[390px]  rounded-3xl  py-6 px-4 flex flex-col gap-3 text-gray-900">
          {/* Profile section embedded at the top */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={IMAGES.avatar_1} alt="User Icon" className="w-15 h-15" />
            <div className="flex flex-col leading-tight">
              <span className="font-medium text-sm">Qamardeen Abdul Malik</span>
              <span className="text-[10px]">Lagos, Nigeria</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center mb-4">
            <div className="flex bg-[#E53E3E] rounded-2xl px-2 gap-4 w-full justify-center py-2 mb-2">
              <div className="flex-1 flex items-center py-2 mx-1">
                <span className="text-[8px] font-normal text-[#FFFFFF80]">
                  Escrow Wallet <span className="text-sm font-bold text-white">₦50,000</span>
                </span>
                <button className="bg-white text-[#000000] rounded-[10px] px-3 py-1 text-xs cursor-pointer mt-1">
                  View
                </button>
              </div>
              <span className="w-[2px] h-11 self-center bg-[#CDCDCD]"></span>
              <div className="flex-1 flex items-center py-2 mx-1">
                <span className="text-[8px] font-light text-[#FFFFFF80]">
                  Shopping Wallet <span className="text-sm font-bold text-white">₦50,000</span>
                </span>
                <button className="bg-white text-[#000000] rounded-[10px] px-3 py-1 cursor-pointer text-xs mt-1">
                  View
                </button>
              </div>
            </div>
            <button className="bg-[#E53E3E] text-white rounded-xl w-full py-3 px-6 cursor-pointer font-normal text-sm mb-2">
              Edit Profile
            </button>
          </div>
          
          <div className="flex flex-col gap-2">
            <a href="/orders" className="flex items-center bg-[#E53E3E] rounded-2xl px-0 shadow-sm relative">
              <span className="flex items-center justify-center w-13 h-13 bg-[#E53E3E] rounded-l-xl">
                <img src={IMAGES.cart} alt="My Orders" className="w-7 h-7" />
              </span>
              <div className="pl-4 bg-white hover:bg-[#e0dfdf] w-full py-5 border border-[#F2F2F2] rounded-2xl font-semibold">
                My Order
              </div>
            </a>
            
            <a href="/saved-items" className="flex items-center bg-[#E53EE2] rounded-2xl px-0 shadow-sm relative">
              <span className="flex items-center justify-center w-14 h-14 rounded-l-xl">
                <img src={IMAGES.heart} alt="Saved Items" className="w-7 h-7" />
              </span>
              <div className="pl-4 bg-white hover:bg-[#e0dfdf] w-full py-5 border border-[#F2F2F2] rounded-2xl font-semibold">
                Saved Items
              </div>
            </a>
            
            <a href="/followed-stores" className="flex items-center bg-[#62e53e] rounded-2xl px-0 shadow-sm relative">
              <span className="flex items-center justify-center w-14 h-14 rounded-l-xl">
                <img src={IMAGES.user} alt="Followed Stores" className="w-7 h-7" />
              </span>
              <div className="pl-4 bg-white hover:bg-[#e0dfdf] w-full py-5 border border-[#F2F2F2] rounded-2xl font-semibold">
                Followed Stores
              </div>
            </a>
            
            <a href="/reviews" className="flex items-center bg-[#4c3ee5] rounded-2xl px-0 shadow-sm relative">
              <span className="flex items-center justify-center w-14 h-14 rounded-l-xl">
                <img src={IMAGES.star} alt="Reviews" className="w-7 h-7" />
              </span>
              <div className="pl-4 bg-white hover:bg-[#e0dfdf] w-full py-5 border border-[#F2F2F2] rounded-2xl font-semibold">
                Reviews
              </div>
            </a>
            
            <a href="/referrals" className="flex items-center bg-[#4c3ee5] rounded-2xl px-0 shadow-sm relative">
              <span className="flex items-center justify-center w-14 h-14 rounded-l-xl">
                <img src={IMAGES.users} alt="Referrals" className="w-7 h-7" />
              </span>
              <div className="pl-4 bg-white hover:bg-[#e0dfdf] w-full py-5 border border-[#F2F2F2] rounded-2xl font-semibold">
                Referrals
              </div>
            </a>
            
            <a href="/support" className="flex items-center bg-[#E5863E] rounded-2xl px-0 shadow-sm relative">
              <span className="flex items-center justify-center w-14 h-14 rounded-l-xl">
                <img src={IMAGES.headset} alt="Support" className="w-7 h-7" />
              </span>
              <div className="pl-4 bg-white hover:bg-[#e0dfdf] w-full py-5 border border-[#F2F2F2] rounded-2xl font-semibold">
                Support
              </div>
            </a>
            
            <a href="/faqs" className="flex items-center bg-[#3EC9E5] rounded-2xl px-0 shadow-sm relative">
              <span className="flex items-center justify-center w-14 h-14 rounded-l-xl">
                <img src={IMAGES.question} alt="FAQs" className="w-7 h-7" />
              </span>
              <div className="pl-4 bg-white hover:bg-[#e0dfdf] w-full py-5 border border-[#F2F2F2] rounded-2xl font-semibold">
                FAQs
              </div>
            </a>
          </div>
          
          <div className="mt-4">
            <div className="text-sm text-gray-900 mb-2">Others</div>
            <a href="/loyalty" className="flex items-center bg-white hover:bg-[#e0dfdf] rounded-xl px-4 pl-2 py-3 shadow-sm mb-2 relative">
              <span className="flex items-center justify-center w-13 h-9 rounded-l-xl">
                <img src={IMAGES.sealPercent} alt="Loyalty Points" className="w-7 h-7" />
              </span>
              <div>Loyalty Points</div>
            </a>
            <a href="/leaderboard" className="flex items-center bg-white hover:bg-[#e0dfdf] rounded-xl px-4 pl-2 py-3 shadow-sm mb-2 relative">
              <span className="flex items-center justify-center w-13 h-9 rounded-l-xl">
                <img src={IMAGES.ranking} alt="Seller Leaderboard" className="w-7 h-7" />
              </span>
              <div>Seller Leaderboard</div>
            </a>
          </div>
          
          <div>
            <button 
              className="text-[#E53E3E] text-left font-semibold text-sm flex hover:bg-[#e0dfdf] rounded-xl py-3 px-4 w-full"
              onClick={handleLogout}
            >
              <span>
                <img src={IMAGES.signout} alt="" className="w-5 h-5 mr-3" />
              </span>
              Logout
            </button>
            <button 
              className="text-gray-400 text-center hover:bg-[#e0dfdf] rounded-xl py-3 px-4 w-full"
              onClick={handleDeleteAccount}
            >
              Delete Account
            </button>
          </div>
        </div>
        
        {/* Right Content Area */}
        <div className="flex-1 p-8 bg-white rounded-[20px]">
          <div className="max-w-2xl">
            {/* Header */}
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">Edit Profile</h1>

            {/* Tab Navigation */}
            <div className="flex gap-4 mb-6">
              <button 
                onClick={() => setActiveTab("edit-profile")}
                className={`px-8 py-3 w-full rounded-lg font-medium ${
                  activeTab === "edit-profile" 
                    ? "bg-[#E53E3E] text-white" 
                    : "bg-white text-gray-600"
                }`}
              >
                Edit Profile
              </button>
              <button 
                onClick={() => setActiveTab("saved-addresses")}
                className={`px-8 py-3 w-full rounded-lg font-medium ${
                  activeTab === "saved-addresses" 
                    ? "bg-[#E53E3E] text-white" 
                    : "bg-white text-gray-600"
                }`}
              >
                Saved Addresses
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === "edit-profile" ? (
              // Edit Profile Content
              <div className="p-8">
                {/* Profile Image Section */}
                <div className="text-center mb-8">
                  <div className="relative inline-block">
                    <div className="w-25 h-25 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                      <img src={IMAGES.cameraBig || "/camera.png"} alt="Camera" className="w-13 h-13 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Maleekfrenzy"
                    className="w-full px-4 py-4 border border-gray-200 rounded-[15px] focus:ring-2 focus:ring-red-400 focus:border-transparent bg-white"
                  />

                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Qamardeen Abdulmalik"
                    className="w-full px-4 py-4 border border-gray-200 rounded-[15px] focus:ring-2 focus:ring-red-400 focus:border-transparent bg-white"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="abcdef@gmail.com"
                    className="w-full px-4 py-4 border border-gray-200 rounded-[15px] focus:ring-2 focus:ring-red-400 focus:border-transparent bg-white"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="07012345678"
                    className="w-full px-4 py-4 border border-gray-200 rounded-[15px] focus:ring-2 focus:ring-red-400 focus:border-transparent bg-white"
                  />

                  {/* Change Password Section */}
                  <div className="p-4 rounded-[15px] border border-gray-200">
                    <button
                      onClick={() => setShowResetPasswordModal(true)}
                      className="flex items-center justify-between w-full text-left"
                    >
                      <span className="font-medium text-gray-700">Change Password</span>
                      <svg 
                        className="w-5 h-5 text-gray-400"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Save Button */}
                <div className="mt-8">
                  <button
                    onClick={handleSave}
                    className="w-full bg-[#E53E3E] text-white py-4 rounded-lg font-medium hover:bg-red-600 transition-colors"
                  >
                    Save
                  </button>
                </div>
              </div>
            ) : (
              // Saved Addresses Content
              <div className="py-8 ">
                {savedAddresses.map((address, index) => (
                  <div key={address.id} className="mb-6 p-6 border border-gray-200 rounded-[15px] bg-white">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-medium">Address {index + 1}</h3>
                        <span className="bg-[#FF000033] border border-[#E53E3E] text-[#E53E3E] text-xs px-2 py-1 rounded">
                          {address.type}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => handleEditAddress(address.id)}
                          className="bg-[#E53E3E] text-white text-[8px] px-4 py-2 rounded-[20px] hover:bg-red-600 transition-colors"
                        >
                          Edit
                        </button>
                        <button 
                          onClick={() => handleDeleteAddress(address.id)}
                          className="text-[#E53E3E] text-[8px] px-4 py-2 rounded-[20px] hover:bg-red-50 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    
                    <div className="space-y-3  text-[#00000080]">
                      <div>
                        <span className="font-medium text-[10px]">Phone number</span>
                        <p className="text-xs font-normal text-[#000000] pt-2">{address.phone}</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="font-medium text-[10px]">State</span>
                          <p className="text-xs font-normal text-[#000000] pt-2">{address.state}</p>
                        </div>
                        <div>
                          <span className="font-medium text-[10px]">Local Government</span>
                          <p className="text-xs font-normal text-[#000000] pt-2">{address.lga}</p>
                        </div>
                      </div>
                      
                      <div>
                        <span className="font-medium text-[10px]">Full Address</span>
                        <p className="text-xs font-normal text-[#000000] pt-2">{address.fullAddress}</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Add New Address Button */}
                <button
                  onClick={handleAddNewAddress}
                  className="w-full bg-[#E53E3E] text-white py-4 rounded-lg font-medium hover:bg-red-600 transition-colors mt-6"
                >
                  Add New
                </button>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Reset Password Modal */}
      {showResetPasswordModal && (
        <div className="fixed inset-0 backdrop-brightness-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-5 w-[430px] mx-4 relative">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4  flex items-center justify-center hover:bg-gray-300 transition-colors"
            >
              <img src={IMAGES.xCircle || "/XCircle.png"} alt="Close" className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Reset Password</h2>
              
              {resetStep === 1 ? (
                // Step 1: Email Input
                <>
                  <p className="text-gray-600 mb-6">Reset you password via your registered email</p>
                  
                  {/* Email Input */}
                  <div className="relative mb-6">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <img src={IMAGES.sms || "/sms.png"} alt="Email" className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      placeholder="Enter email address"
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-400 focus:border-transparent"
                    />
                  </div>

                  {/* Proceed Button */}
                  <button
                    onClick={handleResetPassword}
                    className="w-full bg-[#E53E3E] text-white py-4 text-sm  rounded-xl font-normal hover:bg-red-600 transition-colors mb-6"
                  >
                    Proceed
                  </button>
                </>
              ) : resetStep === 2 ? (
                // Step 2: Code Verification
                <>
                  <p className="text-gray-600 mb-6">Enter the code we sent to your email.</p>
                  
                  {/* Code Input with Paste Button */}
                  <div className="relative mb-4">
                    <input
                      type="text"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                      placeholder="Enter Code"
                      className="w-full pl-4 pr-20 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-400 focus:border-transparent"
                    />
                    <button
                      onClick={handleResendCode}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#E53E3E] text-sm border border-[#E53E3E] px-3 py-1 rounded-md hover:bg-red-50 transition-colors"
                    >
                      Paste
                    </button>
                  </div>

                  {/* Countdown Text */}
                  <p className="text-gray-600 text-left mb-6">
                    {countdown > 0 ? (
                      <>
                        You can resend code in <span className="text-[#E53E3E] font-medium">00:{countdown < 10 ? `0${countdown}` : countdown}</span>
                      </>
                    ) : (
                      <>
                        You can now{' '}
                        <button
                          onClick={handleResendCode}
                          className="text-[#E53E3E] font-medium underline hover:text-red-600 transition-colors cursor-pointer"
                        >
                          Resend
                        </button>{' '}
                        the code
                      </>
                    )}
                  </p>

                  {/* Proceed Button */}
                  <button
                    onClick={handleVerifyCode}
                    className="w-full bg-[#E53E3E] text-white py-4 text-sm  rounded-xl font-normal hover:bg-red-600 transition-colors mb-6"
                  >
                    Proceed
                  </button>
                </>
              ) : (
                // Step 3: New Password Creation
                <>
                  {/* New Password Input */}
                  <div className="relative mb-4">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <img src={IMAGES.lock || "/lock.png"} alt="Lock" className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type={showNewPassword ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Enter new password"
                      className="w-full pl-12 pr-12 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-400 focus:border-transparent"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2"
                    >
                      <img 
                        src={IMAGES.eye || "/eye.png"} 
                        alt="Toggle visibility" 
                        className="w-5 h-5 text-gray-400"
                      />
                    </button>
                  </div>

                  {/* Confirm Password Input */}
                  <div className="relative mb-6">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <img src={IMAGES.lock || "/lock.png"} alt="Lock" className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Re-Enter new password"
                      className="w-full pl-12 pr-12 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-400 focus:border-transparent"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2"
                    >
                      <img 
                        src={IMAGES.eye || "/eye.png"} 
                        alt="Toggle visibility" 
                        className="w-5 h-5 text-gray-400"
                      />
                    </button>
                  </div>

                  {/* Proceed Button */}
                  <button
                    onClick={handleSetNewPassword}
                    className="w-full bg-[#E53E3E] text-white py-4 text-sm  rounded-xl font-normal hover:bg-red-600 transition-colors mb-6"
                  >
                    Proceed
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Add Address Modal */}
      {showAddAddressModal && (
        <div className="fixed inset-0 backdrop-brightness-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-5 w-[430px] mx-4 relative">
            {/* Close Button */}
            <button
              onClick={handleCloseAddressModal}
              className="absolute top-4 right-4  flex items-center justify-center hover:bg-gray-300 transition-colors"
            >
              <img src={IMAGES.xCircle || "/XCircle.png"} alt="Close" className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Add Address</h2>
              
              {/* Phone Number Input */}
              <div className="relative mb-4">
                <input
                  type="tel"
                  name="phoneNumber"
                  value={addressForm.phoneNumber}
                  onChange={handleAddressInputChange}
                  placeholder="Phone Number"
                  className="w-full pl-4 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-400 focus:border-transparent text-left"
                />
              </div>

              {/* State Dropdown */}
              <div className="relative mb-4">
                <button
                  type="button"
                  onClick={() => setShowStateDropdown(!showStateDropdown)}
                  className="w-full pl-4 pr-12 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-400 focus:border-transparent text-left bg-white flex items-center justify-between"
                >
                  <span className={addressForm.state ? "text-gray-900" : "text-gray-500"}>
                    {addressForm.state || "State"}
                  </span>
                  <svg 
                    className={`w-5 h-5 text-gray-400 transform transition-transform ${showStateDropdown ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {showStateDropdown && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-xl shadow-lg z-10 max-h-48 overflow-y-auto">
                    {nigerianStates.map((state) => (
                      <button
                        key={state.name}
                        onClick={() => handleStateSelect(state.name)}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        {state.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Local Government Dropdown */}
              <div className="relative mb-4">
                <button
                  type="button"
                  onClick={() => setShowLGADropdown(!showLGADropdown)}
                  disabled={!addressForm.state}
                  className={`w-full pl-4 pr-12 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-400 focus:border-transparent text-left bg-white flex items-center justify-between ${
                    !addressForm.state ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <span className={addressForm.localGovernment ? "text-gray-900" : "text-gray-500"}>
                    {addressForm.localGovernment || "Local Government"}
                  </span>
                  <svg 
                    className={`w-5 h-5 text-gray-400 transform transition-transform ${showLGADropdown ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {showLGADropdown && addressForm.state && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-xl shadow-lg z-10 max-h-48 overflow-y-auto">
                    {availableLGAs.map((lga) => (
                      <button
                        key={lga}
                        onClick={() => handleLGASelect(lga)}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        {lga}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Full Address Input */}
              <div className="relative mb-6">
                <textarea
                  name="fullAddress"
                  value={addressForm.fullAddress}
                  onChange={handleAddressInputChange}
                  placeholder="Full Address"
                  rows={4}
                  className="w-full pl-4 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-400 focus:border-transparent text-left resize-none"
                />
              </div>

              {/* Save Button */}
              <button
                onClick={handleSaveAddress}
                className="w-full bg-[#E53E3E] text-white py-4 text-sm rounded-xl font-normal hover:bg-red-600 transition-colors mb-6"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
