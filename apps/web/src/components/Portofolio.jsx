import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const projects = [{
  id: 1,
  slug: 'produk-dengan-artificial-intellegence',
  title: 'Produk dengan Artificial Intellegence',
  description: 'Produk yang dioleh peneliti dengan bantuan Artificial Intellegence.',
  imgKey: "dark mode social media app on phone"
}, {
  id: 2,
  slug: 'produk-dengan-auto-layanan',
  title: 'Produk dengan Auto-Layanan',
  description: 'Produk yang diolah peneliti dengan kemudahan sistem layanan.',
  imgKey: "fintech app on phone next to keyboard"
}, {
  id: 3,
  slug: 'produk-pendukung-pembelajaran',
  title: 'Produk Pendukung Pembelajaran',
  description: 'Produk yang diolah peneliti dalam mendukung pembelajaran.',
  imgKey: "digital marketing agency website on phone"
}];

const Portfolio = () => {
  const navigate = useNavigate();
  
  const handleProjectClick = slug => {
    navigate(`/project/${slug}`);
  };

  return (
    <section id="portfolio" className="py-24 bg-[#0C0D0D]">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-end gap-8 mb-16">
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-4 py-1.5 border border-white/20 rounded-full text-sm mb-4 uppercase">
              Produk
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight uppercase">
              Jelajahi <span className="text-accent-purple">Produk Kami</span>
            </h2>
          </div>
          <div className="w-full lg:w-1/3">
            <p className="text-lg text-gray-400">
              Menjalin kerjasama sebagai penyedia layanan produk pendidikan dengan alokasi nilai kepada peneliti
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer" 
            onClick={() => handleProjectClick('produk-dengan-artificial-intellegence')}
          >
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="A dark-themed social media application interface shown on a smartphone" src="https://horizons-cdn.hostinger.com/67480a36-8c9d-4ecc-96b3-50d8bba2ee5f/tech-daily-lkyv7faumza-unsplash-2-FOBCl.jpg" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Produk dengan Artificial Intellegence</h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>

          <div 
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer" 
            onClick={() => handleProjectClick('produk-dengan-auto-layanan')}
          >
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="A fintech application dashboard with payment details, displayed on a smartphone next to a keyboard" src="https://horizons-cdn.hostinger.com/67480a36-8c9d-4ecc-96b3-50d8bba2ee5f/gemini_generated_image_n6u5epn6u5epn6u5-5abrf-2-W2Hon.jpg" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Produk dengan Auto-Layanan</h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>

          <div 
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer" 
            onClick={() => handleProjectClick('produk-pendukung-pembelajaran')}
          >
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="A digital marketing agency website homepage, shown on a smartphone with a sleek, modern design" src="https://horizons-cdn.hostinger.com/67480a36-8c9d-4ecc-96b3-50d8bba2ee5f/sumup-vsyr_mbh7q4-unsplash-2-Hxitr.jpg" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Produk Pendukung Pembelajaran</h3>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;