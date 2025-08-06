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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(Cookies.get("isLoggedIn") === "true");
  }, [showLoginPopup]);
  return (
    <header className="bg-[#E53E3E] rounded-b-4xl px-5 pb-3  ">
      <div className="head_top flex px-4 gap-5 items-center xl:justify-evenly  ">
        <img src={IMAGES.logo} className="xl:w-35 " alt="Colala Mall Logo" />

        <div className="inp flex items-center bg-white rounded-xl px-4  shadow w-[417px] h-[60px] xl:w-[600px]  ">
          <input
            type="text"
            placeholder="Search any product, shop or category"
            className="flex-grow outline-none text-gray-600 placeholder-gray-400 bg-transparent"
          />
          <img
            src={IMAGES.camera}
            alt="Camera Icon"
            className="w-5 h-5 ml-3"
          />
        </div>
      

      
      <div className="flex items-center gap-5 xl:gap-8  text-white pr-4">
        {/* All Categories Dropdown */}
        <div className="relative">
          <button
            className="bg-white text-black rounded-xl flex items-center gap-2 px-4 py-2 h-[60px] cursor-pointer shadow xl:px-6 xl:py-4"
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
                <img src={IMAGES.user} alt="User Icon" className="w-6 h-6 xl:w-8 xl:h-8" />
                <div className="flex flex-col leading-tight ">
                  <span className="text-xs xl:text-sm">Welcome</span>
                  <span className="font-semibold xl:text-lg">Sign in/Register</span>
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
                <img src={IMAGES.avatar_1} alt="User Icon" className="w-6 h-6 xl:w-8 xl:h-8" />
                <div className="flex flex-col leading-tight ">
                  <span className="text-xs xl:text-sm">Qamardeen Abdul Malik</span>
                  <span className="font-semibold xl:text-lg">Lagos, Nigeria</span>
                </div>
              </div>
              {showUserDropdown && (
                <div className="absolute right-0 mt-2 w-[430px] bg-white rounded-3xl shadow-lg z-20 py-6 px-4 flex flex-col gap-3 text-gray-900" >
                  {/* Profile section embedded at the top of dropdown */}
                  <div
                className="flex items-center gap-2 cursor-pointer"
                
              >
                <img src={IMAGES.avatar_1} alt="User Icon" className="w-15 h-15 xl:w-15 xl:h-15" />
                <div className="flex flex-col leading-tight ">
                  <span className="font-semibold text-lg">Qamardeen Abdul Malik</span>
                  <span className=" xl:text-lg">Lagos, Nigeria</span>
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
        <div className="flex gap-18 xl:text-2xl  text-white font-thin">
          
          <a href="#"><h3 className="pb-4 active_page" >Home <div className="underline" /></h3></a>
          <a href="#"><h3 className="pb-4 " >Feed <div className="underline" /></h3></a>
          <a href="#"><h3 className="pb-4 " >Chat <div className="underline" /></h3></a>
          <a href="#"><h3 className="pb-4 " >Stores <div className="underline" /></h3></a>
          <a href="#"><h3 className="pb-4 " >Settings <div className="underline" /></h3></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
