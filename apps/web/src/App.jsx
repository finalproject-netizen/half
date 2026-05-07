import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from '@/components/Layout.jsx';
import Home from '@/pages/Home.jsx';
import Contact from '@/pages/Contact.jsx';
import Project from '@/pages/Project.jsx';
import StorePage from '@/pages/StorePage.jsx';
import ProductDetailPage from '@/pages/ProductDetailPage.jsx';
import CheckoutSuccessPage from '@/pages/CheckoutSuccessPage.jsx';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="project/:projectId" element={<Project />} />
          <Route path="store" element={<StorePage />} />
          <Route path="product/:id" element={<ProductDetailPage />} />
          <Route path="checkout-success" element={<CheckoutSuccessPage />} />
          <Route path="success" element={<CheckoutSuccessPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;