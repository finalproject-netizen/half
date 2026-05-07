import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import TrustedClients from '@/components/TrustedClients';
import Services from '@/components/Services';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Stats from '@/components/Stats';
import CTA from '@/components/CTA';
import SectionAnimator from '@/components/SectionAnimator';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>PERBAIKI PENDIDIKAN UNTUK SEMUA</title>
        <meta name="description" content="PERPUS - Improving education for all through innovative educational products and services. Integrated platform for sustainable educational product distribution." />
      </Helmet>
      <Hero />
      <SectionAnimator><TrustedClients /></SectionAnimator>
      <SectionAnimator><Services /></SectionAnimator>
      <About />
      <SectionAnimator><Portfolio /></SectionAnimator>
      <SectionAnimator><Testimonials /></SectionAnimator>
      <SectionAnimator><Stats /></SectionAnimator>
      <SectionAnimator><CTA /></SectionAnimator>
    </>
  );
};

export default Home;