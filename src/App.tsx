// import { useState } from 'react'
import './App.css'
import Header from './pages/layout/header';
import PWABadge from './PWABadge';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from './pages/services/Services';
import AllServices from './pages/services/Allservices';
import ServiceDetails from './pages/services/ServiceDetails';
import Categories from './pages/categories/Categories';
import PhonesTablets from './pages/categories/PhonesTablets';
import Home from './pages/home/HomePage';
import Feed from './pages/feed/Feed';
import Chat from './pages/chat/Chat';
import Stores from './pages/stores/Stores';
import Settings from './pages/settings/Settings';





function App() {
  return (
    <>

      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/all-services" element={<AllServices />} />
        <Route path="/service-details/:id" element={<ServiceDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/phones-tablets" element={<PhonesTablets />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/settings" element={<Settings />} />
        {/* Add other routes here */}
      </Routes>
    </BrowserRouter>
      <PWABadge />
    </>
  );
}

export default App
