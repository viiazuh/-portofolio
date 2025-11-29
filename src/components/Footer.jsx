import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 py-12 text-center border-t border-slate-200 mt-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Let's Build Something Great Together</h2>
        <div className="flex justify-center gap-4 mb-8">
        <a href="https://github.com/viiazuh" target="_blank" rel="noopener noreferrer" className="p-3 bg-white shadow-sm rounded-full hover:text-white hover:bg-slate-900 transition-all"><Github size={20}/></a>
        <a href="https://www.linkedin.com/in/vio-azuhri-b5a25530a" target="_blank" rel="noopener noreferrer" className="p-3 bg-white shadow-sm rounded-full hover:text-white hover:bg-blue-600 transition-all"><Linkedin size={20}/></a>
        <a href="mailto:sequadtaswan@gmail.com" className="p-3 bg-white shadow-sm rounded-full hover:text-white hover:bg-red-500 transition-all"><Mail size={20}/></a>
        </div>
        <p className="text-slate-400 text-sm font-medium">© 2025 Azuzu Full-Stack Portfoli</p>
    </footer>
  );
};

export default Footer;