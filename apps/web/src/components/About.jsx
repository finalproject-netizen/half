import React from 'react';
import { motion } from 'framer-motion';
const About = () => {
  return <section id="about" className="py-24 bg-[#0C0D0D] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          amount: 0.3
        }} transition={{
          duration: 0.8,
          ease: 'easeOut'
        }}>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img className="w-full h-full object-cover" alt="Modern office with creative team working on computers" src="https://horizons-cdn.hostinger.com/67480a36-8c9d-4ecc-96b3-50d8bba2ee5f/charlesdeluvio-lks7vei-eag-unsplash-7Or6F.jpg" />
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          amount: 0.3
        }} transition={{
          duration: 0.8,
          ease: 'easeOut'
        }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white uppercase">
              Tentang Produk <span className="text-accent-purple">Pendidikan</span>
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Perangkat Pembelajaran</h3>
                <p className="text-lg text-gray-400">Memuat teknologi, aplikasi, dan perangkat digital yang mendukung pengajaran dan pembelajaran.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Penyesuaian Pembelajaran</h3>
                <p className="text-lg text-gray-400">Menjadi layanan personalisasi yang menyesuaikan metode dan materi pembelajaran sesuai karakteristik peserta didik, budaya, dan kurikulum.</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-24">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          amount: 0.3
        }} transition={{
          duration: 0.8,
          ease: 'easeOut'
        }} className="lg:order-last">
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img className="w-full h-full object-cover" alt="Diverse team collaborating around a table with laptops and notes" src="https://horizons-cdn.hostinger.com/67480a36-8c9d-4ecc-96b3-50d8bba2ee5f/michael-t-rxri-ho62y4-unsplash-2-tvxRc.jpg" />
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          amount: 0.3
        }} transition={{
          duration: 0.8,
          ease: 'easeOut'
        }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white uppercase">
              Nilai Utama yang <span className="text-accent-purple">Ditawarkan</span>
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Ekosistem Terintegrasi</h3>
                <p className="text-lg text-gray-400">Semua perangkat, pembaruan, dan penyesuaian pembelajaran terhubung melalui satu sistem pusat data yang aman dan terstruktur.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Penyesuaian Adaptif</h3>
                <p className="text-lg text-gray-400">Semua produk dan layanan dirancang mengikuti perkembangan kurikulum, teknologi, dan kebutuhan lokal masing-masing mitra pendidikan.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default About;