import React, { useState } from "react";
import IMAGES from "../../constants";

interface RegistrationPopupProps {
  open: boolean;
  onClose: () => void;
  onSwitchToLogin?: () => void;
}

const RegistrationPopup: React.FC<RegistrationPopupProps> = ({ open, onClose, onSwitchToLogin }) => {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [referral, setReferral] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-brightness-50">
      <div className="bg-white rounded-3xl flex w-[876px] max-w-full overflow-hidden shadow-2xl relative">
        {/* Left Side Image */}
        <div className="w-1/2 bg-[#E53E3E] flex items-center justify-center p-0">
          <img src={IMAGES.loginimg} alt="register visual" className="object-cover w-full h-full" />
        </div>
        {/* Right Side Form */}
        <div className="w-1/2 p-4 flex flex-col items-center relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-700"><img src={IMAGES.xcircle} alt="X" className="w-8 h-8 mr-2 cursor-pointer" /></button>
          <h2 className="text-2xl font-bold text-[#E53E3E] mt-10 mb-2">Register</h2>
          <p className="text-gray-500 mb-6">Create a free account today</p>
          <form className="w-full flex flex-col gap-4">
            <input type="text" placeholder="Username" className="bg-[#F7F7F7] rounded-xl px-4 py-3 border border-[#E5E5E5] outline-none text-gray-700" value={username} onChange={e => setUsername(e.target.value)} />
            <input type="text" placeholder="Full Name" className="bg-[#F7F7F7] rounded-xl px-4 py-3 border border-[#E5E5E5] outline-none text-gray-700" value={fullName} onChange={e => setFullName(e.target.value)} />
            <input type="email" placeholder="Email Address" className="bg-[#F7F7F7] rounded-xl px-4 py-3 border border-[#E5E5E5] outline-none text-gray-700" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="tel" placeholder="Phone Number" className="bg-[#F7F7F7] rounded-xl px-4 py-3 border border-[#E5E5E5] outline-none text-gray-700" value={phone} onChange={e => setPhone(e.target.value)} />
            <div className="flex items-center bg-[#F7F7F7] rounded-xl px-4 py-3 border border-[#E5E5E5]">
              <input type="text" placeholder="Location" className="bg-transparent outline-none flex-1 text-gray-700" value={location} onChange={e => setLocation(e.target.value)} />
              <span className="ml-2"><img src={IMAGES.dropdown} alt="Select Location" className="w-5 h-5 opacity-70" /></span>
            </div>
            <div className="flex items-center bg-[#F7F7F7] rounded-xl px-4 py-3 border border-[#E5E5E5]">
              <input type={showPassword ? "text" : "password"} placeholder="Password" className="bg-transparent outline-none flex-1 text-gray-700" value={password} onChange={e => setPassword(e.target.value)} />
              <button type="button" className="ml-2 text-gray-400 hover:text-gray-700" onClick={() => setShowPassword((prev) => !prev)} tabIndex={0} aria-label={showPassword ? "Hide password" : "Show password"}>
                <img src={IMAGES.eye} alt={showPassword ? "Hide password" : "Show password"} className="w-5 h-5 mr-2 cursor-pointer" />
              </button>
            </div>
            <input type="text" placeholder="Referral Code (Optional)" className="bg-[#F7F7F7] rounded-xl px-4 py-3 border border-[#E5E5E5] outline-none text-gray-700" value={referral} onChange={e => setReferral(e.target.value)} />
            <button type="submit" className="bg-[#E53E3E] text-white rounded-xl py-3 font-semibold mt-2">Register</button>
            <button type="button" className="bg-gray-200 text-gray-900 rounded-xl py-3 font-semibold" onClick={onSwitchToLogin}>Already have an account? Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPopup;
