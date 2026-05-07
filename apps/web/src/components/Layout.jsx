import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Toaster } from '@/components/ui/toaster';
import CustomCursor from '@/components/CustomCursor.jsx';
import ShoppingCart from '@/components/ShoppingCart.jsx';

const Layout = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <CustomCursor />
      <div className="min-h-screen bg-[#0C0D0D] text-white overflow-x-hidden flex flex-col">
        <Header setIsCartOpen={setIsCartOpen} />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
        <Toaster />
        <ShoppingCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      </div>
    </>
  );
};

export default Layout;