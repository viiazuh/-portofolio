import { useState, useEffect } from 'react'; // useEffect dibiarkan untuk scroll to top
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Code, Menu, X, ArrowRight } from 'lucide-react';

// IMPORT KOMPONEN (Pastikan file ini ada)
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// IMPORT HALAMAN
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const location = useLocation();

  // Scroll ke atas otomatis setiap pindah halaman
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      
      {/* NAVBAR */}
      <Navbar />
      
      {/* KONTEN UTAMA */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 mt-8 md:mt-12 min-h-[60vh]">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/projects" element={<Projects />} /> 
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
};

export default App;