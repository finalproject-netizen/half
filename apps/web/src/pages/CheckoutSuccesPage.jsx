import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart.jsx';

const CheckoutSuccessPage = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    // Clear cart immediately upon visiting success page
    clearCart();
  }, [clearCart]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-[#0C0D0D] min-h-screen pt-32 pb-24 flex items-center justify-center"
    >
      <Helmet>
        <title>Pembelian Berhasil - PERPUS</title>
      </Helmet>
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-md mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm shadow-2xl shadow-accent-purple/10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 15, delay: 0.2 }}
            className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-10 h-10 text-green-500" />
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-bold uppercase mb-4 text-white">
            Pembelian <span className="text-accent-purple">Berhasil!</span>
          </h1>
          <p className="text-gray-400 mb-8">
            Terimakasih atas pembeliannya. Kami akan memproses permintaanmu sekarang.
          </p>
          <div className="flex flex-col gap-4">
            <Button asChild size="lg" className="w-full bg-accent-purple hover:bg-accent-purple/90 text-white rounded-full">
              <Link to="/store">
                <ShoppingBag className="mr-2 h-5 w-5" /> Lanjutkan Mencari
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full border-white/20 text-white hover:bg-white/10 rounded-full">
              <Link to="/">
                Kembali ke Beranda
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CheckoutSuccessPage;