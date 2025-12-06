import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Download, Database, Zap, Code, Smartphone, 
  ChevronRight, Layout, Terminal, Server
} from 'lucide-react';

// --- KOMPONEN TECH ITEM (MINIMALIS TANPA KARTU/BORDER) ---
const TechItem = ({ icon, name, desc, color }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    setPosition({ x: distanceX / 3, y: distanceY / 3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      // UI UPDATE: Hapus border/shadow/bg-white. Ganti jadi transparan & hover effect halus.
      className="flex items-center gap-3 p-2 rounded-xl transition-all duration-300 cursor-pointer select-none relative z-10 hover:bg-slate-100/50"
    >
      {/* Container Icon tetap ada biar rapi */}
      <div className={`p-3 rounded-lg bg-white shadow-sm border border-slate-100 ${color}`}>
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-slate-800 text-sm">{name}</h4>
        <p className="text-xs text-slate-400">{desc}</p> 
      </div>
    </motion.div>
  );
};

// --- KOMPONEN TECH STACK WRAPPER ---
const TechStack = () => {
  const techs = [
    { name: "React", icon: <Code/>, desc: "Frontend", color: "text-blue-500" },
    { name: "Vue.js", icon: <Layout/>, desc: "Frontend", color: "text-green-500" },
    { name: "Flutter", icon: <Smartphone/>, desc: "Mobile", color: "text-sky-500" },
    { name: "Kotlin", icon: <Smartphone/>, desc: "Android", color: "text-purple-600" },
    { name: "Python", icon: <Terminal/>, desc: "AI/ML", color: "text-yellow-600" },
    { name: "Node.js", icon: <Server/>, desc: "Backend", color: "text-green-600" },
    { name: "Docker", icon: <Zap/>, desc: "DevOps", color: "text-blue-700" },
    { name: "MySQL", icon: <Database/>, desc: "Data", color: "text-orange-500" },
  ];

  return (
    <div className="py-16 bg-slate-50/50 border-t border-slate-100 mt-10">
        <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
                <h3 className="text-xl font-bold text-slate-900">Tech Arsenal</h3>
                <p className="text-slate-500 text-sm mt-1">Tools and technologies I use to build products.</p>
            </div>
            
            {/* Grid disesuaikan agar di HP (cols-2) terlihat lega */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
                {techs.map((tech, index) => (
                    <TechItem key={index} {...tech} />
                ))}
            </div>
        </div>
    </div>
  );
};

// --- KOMPONEN STATS CARD ---
const StatCard = ({ number, label }) => (
  <div className="flex flex-col items-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group cursor-default">
    <span className="text-3xl font-extrabold text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-orange-600 transition-colors">{number}</span>
    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{label}</span>
  </div>
);

// --- KOMPONEN UTAMA HOME ---
const Home = () => {
  const fotoProfil = "/profile.jpg"; 

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col">
        {/* BACKGROUND DECORATION */}
        <div className="absolute inset-0 z-0 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>

        {/* HERO SECTION */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-8 pt-16 md:pt-20 px-6 max-w-7xl mx-auto flex-grow">
            
            {/* --- TEKS KIRI --- */}
            <div className="order-2 lg:order-1 animate-fade-in-up text-center lg:text-left">
                {/* Badge Status */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full font-bold text-xs mb-6 shadow-lg shadow-slate-900/20 hover:scale-105 transition-transform cursor-default">
                    <Zap size={14} className="text-amber-400 fill-current animate-pulse" />
                    OPEN FOR WORK
                </div>
                
                {/* Judul dengan Gradient */}
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-slate-900 tracking-tight">
                    Hi, I'm <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-amber-500 animate-gradient bg-300%">
                        Vio Azuhri
                    </span>
                    <span className="text-amber-500 animate-bounce inline-block">.</span>
                </h1>
                
                <p className="text-slate-600 text-lg mb-8 max-w-md leading-relaxed mx-auto lg:mx-0">
                    Seorang <b>Full-Stack & Mobile Developer</b>. Saya ahli membangun Backend (Flask/Node), Frontend (React/Vue), dan Aplikasi Mobile (Flutter/Kotlin).
                </p>

                {/* --- TOMBOL AKSI KEREN (GRADIENT & ANIMATED) --- */}
                <div className="flex flex-wrap gap-4 mb-10 justify-center lg:justify-start">
                    
                    {/* Tombol VIEW PROJECTS dengan Efek Kilau */}
                    <Link to="/projects" className="relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-slate-900 rounded-full group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 overflow-hidden shadow-lg shadow-slate-900/30 hover:shadow-slate-900/50 hover:-translate-y-1">
                        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-0 group-hover:opacity-20 bg-gradient-to-r from-blue-400 to-purple-500 transition-opacity"></span>
                        <span className="relative flex items-center gap-2">
                            VIEW PROJECTS <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                        </span>
                        {/* Efek Kilau (Shimmer) */}
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"></div>
                    </Link>

                    {/* Tombol DOWNLOAD CV dengan Hover Border */}
                    <a href="/VioAzuhri.pdf" download="CV_Azuzu_FullStack.pdf" className="relative inline-flex items-center justify-center px-8 py-4 font-bold text-slate-900 transition-all duration-200 bg-white border-2 border-slate-200 rounded-full hover:border-blue-600 hover:text-blue-600 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 group">
                        <span className="flex items-center gap-2">
                            Download CV <Download size={20} className="group-hover:translate-y-1 transition-transform"/>
                        </span>
                    </a>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 max-w-md border-t border-slate-200 pt-8 mx-auto lg:mx-0">
                    <StatCard number="10+" label="Projects" />
                    <StatCard number="9+" label="Certificates" />
                    <StatCard number="2y" label="Experience" />
                </div>
            </div>

            {/* --- FOTO KANAN --- */}
            <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end group py-10 lg:py-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-dashed border-slate-300 rounded-full animate-[spin_20s_linear_infinite]"></div>
                
                <div className="relative z-10 w-72 h-80 md:w-80 md:h-[450px] overflow-hidden rounded-2xl border-4 border-white shadow-2xl bg-white rotate-3 hover:rotate-0 transition-transform duration-500">
                    <img src={fotoProfil} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" alt="Profile" />
                </div>
                
                {/* 4 Badges */}
                <div className="hidden md:flex absolute top-20 left-0 bg-white p-3 rounded-xl shadow-lg items-center gap-3 animate-[bounce_3s_infinite] border border-slate-100 z-20 hover:scale-110 transition-transform cursor-pointer">
                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Database size={20}/></div>
                    <div><p className="text-xs text-slate-400 font-bold">Backend</p><p className="text-xs font-bold">Flask/Node</p></div>
                </div>
                <div className="hidden md:flex absolute top-4 -right-4 bg-white p-3 rounded-xl shadow-lg items-center gap-3 animate-[bounce_5s_infinite] border border-slate-100 z-20 hover:scale-110 transition-transform cursor-pointer">
                    <div className="bg-amber-100 p-2 rounded-lg text-amber-600"><Layout size={20}/></div>
                    <div><p className="text-xs text-slate-400 font-bold">Frontend</p><p className="text-xs font-bold">React/Vue</p></div>
                </div>
                <div className="hidden md:flex absolute bottom-32 -right-8 bg-white p-3 rounded-xl shadow-lg items-center gap-3 animate-[bounce_4s_infinite] delay-700 border border-slate-100 z-20 hover:scale-110 transition-transform cursor-pointer">
                    <div className="bg-green-100 p-2 rounded-lg text-green-600"><Zap size={20}/></div>
                    <div><p className="text-xs text-slate-400 font-bold">DevOps</p><p className="text-xs font-bold">Docker/CI-CD</p></div>
                </div>
                <div className="hidden md:flex absolute bottom-10 left-10 bg-white p-3 rounded-xl shadow-lg items-center gap-3 animate-[bounce_5s_infinite] delay-1000 border border-slate-100 z-20 hover:scale-110 transition-transform cursor-pointer">
                    <div className="bg-purple-100 p-2 rounded-lg text-purple-600"><Smartphone size={20}/></div>
                    <div><p className="text-xs text-slate-400 font-bold">Mobile</p><p className="text-xs font-bold">Flutter/Kotlin</p></div>
                </div>
            </div>
        </div>

        {/* --- 4. BAGIAN TECH STACK (MINIMALIS) --- */}
        <TechStack />
    </div>
  );
};

export default Home;s