import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/certificates', label: 'Certificates' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="flex justify-between items-center px-6 py-6 md:px-12 max-w-7xl mx-auto relative z-40">
      <div className="flex items-center gap-2">
        <div className="bg-slate-900 text-white p-2 rounded-lg"><Code size={24} /></div>
        <span className="text-xl font-bold tracking-tight">Vio<span className="text-amber-500">Stack</span></span>
      </div>
      
      {/* Mobile Menu Toggle (Teks 'HIRE' sudah dihapus) */}
      <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 border border-slate-200 rounded-md">
              {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
          </button>
      </div>

      {/* Links Desktop & Mobile Dropdown */}
      <div className={`md:flex md:relative absolute top-full left-0 right-0 z-50 md:w-auto bg-white md:bg-slate-50 shadow-lg md:shadow-none p-4 md:p-0 transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'} `}>
        {navLinks.map((link) => (
          <Link 
            key={link.path} 
            to={link.path} 
            onClick={() => setIsMenuOpen(false)}
            className={`block text-sm font-semibold transition-colors md:inline-block w-full md:w-auto text-left md:text-center py-2 md:py-0 px-0 md:px-8 
              ${location.pathname === link.path ? 'text-amber-600' : 'text-slate-500 hover:text-slate-900'}`}
          >
            {link.label.toUpperCase()}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;