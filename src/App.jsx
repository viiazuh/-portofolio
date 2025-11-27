import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { 
  Github, Linkedin, Mail, Code, Menu, X, 
  User, Terminal, ChevronRight // Pastikan semua icon ada
} from 'lucide-react';

// IMPORT KOMPONEN LAIN
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

  // --- LOGIKA INTRO ---
  useEffect(() => {
    // Cek apakah user baru saja membuka web?
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (hasVisited) {
        setShowIntro(false);
    } else {
        const timer = setTimeout(() => {
            setShowIntro(false);
            sessionStorage.setItem('hasVisited', 'true'); 
        }, 2500); // Durasi loading 2.5 detik
        return () => clearTimeout(timer);
    }
  }, []);

  // Scroll ke atas otomatis
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // --- TAMPILAN INTRO (LANGSUNG DI SINI BIAR GA ERROR) ---
  if (showIntro) {
    return (
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white text-slate-900 transition-opacity duration-500">
        {/* Icon Group */}
        <div className="flex gap-6 mb-8 animate-pulse">
          <div className="p-4 bg-blue-50 rounded-2xl shadow-lg shadow-blue-100 border border-blue-100">
              <Code size={32} className="text-blue-600" />
          </div>
          <div className="p-4 bg-purple-50 rounded-2xl shadow-lg shadow-purple-100 border border-purple-100">
              <User size={32} className="text-purple-600" />
          </div>
          <div className="p-4 bg-green-50 rounded-2xl shadow-lg shadow-green-100 border border-green-100">
              <Terminal size={32} className="text-green-600" />
          </div>
        </div>

        {/* Teks Welcome */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-center tracking-tight animate-bounce text-slate-900">
          Welcome To My
        </h1>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 mb-10 text-center pb-2">
          Portfolio Website
        </h1>

        {/* Loading Bar */}
        <div className="w-64 h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
          <div 
              className="h-full bg-slate-900 animate-loading" 
              style={{ width: '100%' }} // Fallback style
          ></div>
        </div>

        <p className="mt-4 text-slate-400 text-sm font-medium animate-pulse">Loading experience...</p>
      </div>
    );
  }

  // --- TAMPILAN UTAMA (WEBSITE) ---
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 md:px-12 mt-8 md:mt-12 min-h-[60vh]">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/projects" element={<Projects />} /> 
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;