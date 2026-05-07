import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import ProductsList from '@/components/ProductsList.jsx';
import SectionAnimator from '@/components/SectionAnimator.jsx';

const StorePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#0C0D0D] min-h-screen pt-32 pb-24"
    >
      <Helmet>
        <title>Toko - PERPUS</title>
        <meta name="description" content="Jelajahi inovasi produk pendidikan kami untuk pembelajaran." />
      </Helmet>
      <div className="container mx-auto px-6">
        <SectionAnimator>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold uppercase mb-6 text-white">
              Toko <span className="text-accent-purple">Kami</span>
            </h1>
            <p className="text-lg text-gray-400">
              Jelajahi produk pilihan dari produk pendidikan yang didesain untuk memudahkan dan pengalaman belajar.
            </p>
          </div>
        </SectionAnimator>

        <SectionAnimator>
          <ProductsList />
        </SectionAnimator>
      </div>
    </motion.div>
  );
};

export default StorePage;