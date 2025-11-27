import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// IMPORT KOMPONEN KITA
import WelcomeScreen from './components/WelcomeScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// IMPORT HALAMAN
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects'; 
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';

const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  const location = useLocation();

  // Logika Welcome Screen (Hanya muncul sekali saat refresh)
  useEffect(() => {
    // Cek apakah session storage sudah ada
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (hasVisited) {
        setShowIntro(false);
    } else {
        const timer = setTimeout(() => {
            setShowIntro(false);
            sessionStorage.setItem('hasVisited', 'true');
        }, 2500);
        return () => clearTimeout(timer);
    }
  }, []);

  // Scroll ke atas saat pindah halaman
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Tampilkan Intro jika state showIntro true
  if (showIntro) return <WelcomeScreen />;

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 md:px-12 mt-8 md:mt-12 min-h-[60vh]">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/certificates" element={<Certificates />} />
            
            {/* PERBAIKAN DI SINI: Path jadi /projects dan panggil komponen Projects */}
            <Route path="/projects" element={<Projects />} /> 
            
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;