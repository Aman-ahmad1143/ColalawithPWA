// import { useState } from 'react'
import './App.css'
import Header from './pages/layout/header';
import PWABadge from './PWABadge';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from './pages/services/Services';
import AllServices from './pages/services/Allservices';
import ServiceDetails from './pages/services/ServiceDetails';





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
        {/* Add other routes here */}
      </Routes>
    </BrowserRouter>
      <PWABadge />
    </>
  );
}

export default App
