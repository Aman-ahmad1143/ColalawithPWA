import React, { useState } from "react";
import Cookies from "js-cookie";
import IMAGES from "../../constants";

interface LoginPopupProps {
  open: boolean;
  onClose: () => void;
  onSwitchToRegister?: () => void;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ open, onClose, onSwitchToRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  if (!open) return null;
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login success
    Cookies.set("isLoggedIn", "true", { expires: 7 });
    if (onClose) onClose();
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  backdrop-brightness-50">
      <div className="bg-white rounded-3xl flex w-[786px] max-w-full overflow-hidden shadow-2xl relative">
        {/* Left Side Image */}
        <div className="w-1/2 bg-[#E53E3E] flex items-center justify-center p-0">
          <img src={IMAGES.loginimg} alt="login visual" className="object-cover w-full h-full" />
        </div>
        {/* Right Side Form */}
        <div className="w-1/2 p-4 flex flex-col items-center relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-700"><img src={IMAGES.xcircle} alt="X" className="w-8 h-8 mr-2 cursor-pointer" /></button>
          <h2 className="text-2xl font-bold text-[#E53E3E] mt-10 mb-2">Login</h2>
          <p className="text-gray-500 mb-6">Login to you account</p>
          <form className="w-full flex flex-col gap-4" onSubmit={handleLogin}>
            <div className="flex items-center bg-[#F7F7F7] rounded-xl px-4 py-3 border border-[#E5E5E5]">
              <img src={IMAGES.sms} alt="email" className="w-5 h-5 mr-2 opacity-70" />
              <input
                type="email"
                placeholder="Enter email address"
                className="bg-transparent outline-none flex-1 text-gray-700"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-center bg-[#F7F7F7] rounded-xl px-4 py-3 border border-[#E5E5E5]">
              <img src={IMAGES.lock} alt="password" className="w-5 h-5 mr-2 opacity-70" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="bg-transparent outline-none flex-1 text-gray-700"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="ml-2 text-gray-400 hover:text-gray-700"
                onClick={() => setShowPassword((prev) => !prev)}
                tabIndex={0}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <img src={IMAGES.eye} alt={showPassword ? "Hide password" : "Show password"} className="w-5 h-5 mr-2 cursor-pointer" />
              </button>
            </div>
            <button type="submit" className="bg-[#E53E3E] text-white rounded-xl py-3 font-semibold mt-2">Login</button>
            <button type="button" className="bg-gray-200 text-gray-900 rounded-xl py-3 font-semibold" onClick={onSwitchToRegister}>Create Account</button>
          </form>
          <button className="mt-4 text-[#E53E3E] text-sm font-medium hover:underline">Forgot Password ?</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
