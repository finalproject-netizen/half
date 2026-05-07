import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Stats from '@/components/Stats';
import SectionAnimator from '@/components/SectionAnimator';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingBag } from 'lucide-react';

// Mock data for projects
const projectData = {
  'produk-dengan-artificial-intellegence': {
    title: 'Produk dengan Artificial Intellegence',
    category: 'Produk Inovasi',
    description: 'Inovasi yang memanfaatkan kecerdasan buatan untuk mendukung proses pembelajaran yang adaptif dan personal dengan menekankan bahwa teknologi digunakan untuk meningkatkan efektivitas pembelajaran.',
    challenge: 'Tantangan utama dalam pengembangan produk ini terletak pada keterbatasan akurasi sistem, kebutuhan data yang besar, serta potensi ketergantungan pengguna terhadap teknologi.',
    solution: 'Solusi yang ditawarkan adalah dengan mengombinasikan sistem AI dengan validasi manusia (guru), serta menyediakan panduan penggunaan agar teknologi tetap bersifat sebagai alat bantu, bukan pengganti peran pendidik.',
    images: {
      hero: {
        alt: 'Main dashboard of a modern banking application',
        key: 'banking application dashboard view'
      },
      gallery: [{
        alt: 'Detailed view of a transaction history page',
        key: 'banking app transaction history detail'
      }, {
        alt: 'Analytics dashboard showing spending habits',
        key: 'banking app spending analytics'
      }, {
        alt: 'Close-up of banking app UI elements',
        key: 'banking app ui elements close up'
      }],
      gallery2: [{
        alt: 'User setting up a new payment on the banking app',
        key: 'user making payment on banking app'
      }, {
        alt: 'Security features page on the banking app',
        key: 'banking app security features'
      }]
    },
    stats: [{
      value: 50,
      suffix: '%',
      label: 'Keseimbangan Produk',
      description: 'Jumlah produk didalam ekosistem layanan Perpus.'
    }, {
      value: 2,
      suffix: 'M+',
      label: 'Kepercayaan Produk',
      description: 'Jumlah orang yang telah percaya dengan produk.'
    }, {
      value: 4.9,
      suffix: '/5',
      label: 'Rating Pengguna',
      description: 'Berbagai ulasan dari pengguna menunjukkan hasil rating.'
    }, {
      value: 90,
      suffix: '%',
      label: 'Respon Layanan',
      description: 'Kecepatan layanan Perpus dalam merespon penggunaan produk.'
    }]
  },
  'produk-dengan-auto-layanan': {
    title: 'Produk dengan Auto-Layanan',
    category: 'Produk Manajemen Pendidikan',
    description: 'Layanan pendidikan yang dirancang agar dapat digunakan secara mandiri oleh pengguna tanpa intervensi langsung dari penyedia yang berfokus pada kemudahan akses, fleksibilitas waktu, serta efisiensi dalam penggunaan.',
    challenge: 'Tantangan yang dihadapi dalam produk ini adalah rendahnya motivasi belajar mandiri, kurangnya interaksi, serta kemungkinan kesulitan pengguna dalam memahami materi tanpa bimbingan langsung.',
    solution: 'Solusi yang ditawarkan adalah dengan menambahkan forum diskusi atau layanan bantuan yang tetap tersedia dalam pengawasan penggunaan produk.',
    images: {
      hero: {
        alt: 'Main dashboard of a fintech application',
        key: 'fintech application dashboard view'
      },
      gallery: [{
        alt: 'A user analyzing stock market data on the fintech platform',
        key: 'user analyzing stock data on fintech platform'
      }, {
        alt: 'Mobile version of the fintech app showing a transaction summary',
        key: 'fintech app mobile transaction summary'
      }, {
        alt: 'Close-up on a pie chart showing portfolio distribution',
        key: 'fintech app portfolio pie chart'
      }],
      gallery2: [{
        alt: 'Card management screen on the fintech app',
        key: 'fintech app card management screen'
      }, {
        alt: 'Security settings page on the fintech dashboard',
        key: 'fintech dashboard security settings page'
      }]
    },
    stats: [{
      value: 40,
      suffix: '%',
      label: 'Keseimbangan Produk',
      description: 'Jumlah produk didalam ekosistem layanan Perpus.'
    }, {
      value: 90,
      suffix: '%',
      label: 'Respon Layanan',
      description: 'Kecepatan layanan Perpus dalam merespon penggunaan produk.'
    }, {
      value: 500,
      suffix: 'K+',
      label: 'Kepercayaan Produk',
      description: 'Jumlah orang yang telah percaya dengan produk.'
    }, {
      value: 90,
      suffix: '%',
      label: 'Umpan Balik Positif',
      description: 'Berbagai umpan balik dari pengguna menunjukkan hasil yang positif.'
    }]
  },
  'produk-pendukung-pembelajaran': {
    title: 'Produk Pendukung Pembelajaran',
    category: 'Produk Perangkat Pembelajaran',
    description: 'Produk yang berfungsi melengkapi proses belajar mengajar, baik dalam bentuk media, alat bantu, maupun bahan ajar dengan menekankan pada peningkatan kualitas pengalaman belajar, keterlibatan siswa, serta kemudahan guru dalam menyampaikan materi.',
    challenge: 'Tantangan dalam pengembangan produk ini meliputi kesesuaian dengan kurikulum, variasi kebutuhan pengguna, serta keterbatasan dalam implementasi di berbagai kondisi sekolah.',
    solution: 'Solusi yang diberikan adalah dengan merancang produk yang fleksibel, berbasis kurikulum yang berlaku, serta menyediakan opsi umpan balik agar dapat disesuaikan dengan kebutuhan pengguna.',
    images: {
      hero: {
        alt: 'Homepage of a digital marketing agency website',
        key: 'digital marketing agency website homepage'
      },
      gallery: [{
        alt: 'Portfolio section of the marketing agency site',
        key: 'marketing agency portfolio section'
      }, {
        alt: 'Contact form and map on the marketing agency site',
        key: 'marketing agency contact form'
      }, {
        alt: 'Team page of the marketing agency',
        key: 'marketing agency team page'
      }],
      gallery2: [{
        alt: 'Blog section of the marketing agency website',
        key: 'marketing agency blog section'
      }, {
        alt: 'Services page of the marketing agency',
        key: 'marketing agency services page'
      }]
    },
    stats: [{
      value: 60,
      suffix: '%',
      label: 'Keseimbangan Produk',
      description: 'Jumlah produk didalam ekosistem layanan Perpus.'
    }, {
      value: 1.2,
      suffix: 's',
      label: 'Kecepatan Akses Produk',
      description: 'Produk tidak bentuk dalam file yang sulit ditemukan atau dibuka.'
    }, {
      value: 90,
      suffix: '%',
      label: 'Respon Layanan',
      description: 'Kecepatan layanan Perpus dalam merespon penggunaan produk.'
    }, {
      value: 1,
      suffix: '#',
      label: 'Terbaik dari tiga produk utama',
      description: 'Merupakan produk unggulan jika dibandingkan dengan dua produk lainnya.'
    }]
  }
};

const pageVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.8
};

const Project = () => {
  const { projectId } = useParams();
  const project = projectData[projectId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0C0D0D] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Produk tidak ditemukan</h1>
          <p className="text-gray-400 mb-8">Produk yang kamu cari sepertinya belum ada.</p>
          <Button asChild className="bg-accent-purple text-white hover:bg-accent-purple/90 rounded-full">
            <Link to="/">Kembali ke Beranda</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition} className="bg-[#0C0D0D] text-white">
      <Helmet>
        <title>{project.title} - Produk</title>
        <meta name="description" content={`Details of the ${project.title} project, showcasing our creative solutions and results.`} />
      </Helmet>

      <main>
        {/* Top Section */}
        <SectionAnimator>
          <header className="pt-48 pb-16">
            <div className="container mx-auto px-6 text-center max-w-4xl">
              <div className="inline-block px-4 py-1.5 border border-white/20 rounded-full text-sm mb-6 uppercase text-accent-purple">
                {project.category}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold uppercase mb-6 text-balance">{project.title}</h1>
              <p className="text-lg md:text-xl text-gray-400">{project.description}</p>
            </div>
          </header>
        </SectionAnimator>
        
        {/* Hero Image */}
        <SectionAnimator>
            <div className="container mx-auto px-6 mb-16">
                 <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-accent-purple/10">
                    <img className="w-full h-full object-cover" alt={project.images.hero.alt} src="https://horizons-cdn.hostinger.com/67480a36-8c9d-4ecc-96b3-50d8bba2ee5f/gemini_generated_image_n6u5epn6u5epn6u5-5ABrF.png" />
                 </div>
            </div>
        </SectionAnimator>

        {/* Gallery */}
        <SectionAnimator>
            <div className="container mx-auto px-6 mb-16">
                <div className="grid grid-cols-1 gap-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="aspect-square rounded-2xl overflow-hidden">
                           <img className="w-full h-full object-cover" alt={project.images.gallery[1].alt} src="https://horizons-cdn.hostinger.com/67480a36-8c9d-4ecc-96b3-50d8bba2ee5f/gemini_generated_image_mxgp1bmxgp1bmxgp-IDwMQ.png" />
                        </div>
                        <div className="aspect-square rounded-2xl overflow-hidden">
                            <img className="w-full h-full object-cover" alt={project.images.gallery[2].alt} src="https://horizons-cdn.hostinger.com/67480a36-8c9d-4ecc-96b3-50d8bba2ee5f/gemini_generated_image_mxgp1bmxgp1bmxgp-1-RqwfI.png" />
                        </div>
                    </div>
                </div>
            </div>
        </SectionAnimator>
        
        {/* Text Section */}
        <SectionAnimator>
            <section className="py-16">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Tantangan</h2>
                        <p className="text-lg text-gray-400 leading-relaxed">{project.challenge}</p>
                    </div>
                     <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Solusi</h2>
                        <p className="text-lg text-gray-400 leading-relaxed">{project.solution}</p>
                    </div>
                </div>
            </section>
        </SectionAnimator>
        
        {/* Second Gallery */}
        <SectionAnimator>
            <div className="container mx-auto px-6 mb-16">
                <div className="aspect-video rounded-2xl overflow-hidden">
                    <img className="w-full h-full object-cover" alt={project.images.gallery2[0].alt} src="https://horizons-cdn.hostinger.com/67480a36-8c9d-4ecc-96b3-50d8bba2ee5f/professional-exchange-BmQpX.png" />
                </div>
            </div>
        </SectionAnimator>

        {/* Stats Section */}
        <Stats customStats={project.stats} />

        {/* Work Together CTA */}
        <SectionAnimator>
            <section className="pt-24 pb-12 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Siap Berkolaborasi dengan Produk ini?</h2>
                    <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">Ayo berkontribusi dengan meneliti, mengembangkan dan berdiskusi dengan kami tentang produk.</p>
                     <Button asChild size="lg" className="bg-accent-purple text-white hover:bg-accent-purple/90 group rounded-full text-lg py-7 px-10 transition-all">
                        <Link to="/contact">
                            Ayo Berkolaborasi!<ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </section>
        </SectionAnimator>

        {/* Online Store CTA */}
        <SectionAnimator>
            <section className="py-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent-purple/5 pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10 max-w-4xl border border-white/10 bg-white/5 backdrop-blur-md rounded-3xl p-10 md:p-16 shadow-2xl shadow-accent-purple/10">
                    <div className="inline-block p-3 bg-accent-purple/20 rounded-full mb-6">
                        <ShoppingBag className="w-8 h-8 text-accent-purple" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance text-white">Jelajahi Produk Kami di Toko Online</h2>
                    <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
                        Temukan berbagai produk digital unggulan, perangkat pembelajaran inovatif, dan layanan premium secara langsung. Tingkatkan pengalaman belajar dan mengajar Anda sekarang.
                    </p>
                    <Button asChild size="lg" className="bg-accent-purple text-white hover:bg-accent-purple/90 group rounded-full text-lg py-7 px-10 shadow-[0_0_30px_-5px_rgba(147,114,255,0.4)] transition-all">
                        <Link to="/store">
                            Cari Produk <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </section>
        </SectionAnimator>

      </main>
    </motion.div>
  );
};

export default Project;