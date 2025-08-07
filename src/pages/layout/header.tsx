import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
// import LoginPopup from "../User/LoginPopup";
import LoginPopup from "../../pages//user/LoginPopup";
import RegistrationPopup from "../../pages//user/RegistrationPopup";
import IMAGES from "../../constants";
import "../../index.css";

const Header: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showRegistrationPopup, setShowRegistrationPopup] = useState(false);
  const [showImageSearchPopup, setShowImageSearchPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  useEffect(() => {
    setIsLoggedIn(Cookies.get("isLoggedIn") === "true");
  }, [showLoginPopup]);

  const handleFileUpload = (file: File) => {
    console.log('File selected:', file);
    // Add your file upload logic here
    // For now, just close the popup after file selection
    setShowImageSearchPopup(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFileUpload(files[0]);
    }
  };
  return (
    <header className="bg-[#E53E3E] rounded-b-4xl px-5 pb-3">
      <div className="max-w-[1280px] mx-auto">
        <div className="head_top flex px-4 gap-5 items-center justify-evenly">
          <img src={IMAGES.logo} className="w-35" alt="Colala Mall Logo" />

          <div className="inp flex items-center bg-white rounded-xl px-4 shadow w-[420px] h-[60px] relative">
            <input
              type="text"
              placeholder="Search any product, shop or category"
              className="flex-grow outline-none text-gray-600 placeholder-gray-400 bg-transparent "
            />
            <div className="relative">
              <img
                src={IMAGES.camera}
                alt="Camera Icon"
                className="w-5 h-5 ml-3 cursor-pointer"
                onClick={() => setShowImageSearchPopup(!showImageSearchPopup)}
              />
              
              {/* Image Search Dropdown */}
              {showImageSearchPopup && (
                <div className="absolute right-[-200px] top-12  w-108 bg-white rounded-4xl shadow-lg z-50 p-6 ">
                  

                  {/* Title */}
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Search by Image</h3>
                    <p className="text-xs text-gray-600">Find products by uploading an image</p>
                  </div>

                  {/* Image upload area */}
                  <div 
                    className={`border-2 border-dashed rounded-xl p-6 py-9 text-center cursor-pointer transition-colors ${
                      isDragOver 
                        ? 'border-[#E53E3E] bg-red-50' 
                        : 'border-gray-300 bg-gray-50 hover:bg-gray-100'
                    }`}
                    onClick={() => document.getElementById('image-upload-input')?.click()}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    <div className="flex flex-col items-center">
                      {/* Image icon placeholder */}
                      <div className="mb-3">
                        <svg width="40" height="40" viewBox="0 0 80 80" fill="none" className="text-gray-400">
                          <path d="M66.6667 13.3333H13.3333C9.65139 13.3333 6.66667 16.3181 6.66667 20V60C6.66667 63.6819 9.65139 66.6667 13.3333 66.6667H66.6667C70.3486 66.6667 73.3333 63.6819 73.3333 60V20C73.3333 16.3181 70.3486 13.3333 66.6667 13.3333ZM66.6667 20V44.6667L56.6667 34.6667C55.5621 33.5621 54.1014 32.9514 52.5833 32.9514C51.0653 32.9514 49.6046 33.5621 48.5 34.6667L35 48.1667L28.5 41.6667C27.3954 40.5621 25.9347 39.9514 24.4167 39.9514C22.8986 39.9514 21.4379 40.5621 20.3333 41.6667L13.3333 48.6667V20H66.6667ZM26.6667 33.3333C28.8768 33.3333 30.6667 31.5435 30.6667 29.3333C30.6667 27.1232 28.8768 25.3333 26.6667 25.3333C24.4565 25.3333 22.6667 27.1232 22.6667 29.3333C22.6667 31.5435 24.4565 33.3333 26.6667 33.3333Z" fill="currentColor"/>
                        </svg>
                      </div>
                      
                      <p className="text-gray-500 text-sm mb-3">Drop image here</p>
                      
                      {/* Upload button */}
                      <button 
                        className="bg-[#E53E3E] text-white px-7 py-3 rounded-lg text-[10px] font-semibold hover:bg-red-600 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          document.getElementById('image-upload-input')?.click();
                        }}
                      >
                        Upload image
                      </button>
                    </div>
                  </div>

                  {/* Hidden file input */}
                  <input
                    id="image-upload-input"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        handleFileUpload(e.target.files[0]);
                      }
                    }}
                  />
                </div>
              )}
            </div>
          </div>
      
      <div className="flex items-center gap-8 text-white pr-4">
        {/* All Categories Dropdown */}
        <div className="relative">
          <button
            className="bg-white text-black rounded-xl flex items-center gap-2 px-6 py-4 h-[60px] cursor-pointer shadow"
            // onMouseEnter={() => setShowDropdown(true)}
            
            onClick={() => setShowDropdown((prev) => !prev)}
            type="button"
          >
            <img src={IMAGES.camera} alt="Category Icon" className="w-6 h-6" />
            <span>All Categories</span>
            <img src={IMAGES.dropdown} alt="Dropdown Arrow" className="w-3 h-3" />
          </button>
          {showDropdown && (
            <div className="absolute left-[-50px] mt-2 w-72 text-gray-950 bg-white rounded-3xl shadow-lg z-10 py-4 flex flex-col gap-2">
              {/* Example categories with icons, replace with your own icons and names */}
              <div className="flex items-center rounded-xl gap-3 px-6 py-2 hover:bg-gray-200 cursor-pointer">
                
                <span className="inline-block  w-5 h-5"><img src={IMAGES.phone} alt="Phones & Tablets" /></span>
                <a href="#"> <span>Phones & Tablets</span></a>
              </div>
              <div className="flex items-center rounded-xl gap-3 px-6 py-2 hover:bg-gray-200 hover: cursor-pointer">
                
                <span className="inline-block  w-5 h-5"><img src={IMAGES.fashion} alt="Fashion" /></span>
                <a href="#"> <span>Fashion</span></a>
              </div>
              <div className="flex items-center rounded-xl gap-3 px-6 py-2 hover:bg-gray-200 cursor-pointer">
                
                <span className="inline-block  w-5 h-5"><img src={IMAGES.home} alt="Home & Office" /></span>
                <a href="#"> <span>Home & Office</span></a>
              </div>
              <div className="flex items-center rounded-xl gap-3 px-6 py-2 hover:bg-gray-200 cursor-pointer">
                
                <span className="inline-block  w-5 h-5"><img src={IMAGES.electronics} alt="Electronics" /></span>
                <a href="#"> <span>Electronics</span></a>
              </div>
              <div className="flex items-center rounded-xl gap-3 px-6 py-2 hover:bg-gray-200 cursor-pointer">
                
                <span className="inline-block  w-5 h-5"><img src={IMAGES.computing} alt="Computing" /></span>
                <a href="#"> <span>Computing</span></a>
              </div>
              <div className="flex items-center rounded-xl gap-3 px-6 py-2 hover:bg-gray-200 cursor-pointer">
                
                <span className="inline-block  w-5 h-5"><img src={IMAGES.grocery} alt="Grocery" /></span>
                <a href="#"> <span>Grocery</span></a>
              </div>
              <div className="flex items-center rounded-xl gap-3 px-6 py-2 hover:bg-gray-200 cursor-pointer">
                
                <span className="inline-block  w-5 h-5"><img src={IMAGES.automobiles} alt="Automobiles" /></span>
                <a href="#"> <span>Automobiles</span></a>
              </div>
              <div className="flex items-center rounded-xl gap-3 px-6 py-2 hover:bg-gray-200 cursor-pointer">
                
                <span className="inline-block  w-5 h-5"><img src={IMAGES.garden} alt="Garden & Outdoors" /></span>
                <a href="#"> <span>Garden & Outdoors</span></a>
              </div>
              <div className="flex items-center rounded-xl gap-3 px-6 py-2 hover:bg-gray-200 cursor-pointer">
                
                <span className="inline-block  w-5 h-5"><img src={IMAGES.gaming} alt="Gaming" /></span>
                <a href="#"> <span>Gaming</span></a>
              </div>
              <div className="flex items-center rounded-xl gap-3 px-6 py-2 hover:bg-gray-200 cursor-pointer">
                
                <span className="inline-block  w-5 h-5"><img src={IMAGES.sporting} alt="Sporting Goods" /></span>
                <a href="#"> <span>Sporting Goods</span></a>
              </div>
              <div className="flex items-center rounded-xl gap-3 px-6 py-2 hover:bg-gray-200 cursor-pointer">
                
                <span className="inline-block  w-5 h-5"><img src={IMAGES.baby} alt="Baby Products" /></span>
                <a href="#"> <span>Baby Products</span></a>
              </div>
            </div>
          )}
        </div>

        {/* Sign In / Register Dropdown */}
        <div className="relative">
          {!isLoggedIn ? (
            <>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setShowUserDropdown((prev) => !prev)}
              >
                <img src={IMAGES.user} alt="User Icon" className="w-8 h-8" />
                <div className="flex flex-col leading-tight ">
                  <span className="text-sm">Welcome</span>
                  <span className="font-semibold text-lg">Sign in/Register</span>
                </div>
              </div>
              {showUserDropdown && (
                <div className="absolute right-0 mt-2 w-[430px] bg-white rounded-3xl shadow-lg z-20 py-6 px-4 flex flex-col gap-3 text-gray-900" >
                  <button className="bg-[#E53E3E] text-white rounded-xl py-3 font-semibold mb-2 cursor-pointer" onClick={() => { setShowLoginPopup(true); setShowRegistrationPopup(false); }}>Login</button>
                  <button className="bg-gray-100 text-gray-900 rounded-xl py-3 font-semibold mb-4 cursor-pointer" onClick={() => { setShowRegistrationPopup(true); setShowLoginPopup(false); }}>Register</button>
          {/* Login Popup */}
          <LoginPopup 
            open={showLoginPopup} 
            onClose={() => setShowLoginPopup(false)}
            onSwitchToRegister={() => { setShowRegistrationPopup(true); setShowLoginPopup(false); }}
          />
          {/* Registration Popup */}
          <RegistrationPopup
            open={showRegistrationPopup}
            onClose={() => setShowRegistrationPopup(false)}
            onSwitchToLogin={() => { setShowLoginPopup(true); setShowRegistrationPopup(false); }}
          />
                  <div className="flex flex-col gap-2">
                    <a href="/orders" className="flex items-center bg-[#E53E3E] rounded-2xl px-0  shadow-sm   relative">
                      <span className="flex items-center justify-center w-13 h-13 bg-[#E53E3E] rounded-l-xl"><img src={IMAGES.cart} alt="My Orders" className="w-7 h-7" /></span>
                      <div className="pl-4 bg-white hover:bg-[#e0dfdf]  w-full py-5 border border-[#F2F2F2] rounded-2xl font-semibold">My Order</div>
                    </a>
                    <a href="/saved-items" className="flex items-center bg-[#E53EE2] rounded-2xl px-0  shadow-sm  relative">
                      <span className="flex items-center justify-center w-14 h-14  rounded-l-xl"><img src={IMAGES.heart} alt="Saved Items" className="w-7 h-7" /></span>
                      <div className="pl-4 bg-white hover:bg-[#e0dfdf] w-full py-5  border border-[#F2F2F2] rounded-2xl font-semibold">Saved Items</div>
                    </a>
                    <a href="/followed-stores" className="flex items-center bg-[#62e53e] rounded-2xl px-0  shadow-sm  relative">
                      <span className="flex items-center justify-center w-14 h-14  rounded-l-xl"><img src={IMAGES.user} alt="Followed Stores" className="w-7 h-7" /></span>
                      <div className="pl-4 bg-white hover:bg-[#e0dfdf] w-full py-5  border border-[#F2F2F2] rounded-2xl font-semibold">Followed Stores</div>
                    </a>
                    <a href="/reviews" className="flex items-center bg-[#4c3ee5] rounded-2xl px-0  shadow-sm  relative">
                      <span className="flex items-center justify-center w-14 h-14  rounded-l-xl"><img src={IMAGES.star} alt="Reviews" className="w-7 h-7" /></span>
                      <div className="pl-4 bg-white hover:bg-[#e0dfdf] w-full py-5  border border-[#F2F2F2] rounded-2xl font-semibold">Reviews</div>
                    </a>
                    <a href="/referrals" className="flex items-center bg-[#4c3ee5] rounded-2xl px-0  shadow-sm  relative">
                      <span className="flex items-center justify-center w-14 h-14  rounded-l-xl"><img src={IMAGES.users} alt="Referrals" className="w-7 h-7" /></span>
                      <div className="pl-4 bg-white hover:bg-[#e0dfdf] w-full py-5  border border-[#F2F2F2] rounded-2xl font-semibold">Referrals</div>
                    </a>
                    <a href="/support" className="flex items-center bg-[#E5863E] rounded-2xl px-0  shadow-sm  relative">
                      <span className="flex items-center justify-center w-14 h-14  rounded-l-xl"><img src={IMAGES.headset} alt="Support" className="w-7 h-7" /></span>
                      <div className="pl-4 bg-white hover:bg-[#e0dfdf] w-full py-5  border border-[#F2F2F2] rounded-2xl font-semibold">Support</div>
                    </a>
                    <a href="/faqs" className="flex items-center bg-[#3EC9E5] rounded-2xl px-0  shadow-sm  relative">
                      <span className="flex items-center justify-center w-14 h-14  rounded-l-xl"><img src={IMAGES.question} alt="FAQs" className="w-7 h-7" /></span>
                      <div className="pl-4 bg-white hover:bg-[#e0dfdf] w-full py-5  border border-[#F2F2F2] rounded-2xl font-semibold">FAQs</div>
                    </a>
                  </div>
                  <div className="mt-4">
                    <div className="text-sm text-gray-900 mb-2">Others</div>
                      <a href="/faqs" className="flex items-center bg-white hover:bg-[#e0dfdf] rounded-xl px-4 pl-2 py-3 shadow-sm mb-2 relative">
                        <span className="flex items-center justify-center w-13 h-9  rounded-l-xl"><img src={IMAGES.sealPercent} alt="FAQs" className="w-7 h-7" /></span>
                        <div className="">Loyalty Points</div>
                    </a>
                      <a href="/faqs" className="flex items-center bg-white hover:bg-[#e0dfdf] rounded-xl px-4 pl-2 py-3 shadow-sm mb-2 relative">
                        <span className="flex items-center justify-center w-13 h-9  rounded-l-xl"><img src={IMAGES.ranking} alt="FAQs" className="w-7 h-7" /></span>
                        <div className="">Seller Leaderboard</div>
                    </a>
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setShowUserDropdown((prev) => !prev)}
              >
                <img src={IMAGES.avatar_1} alt="User Icon" className="w-8 h-8" />
                <div className="flex flex-col leading-tight ">
                  <span className="text-sm">Qamardeen Abdul Malik</span>
                  <span className="font-semibold text-lg">Lagos, Nigeria</span>
                </div>
              </div>
              {showUserDropdown && (
                <div className="absolute right-0 mt-2 w-[430px] bg-white rounded-3xl shadow-lg z-20 py-6 px-4 flex flex-col gap-3 text-gray-900" >
                  {/* Profile section embedded at the top of dropdown */}
                  <div
                className="flex items-center gap-2 cursor-pointer"
                
              >
                <img src={IMAGES.avatar_1} alt="User Icon" className="w-15 h-15" />
                <div className="flex flex-col leading-tight ">
                  <span className="font-semibold text-lg">Qamardeen Abdul Malik</span>
                  <span className="text-lg">Lagos, Nigeria</span>
                </div>
              </div>
                  <div className="flex flex-col items-center mb-4">
                    <div className="flex bg-[#E53E3E] rounded-2xl px-2 gap-4 w-full justify-center py-2 mb-2 ">
                      <div className="  flex-1 flex  items-center py-2 mx-1 ">
                        <span className="text-xs font-light text-white">Escrow Wallet <span className="text-lg font-bold text-white">₦50,000</span></span>
                        
                        <button className="bg-white text-[#E53E3E] rounded-full px-3 py-1 text-xs cursor-pointer mt-1">View</button>
                      </div>
                      <span className="w-[2px] h-11 self-center  bg-[#CDCDCD]" ></span>
                      <div className="  flex-1 flex  items-center py-2 mx-1">
                        <span className="text-xs font-light text-white">Shopping Wallet <span className="text-lg font-bold text-white">₦50,000</span></span>
                        
                        <button className="bg-white text-[#E53E3E] rounded-full px-3 py-1 cursor-pointer text-xs mt-1">View</button>
                      </div>
                    </div>
                    <button className="bg-[#E53E3E] text-white rounded-xl w-full py-3 px-6 cursor-pointer font-semibold mb-2">Edit Profile</button>
                  </div>
                  <div className="flex flex-col gap-2">
                    <a href="/orders" className="flex items-center bg-[#E53E3E] rounded-2xl px-0  shadow-sm   relative">
                      <span className="flex items-center justify-center w-13 h-13 bg-[#E53E3E] rounded-l-xl"><img src={IMAGES.cart} alt="My Orders" className="w-7 h-7" /></span>
                      <div className="pl-4 bg-white hover:bg-[#e0dfdf]  w-full py-5 border border-[#F2F2F2] rounded-2xl font-semibold">My Order</div>
                    </a>
                    <a href="/saved-items" className="flex items-center bg-[#E53EE2] rounded-2xl px-0  shadow-sm  relative">
                      <span className="flex items-center justify-center w-14 h-14  rounded-l-xl"><img src={IMAGES.heart} alt="Saved Items" className="w-7 h-7" /></span>
                      <div className="pl-4 bg-white hover:bg-[#e0dfdf] w-full py-5  border border-[#F2F2F2] rounded-2xl font-semibold">Saved Items</div>
                    </a>
                    <a href="/followed-stores" className="flex items-center bg-[#62e53e] rounded-2xl px-0  shadow-sm  relative">
                      <span className="flex items-center justify-center w-14 h-14  rounded-l-xl"><img src={IMAGES.user} alt="Followed Stores" className="w-7 h-7" /></span>
                      <div className="pl-4 bg-white hover:bg-[#e0dfdf] w-full py-5  border border-[#F2F2F2] rounded-2xl font-semibold">Followed Stores</div>
                    </a>
                    <a href="/reviews" className="flex items-center bg-[#4c3ee5] rounded-2xl px-0  shadow-sm  relative">
                      <span className="flex items-center justify-center w-14 h-14  rounded-l-xl"><img src={IMAGES.star} alt="Reviews" className="w-7 h-7" /></span>
                      <div className="pl-4 bg-white hover:bg-[#e0dfdf] w-full py-5  border border-[#F2F2F2] rounded-2xl font-semibold">Reviews</div>
                    </a>
                    <a href="/referrals" className="flex items-center bg-[#4c3ee5] rounded-2xl px-0  shadow-sm  relative">
                      <span className="flex items-center justify-center w-14 h-14  rounded-l-xl"><img src={IMAGES.users} alt="Referrals" className="w-7 h-7" /></span>
                      <div className="pl-4 bg-white hover:bg-[#e0dfdf] w-full py-5  border border-[#F2F2F2] rounded-2xl font-semibold">Referrals</div>
                    </a>
                    <a href="/support" className="flex items-center bg-[#E5863E] rounded-2xl px-0  shadow-sm  relative">
                      <span className="flex items-center justify-center w-14 h-14  rounded-l-xl"><img src={IMAGES.headset} alt="Support" className="w-7 h-7" /></span>
                      <div className="pl-4 bg-white hover:bg-[#e0dfdf] w-full py-5  border border-[#F2F2F2] rounded-2xl font-semibold">Support</div>
                    </a>
                    <a href="/faqs" className="flex items-center bg-[#3EC9E5] rounded-2xl px-0  shadow-sm  relative">
                      <span className="flex items-center justify-center w-14 h-14  rounded-l-xl"><img src={IMAGES.question} alt="FAQs" className="w-7 h-7" /></span>
                      <div className="pl-4 bg-white hover:bg-[#e0dfdf] w-full py-5  border border-[#F2F2F2] rounded-2xl font-semibold">FAQs</div>
                    </a>
                  </div>
                  <div className="mt-4">
                    <div className="text-sm text-gray-900 mb-2">Others</div>
                      <a href="/faqs" className="flex items-center bg-white hover:bg-[#e0dfdf] rounded-xl px-4 pl-2 py-3 shadow-sm mb-2 relative">
                        <span className="flex items-center justify-center w-13 h-9  rounded-l-xl"><img src={IMAGES.sealPercent} alt="FAQs" className="w-7 h-7" /></span>
                        <div className="">Loyalty Points</div>
                    </a>
                      <a href="/faqs" className="flex items-center bg-white hover:bg-[#e0dfdf] rounded-xl px-4 pl-2 py-3 shadow-sm mb-2 relative">
                        <span className="flex items-center justify-center w-13 h-9  rounded-l-xl"><img src={IMAGES.ranking} alt="FAQs" className="w-7 h-7" /></span>
                        <div className="">Seller Leaderboard</div>
                    </a>
                  </div>
                  <div>
                    <button 
                    className="text-[#E53E3E] text-left font-semibold text-sm flex hover:bg-[#e0dfdf] rounded-xl py-3 px-4 w-full"
                    onClick={() => {
                      Cookies.set("isLoggedIn", "false", { expires: 7 });
                      setIsLoggedIn(false);
                      setShowUserDropdown(false);
                    }}
                  ><span><img src={IMAGES.signout} alt="" className="w-5 h-5 mr-3" /></span> Logout</button>
                  <button 
                    className="text-gray-400 text-center hover:bg-[#e0dfdf] rounded-xl py-3 px-4 w-full"
                    onClick={() => {
                      Cookies.set("isLoggedIn", "false", { expires: 7 });
                      setIsLoggedIn(false);
                      setShowUserDropdown(false);
                    }}
                  >Delete Account</button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Cart */}
        <div className="relative flex items-center ml-3 gap-2 cursor-pointer">
          <img src={IMAGES.cart} alt="Cart Icon" className="w-[30px] h-[30px]" />
          <div className="absolute -top-2 -right-2 bg-white text-black text-xs w-8 h-4 flex items-center justify-center rounded-full">
            0
          </div>
          <span className="text-xs mt-3">Cart</span>
        </div>
      </div>
      </div>
        
      <div className="head_bottom">
        <div className="flex gap-18 text-2xl text-white font-thin px-7">
          
          <a href="/"><h3 className="pb-4 active_page" >Home <div className="underline" /></h3></a>
          <a href="/feed"><h3 className="pb-4 " >Feed <div className="underline" /></h3></a>
          <a href="#"><h3 className="pb-4 " >Chat <div className="underline" /></h3></a>
          <a href="#"><h3 className="pb-4 " >Stores <div className="underline" /></h3></a>
          <a href="#"><h3 className="pb-4 " >Settings <div className="underline" /></h3></a>
        </div>
      </div>
      </div>

    </header>
  );
};

export default Header;
