import React from 'react';
import CategoriesSection from './CategoriesSection.tsx';
import TopSellingProducts from './TopSellingProducts';
import TopStores from './TopStores';
import AllProducts from './AllProducts';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen max-w-[1280px] mx-auto bg-[#F9F9F9]">
      <CategoriesSection />
      <TopSellingProducts />
      <TopStores />
      <AllProducts />
    </div>
  );
};

export default Home;