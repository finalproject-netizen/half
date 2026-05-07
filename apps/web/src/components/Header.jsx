import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '@/hooks/useCart.jsx';

const Header = ({ setIsCartOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const itemCount = cartItems ? cartItems.reduce((sum, item) => sum + item.quantity, 0) : 0;

  const navLinks = [{
    name: 'Layanan',
    href: '/#services'
  }, {
    name: 'Tentang',
    href: '/#about'
  }, {
    name: 'Produk',
    href: '/#portfolio'
  }, {
    name: 'Testimoni',
    href: '/#testimonials'
  }, {
    name: 'Toko',
    href: '/store'
  }];

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSmoothScroll = e => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    
    // For normal paths without hash
    if (!href.includes('#')) {
      navigate(href);
      if (isOpen) setIsOpen(false);
      return;
    }

    const [path, id] = href.split('#');
    if (path === '/' && id) {
      navigate(path);
      setTimeout(() => {
        const targetElement = document.getElementById(id);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      navigate(href);
    }
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const handleHomeClick = e => {
    e.preventDefault();
    navigate('/');
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const handleCTA = () => {
    navigate('/contact');
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-[#0C0D0D]/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          <Link to="/" onClick={handleHomeClick} className="text-2xl font-bold text-white tracking-wider">
            PERPUS
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} onClick={handleSmoothScroll} className="text-gray-300 hover:text-white transition-colors relative group">
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-accent-purple transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => setIsCartOpen && setIsCartOpen(true)} 
              className="relative p-2 text-white hover:text-accent-purple transition-colors"
              aria-label="Open Cart"
            >
              <ShoppingCart size={24} />
              {itemCount > 0 && (
                <span className="absolute top-0 right-0 bg-accent-purple text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full transform translate-x-1/4 -translate-y-1/4">
                  {itemCount}
                </span>
              )}
            </button>
            <Button className="bg-accent-purple text-white hover:bg-accent-purple/90 group rounded-full" onClick={handleCTA}>
              Layanan <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: "-100%" }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: "-100%" }} transition={{ duration: 0.5, ease: 'easeInOut' }} className="fixed inset-0 bg-[#0C0D0D] z-50 md:hidden">
            <div className="container mx-auto px-6 h-full flex flex-col">
              <div className="flex justify-between items-center h-20">
                <Link to="/" onClick={handleHomeClick} className="text-2xl font-bold text-white tracking-wider">
                  PERPUS
                </Link>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => { setIsCartOpen && setIsCartOpen(true); setIsOpen(false); }} 
                    className="relative p-2 text-white hover:text-accent-purple transition-colors"
                    aria-label="Open Cart"
                  >
                    <ShoppingCart size={24} />
                    {itemCount > 0 && (
                      <span className="absolute top-0 right-0 bg-accent-purple text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full transform translate-x-1/4 -translate-y-1/4">
                        {itemCount}
                      </span>
                    )}
                  </button>
                  <button onClick={() => setIsOpen(false)} className="text-white">
                    <X size={28} />
                  </button>
                </div>
              </div>
              <nav className="flex-grow flex flex-col justify-center items-center gap-8">
                {navLinks.map((link, index) => (
                  <motion.a key={link.name} href={link.href} onClick={handleSmoothScroll} className="text-3xl font-semibold text-gray-300 hover:text-accent-purple transition-colors" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}>
                    {link.name}
                  </motion.a>
                ))}
              </nav>
              <div className="py-8 flex flex-col gap-4">
                <Button className="bg-accent-purple text-white hover:bg-accent-purple/90 group w-full text-lg py-6 rounded-full" onClick={handleCTA}>
                    Memulai <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;