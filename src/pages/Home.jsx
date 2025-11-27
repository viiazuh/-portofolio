import { Link } from 'react-router-dom';
import { 
  Download, Database, Zap, Code, Smartphone, 
  ArrowRight, Layout // <-- Ikon Layout untuk Frontend sudah diimport
} from 'lucide-react';

// --- KOMPONEN TAMBAHAN: TECH MARQUEE ---
const TechMarquee = () => {
  const techs = [
    "React", "Vue.js", "Flutter", "Kotlin", "Python", "Flask", "Docker", "Kubernetes", 
    "Tailwind", "Node.js", "MySQL", "Git", "CI/CD", "Figma", "Firebase"
  ];

  return (
    <div className="w-full overflow-hidden py-10 opacity-70 bg-white">
      <div className="flex w-max animate-marquee gap-12">
        {[...techs, ...techs, ...techs].map((tech, index) => (
          <div key={index} className="flex items-center gap-2 text-slate-400 font-bold text-xl uppercase tracking-wider">
            <span className="text-amber-500">✦</span> {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

// --- KOMPONEN TAMBAHAN: STATS CARD ---
const StatCard = ({ number, label }) => (
  <div className="flex flex-col items-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
    <span className="text-3xl font-extrabold text-slate-900">{number}</span>
    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{label}</span>
  </div>
);

const Home = () => {
  const fotoProfil = "/profile.jpg"; 

  return (
    <div className="relative overflow-hidden min-h-screen">
        {/* 1. BACKGROUND GRID PATTERN */}
        <div className="absolute inset-0 z-0 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        
        {/* 2. BACKGROUND COLOR BLOBS */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>

        {/* --- MAIN CONTENT --- */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12 pt-10">
            
            {/* --- TEKS KIRI --- */}
            <div className="order-2 lg:order-1 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full font-bold text-xs mb-6 shadow-lg shadow-slate-900/20">
                    <Zap size={14} className="text-amber-400 fill-current" />
                    OPEN FOR WORK
                </div>
                
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-slate-900 tracking-tight">
                    Hi, I'm <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-amber-500 animate-gradient bg-300%">
                        Vio Azuhri
                    </span>
                    <span className="text-amber-500">.</span>
                </h1>
                
                <p className="text-slate-600 text-lg mb-8 max-w-md leading-relaxed">
                    Seorang <b>Full-Stack & Mobile Developer</b>. Saya ahli membangun Backend (Flask/Node), Frontend (React/Vue), dan Aplikasi Mobile (Flutter/Kotlin).
                </p>

                {/* Tombol Aksi */}
                <div className="flex flex-wrap gap-4 mb-10">
                    <Link to="/portfolio" className="group bg-slate-900 text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-slate-900/30 hover:bg-slate-800 transition-all hover:-translate-y-1 flex items-center gap-2">
                        VIEW PROJECTS <ArrowRight size={20} />
                    </Link>
                    <a href="/CV_Azuzu.pdf" download className="group bg-white border-2 border-slate-200 px-8 py-4 rounded-full font-bold hover:border-slate-900 transition-colors flex items-center gap-2">
                        Download CV <Download size={20} className="group-hover:translate-y-1 transition-transform"/>
                    </a>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 max-w-md border-t border-slate-200 pt-8">
                    <StatCard number="10+" label="Projects" />
                    <StatCard number="10+" label="Certificates" />
                    <StatCard number="2y" label="Experience" />
                </div>
            </div>

            {/* --- FOTO KANAN --- */}
            <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end group">
                {/* Lingkaran Dekorasi Berputar */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-dashed border-slate-300 rounded-full animate-[spin_20s_linear_infinite]"></div>
                
                {/* Frame Foto Utama */}
                <div className="relative z-10 w-72 h-80 md:w-80 md:h-[450px] overflow-hidden rounded-2xl border-4 border-white shadow-2xl bg-white rotate-3 hover:rotate-0 transition-transform duration-500">
                    <img src={fotoProfil} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" alt="Profile" />
                </div>
                
                {/* 1. Badge Backend (Kiri Atas) */}
                <div className="hidden md:flex absolute top-20 left-0 bg-white p-3 rounded-xl shadow-lg items-center gap-3 animate-[bounce_3s_infinite] border border-slate-100 z-20">
                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Database size={20}/></div>
                    <div><p className="text-xs text-slate-400 font-bold">Backend</p><p className="text-xs font-bold">Flask/Node</p></div>
                </div>

                {/* 2. Badge Frontend (Kanan Atas - FIX POSITION) */}
                <div className="hidden md:flex absolute top-4 -right-4 bg-white p-3 rounded-xl shadow-lg items-center gap-3 animate-[bounce_5s_infinite] border border-slate-100 z-20">
                    <div className="bg-amber-100 p-2 rounded-lg text-amber-600"><Layout size={20}/></div>
                    <div><p className="text-xs text-slate-400 font-bold">Frontend</p><p className="text-xs font-bold">React/Vue</p></div>
                </div>

                {/* 3. Badge Infra (Kanan Bawah) */}
                <div className="hidden md:flex absolute bottom-32 -right-8 bg-white p-3 rounded-xl shadow-lg items-center gap-3 animate-[bounce_4s_infinite] delay-700 border border-slate-100 z-20">
                    <div className="bg-green-100 p-2 rounded-lg text-green-600"><Zap size={20}/></div>
                    <div><p className="text-xs text-slate-400 font-bold">DevOps</p><p className="text-xs font-bold">Docker/CI-CD</p></div>
                </div>

                {/* 4. Badge Mobile (Kiri Bawah) */}
                <div className="hidden md:flex absolute bottom-10 left-10 bg-white p-3 rounded-xl shadow-lg items-center gap-3 animate-[bounce_5s_infinite] delay-1000 border border-slate-100 z-20">
                    <div className="bg-purple-100 p-2 rounded-lg text-purple-600"><Smartphone size={20}/></div>
                    <div><p className="text-xs text-slate-400 font-bold">Mobile</p><p className="text-xs font-bold">Flutter/Kotlin</p></div>
                </div>
            </div>
        </div>

        {/* 3. TECH MARQUEE (Running Text) */}
        <TechMarquee />
    </div>
  );
};

export default Home;