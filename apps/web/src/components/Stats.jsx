import React from 'react';
import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
const AnimatedCounter = ({
  to,
  suffix
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5
  });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    // Handle decimal values for stats like ratings
    const isDecimal = to % 1 !== 0;
    const increment = isDecimal ? to / steps : Math.ceil(to / steps);
    let currentCount = 0;
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? parseFloat(currentCount.toFixed(1)) : Math.ceil(currentCount));
      }
    }, interval);
    return () => clearInterval(timer);
  }, [isInView, to]);
  return <span ref={ref}>{count}{suffix}</span>;
};
const defaultStats = [{
  value: 100,
  suffix: '+',
  label: 'Produk Dibuat',
  description: 'menyediakan 100+ Produk Pendidikan didalam layanan.'
}, {
  value: 100,
  suffix: '%',
  label: 'Efisiensi Nilai',
  description: 'Produk Peneliti memiliki nilai guna tersendiri.'
}, {
  value: 200,
  suffix: '+',
  label: 'Ide Inovasi',
  description: 'Terdapat berbagai inovasi yang bisa diambil oleh peneliti dalam layanan untuk mengembangkan produk.'
}, {
  value: 75,
  suffix: '+',
  label: 'Teknologi Digital',
  description: 'Penyediaan produk yang didukung dalam bentuk digital.'
}];
const Stats = ({
  customStats
}) => {
  const stats = customStats || defaultStats;
  const isProjectPage = !!customStats;
  return <section id="stats-section" className="py-24 bg-[#0C0D0D]">
      <div className="container mx-auto px-6">
        {!isProjectPage && <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase">
                Hasil <span className="text-accent-purple">Produk Kami!</span>
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-lg text-gray-400 max-w-md">
                Menyediakan produk pendidikan yang memudahkan, dengan layanan dan produk yang dikumpulkan.
              </p>
            </div>
          </div>}
        
        {isProjectPage && <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase">
                    Dampak <span className="text-accent-purple">Produk</span>
                </h2>
            </div>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(stat => <div key={stat.label} className="bg-[#1E1E2A] p-8 rounded-2xl h-full">
              <div className="text-5xl md:text-6xl font-bold text-white mb-6">
                <AnimatedCounter to={stat.value} suffix={stat.suffix} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{stat.label}</h3>
                <p className="text-gray-400">{stat.description}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Stats;