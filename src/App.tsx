// import { useState } from 'react'
import './App.css'
import Header from './pages/layout/header';
import PWABadge from './PWABadge';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Services from './pages/services/Services';
import AllServices from './pages/services/Allservices';
import  ServiceDetails from './pages/services/ServiceDetails';
import Categories from './pages/categories/Categories';
import PhonesTablets from './pages/categories/PhonesTablets';
import ProductDetail from './pages/categories/ProductDetail';
import Home from './pages/home/HomePage';
import Feed from './pages/feed/Feed';
import Chat from './pages/chat/Chat';
import ChatStore from './pages/chat/ChatStore';
import Stores from './pages/stores/Stores';
import StoreDetail from './pages/stores/StoreDetail';
import FollowedStoreDetail from './pages/settings/FollowedStoreDetail';
import Settings from './pages/settings/Settings';
import EditProfile from './pages/settings/EditProfile';
import SavedAddresses from './pages/settings/SavedAddresses';
import SavedItems from './pages/settings/SavedItems';
import Orders from './pages/settings/Orders';
import FollowedStores from './pages/settings/FollowedStores';
import Reviews from './pages/settings/Reviews';
import Referrals from './pages/settings/Referrals';
import Support from './pages/settings/Support';
import FAQs from './pages/settings/FAQs';
import LoyaltyPoints from './pages/settings/LoyaltyPoints';
import SellerLeaderboard from './pages/settings/SellerLeaderboard';
import SearchPage from './pages/SearchPage';
import Cart from './pages/cart/Cart';
import CartCheckout from './pages/cart/CartCheckout';
import OrderDetails from './pages/cart/OrderDetails';
import LoginPage from './pages/user/LoginPage';
import RegistrationPage from './pages/user/RegistrationPage';





function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/all-services" element={<AllServices />} />
          <Route path="/service-details/:id" element={<ServiceDetails />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/phones-tablets" element={<PhonesTablets />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/chat/:id" element={<ChatStore />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/stores/:id" element={<StoreDetail />} />
          <Route path="/stores/followed-stores/:id" element={<FollowedStoreDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/checkout" element={<CartCheckout />} />
          <Route path="/order-details" element={<OrderDetails />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegistrationPage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/settings" element={<Settings />} >
            <Route path="edit-profile" element={<EditProfile />} />
            <Route path="saved-addresses" element={<SavedAddresses />} />
            <Route path="saved-items" element={<SavedItems />} />
            <Route path="orders" element={<Orders />} />
            <Route path="followed-stores" element={<FollowedStores />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="referrals" element={<Referrals />} />
            <Route path="support" element={<Support />} />
            <Route path="faqs" element={<FAQs />} />
            <Route path="loyalty-points" element={<LoyaltyPoints />} />
            <Route path="seller-leaderboard" element={<SellerLeaderboard />} />
          </Route>
          {/* Add other routes here */}
        </Routes>
      </BrowserRouter>
      </CartProvider>
      <PWABadge />
    </>
  );
}

export default App
