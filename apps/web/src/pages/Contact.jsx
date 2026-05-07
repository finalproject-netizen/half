import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: -20
  }
};
const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};
const ContactInfoBlock = ({
  title,
  lines,
  delay
}) => <motion.div initial={{
  opacity: 0,
  y: 20
}} animate={{
  opacity: 1,
  y: 0
}} transition={{
  duration: 0.5,
  delay
}} className="mb-8">
    <h3 className="uppercase text-sm text-gray-400 mb-2 tracking-widest">{title}</h3>
    <div className="space-y-1">
      {lines.map((line, index) => <p key={index} className="text-lg text-gray-200">{line}</p>)}
    </div>
  </motion.div>;
const Contact = () => {
  return <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
      <Helmet>
        <title>Hubungi Layanan kami</title>
        <meta name="description" content="Berkolaborasi dengan kami dalam mengembangkan produk." />
      </Helmet>
      <section className="bg-[#0C0D0D] text-white py-32 sm:py-40"> {/* Increased padding here */}
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column */}
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }}>
              <h1 className="text-6xl md:text-8xl font-bold text-white uppercase mb-6 leading-tight">
                Hubungi <span className="text-accent-purple">Kami</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-sm mb-16">
                Ayo berkolaborasi bersama!
              </p>
              <motion.div className="flex items-center gap-8" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              duration: 0.5,
              delay: 1
            }}>
                  <a href="#" className="text-lg text-gray-300 hover:text-accent-purple transition-colors duration-300">LinkedIn</a>
                  <a href="#" className="text-lg text-gray-300 hover:text-accent-purple transition-colors duration-300">Dribbble</a>
                  <a href="#" className="text-lg text-gray-300 hover:text-accent-purple transition-colors duration-300">Behance</a>
              </motion.div>
            </motion.div>

            {/* Right Column */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div>
                  <ContactInfoBlock title="Proyek Bersama" lines={["projectperpus@takaan.com", "+62 (822) 8928-7120"]} delay={0.4} />
                  <ContactInfoBlock title="Kemitraan" lines={["partnersperpus@takaan.com", "+62 (858) 4014-1793"]} delay={0.6} />
                </div>
                <div>
                  <ContactInfoBlock title="Studio Penyedia" lines={["Muara Bulian, Jambi, Indonesia, 366111"]} delay={0.5} />
                </div>
              </div>

              <motion.div className="overflow-hidden rounded-2xl shadow-2xl shadow-accent-purple/10" initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.8
            }}>
                <img className="w-full h-auto object-cover" alt="Modern office space with creative design elements" src="https://horizons-cdn.hostinger.com/67480a36-8c9d-4ecc-96b3-50d8bba2ee5f/modern-office-concentration-RCQmi.png" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>;
};
export default Contact;