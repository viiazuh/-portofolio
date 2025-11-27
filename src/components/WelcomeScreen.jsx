import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  ArrowUpRight, Github, Linkedin, Mail, ChevronRight, 
  Code, Layout, Database, Smartphone, Download, Zap,
  Menu, X, Award, ExternalLink, User, Terminal, CheckCircle
} from 'lucide-react';

// --- FOTO PROFIL (Pastikan ada di folder public) ---
const fotoProfil = "/profile.jpg"; 

// =================================================================
// 1. KOMPONEN WELCOME SCREEN (RE-DESIGN: LIGHT THEME)
// =================================================================
const WelcomeScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Memicu animasi loading bar saat komponen muncul
    const timer = setTimeout(() => setProgress(100), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white text-slate-900 transition-opacity duration-500">
      {/* Icon Group */}
      <div className="flex gap-6 mb-8">
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl shadow-lg animate-bounce delay-75">
            <Code size={32} className="text-amber-500" />
        </div>
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl shadow-lg animate-bounce delay-100">
            <User size={32} className="text-slate-700" />
        </div>
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl shadow-lg animate-bounce delay-150">
            <Terminal size={32} className="text-blue-500" />
        </div>
      </div>

      {/* Teks Welcome */}
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-center tracking-tight text-slate-900">
        Welcome to
      </h1>
      <div className="flex items-center gap-2 mb-8">
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 text-center">
            VioStack
        </h1>
        <div className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded-md border border-amber-200 mt-2">
            PORTFOLIO
        </div>
      </div>

      {/* Loading Bar (Menggunakan State Transition agar pasti jalan) */}
      <div className="w-64 h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
        <div 
            className="h-full bg-amber-500 transition-all duration-[2000ms] ease-in-out rounded-full" 
            style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <p className="mt-4 text-slate-400 text-sm font-medium animate-pulse">
        Memuat konten...
      </p>
    </div>
  );
};

// =================================================================
// 2. KOMPONEN CARD
// =================================================================
const SkillCard = ({ title, description, techs, icon }) => (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-amber-400 group">
        <div className="flex items-start mb-4">
            <div className="bg-blue-50 text-blue-600 p-3 rounded-full mr-4 flex-shrink-0 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">{icon}</div>
            <div>
                <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
                <p className="text-slate-500 text-sm mt-1">{description}</p>
            </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-6">
            {techs.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-slate-50 text-slate-600 border border-slate-200 rounded-lg font-medium text-xs">
                    {tech}
                </span>
            ))}
        </div>
    </div>
);

const ProjectCard = ({ title, description, stack, link, icon }) => (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl hover:border-amber-400 transition-all duration-300 group flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-slate-800 group-hover:text-amber-600 transition-colors line-clamp-1">{title}</h3>
            <div className="text-slate-400 group-hover:text-amber-500">{icon}</div>
        </div>
        <p className="text-slate-600 mb-6 text-sm flex-grow">{description}</p>
        
        <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-6">
                {stack.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-amber-50 text-amber-700 rounded text-[10px] font-bold uppercase tracking-wider">{tech}</span>
                ))}
            </div>
            <a href={link} target="_blank" rel="noopener noreferrer" className="w-full block text-center bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-amber-500 transition-colors">
                Lihat Repository
            </a>
        </div>
    </div>
);

const CertificateCard = ({ title, issuer, date, link }) => (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-green-500 group h-full flex flex-col justify-between">
        <div>
            <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-100 text-green-600 p-3 rounded-full flex-shrink-0 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <Award size={24} />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">{title}</h3>
                    <p className="text-slate-500 text-xs mt-1">{issuer}</p>
                </div>
            </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-slate-50 flex justify-between items-center">
            <span className="text-xs font-semibold text-slate-400 bg-slate-50 px-2 py-1 rounded">Issued: {date}</span>
            {link && link !== "#" && (
                <a href={link} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all" title="Verifikasi">
                    <ExternalLink size={18} />
                </a>
            )}
        </div>
    </div>
);

// =================================================================
// 3. HALAMAN KONTEN (PAGES)
// =================================================================

// --- HOME ---
const Home = () => {
    // Data Sertifikat Teaser (Hanya 3 Teratas)
    const topCerts = [
        { title: "Full-Stack Web Dev", issuer: "Dicoding", date: "2024", link: "https://www.dicoding.com" },
        { title: "Flutter Expert", issuer: "Udemy", date: "2024", link: "https://www.udemy.com" },
        { title: "DevOps & Docker", issuer: "Coursera", date: "2023", link: "https://www.coursera.org" },
    ];

    return (
        <div className="animate-fade-in-up">
            {/* HERO SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32 relative">
                <div className="order-2 lg:order-1 relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-full font-bold text-xs mb-6 border border-amber-200">
                        <Zap size={14} className="fill-amber-800"/> FULL-STACK GENERALIST
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-slate-900 tracking-tight">
                        Azu<span className="text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-orange-600">zu</span><br/>
                        Full-Stack &<br/>
                        Mobile Dev.
                    </h1>
                    <p className="text-slate-500 text-lg mb-8 max-w-md leading-relaxed">
                        Mahasiswa Teknik Informatika. Spesialisasi di **Mobile (Flutter/Kotlin)**, membangun Backend **(Flask, Node.js)**, dan **Deployment (Docker, CI/CD)**.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link to="/portfolio" className="bg-amber-500 text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-amber-500/30 hover:bg-amber-600 transition-transform hover:-translate-y-1">
                            VIEW MY PROJECTS
                        </Link>
                        <a href="/CV_Azuzu.pdf" download className="bg-white border-2 border-slate-200 px-8 py-4 rounded-full font-bold hover:border-slate-900 transition-colors flex items-center gap-2">
                            Download CV <Download size={20}/>
                        </a>
                    </div>
                </div>
                <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
                    <div className="absolute top-10 right-0 lg:right-10 w-64 h-64 bg-amber-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                    <div className="relative z-10 w-72 h-80 md:w-80 md:h-[450px] overflow-hidden rounded-b-[3rem] rounded-t-[10rem] border-[6px] border-white shadow-2xl bg-white">
                        <img src={fotoProfil} className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700" alt="Profile" />
                    </div>
                    
                    {/* Floating Badges */}
                    <div className="hidden md:flex absolute top-24 left-10 bg-white p-3 rounded-xl shadow-xl items-center gap-3 border border-slate-100 animate-bounce duration-[3000ms]">
                        <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Database size={20}/></div>
                        <div><p className="text-xs text-slate-400 font-bold">Backend</p><p className="text-sm font-bold">Flask / Node</p></div>
                    </div>
                    <div className="hidden md:flex absolute bottom-20 -right-4 bg-white p-3 rounded-xl shadow-xl items-center gap-3 border border-slate-100 animate-bounce delay-700 duration-[4000ms]">
                        <div className="bg-green-100 p-2 rounded-lg text-green-600"><Zap size={20}/></div>
                        <div><p className="text-xs text-slate-400 font-bold">Infra</p><p className="text-sm font-bold">Docker / CI/CD</p></div>
                    </div>
                </div>
            </div>

            {/* CERTIFICATES TEASER (HYBRID UI) */}
            <div className="mb-24">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900">Latest <span className="text-green-600">Certificates</span></h2>
                        <p className="text-slate-500 mt-2">Bukti kompetensi profesional saya.</p>
                    </div>
                    <Link to="/certificates" className="hidden md:flex items-center text-blue-600 font-bold hover:underline group">
                        Lihat Semua <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform"/>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {topCerts.map((cert, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col h-full justify-between">
                            <div className="flex items-start gap-4">
                                <div className="bg-green-50 p-3 rounded-lg text-green-600"><Award size={24}/></div>
                                <div>
                                    <h3 className="font-bold text-slate-800 line-clamp-2">{cert.title}</h3>
                                    <p className="text-sm text-slate-500">{cert.issuer}</p>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-slate-50 flex justify-between items-center">
                                <span className="text-xs font-semibold text-slate-400 bg-slate-50 px-2 py-1 rounded">{cert.date}</span>
                                <Link to="/certificates" className="text-xs text-blue-600 font-bold hover:underline">Detail</Link>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-8 md:hidden text-center">
                    <Link to="/certificates" className="inline-block bg-slate-100 text-slate-900 font-bold py-3 px-6 rounded-full hover:bg-slate-200 transition-colors">
                        Lihat Semua Sertifikat
                    </Link>
                </div>
            </div>
        </div>
    );
};

// --- SERVICES ---
const Services = () => (
    <div className="pt-12 pb-24 animate-fade-in-up">
        <header className="mb-12 text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Technical <span className="text-blue-600">Stack</span></h2>
            <p className="text-lg text-slate-600">Teknologi dan alat yang saya kuasai untuk membangun solusi digital.</p>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SkillCard title="Full-Stack Development" description="Membangun aplikasi web mulai dari UI (FE) hingga logic server (BE) dan Database." techs={["React", "Vue.js", "Flask", "Node.js", "MySQL", "SQLite 3"]} icon={<Layout size={24} />} />
            <SkillCard title="Mobile Development" description="Fokus pada pengembangan aplikasi native dan cross-platform yang efisien." techs={["Flutter", "Kotlin", "Dart", "Android Native", "Firebase"]} icon={<Smartphone size={24} />} />
            <SkillCard title="Deployment & CI/CD" description="Otomatisasi pengiriman kode ke produksi, manajemen container." techs={["Docker", "GitHub Actions", "GitLab CI", "Linux Server"]} icon={<Zap size={24} />} />
            <SkillCard title="Tools & Utility" description="Peralatan yang digunakan sehari-hari untuk meningkatkan efisiensi." techs={["Git", "Tailwind CSS", "VS Code", "Postman", "Figma"]} icon={<Code size={24} />} />
        </div>
    </div>
);

// --- CERTIFICATES (FULL PAGE) ---
const Certificates = () => {
    const certs = [
        { title: "Full-Stack Web Development", issuer: "Dicoding", date: "Des 2023", link: "#" },
        { title: "Android (Kotlin) Expert", issuer: "Udemy", date: "Jan 2024", link: "#" },
        { title: "Docker and Kubernetes", issuer: "Coursera", date: "Mar 2024", link: "#" },
        { title: "Intro to Machine Learning", issuer: "Google", date: "Sep 2023", link: "#" },
        { title: "Web Programming Basics", issuer: "Dicoding", date: "Apr 2023", link: "#" },
        { title: "API Development Node.js", issuer: "Backend Academy", date: "Jun 2024", link: "#" },
    ];
    return (
        <div className="pt-12 pb-24 animate-fade-in-up">
            <header className="mb-12 text-center max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">My <span className="text-green-600">Certificates</span></h2>
                <p className="text-lg text-slate-600">Koleksi sertifikasi profesional yang telah saya selesaikan.</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certs.map((c, i) => <CertificateCard key={i} {...c} />)}
            </div>
        </div>
    );
};

// --- PORTFOLIO ---
const Portfolio = () => {
    const projects = [
        { title: "ML Prediction Deployment", description: "Web monitor diabetes dengan Flask & Docker. Full-stack implementation.", stack: ["Flask", "Docker", "CI/CD", "React"], link: "https://github.com/viiazuh/diabetes-app_UTsDevops", icon: <Database size={24} /> },
        { title: "Mobile E-Wallet", description: "Aplikasi E-Wallet dengan Flutter UI/UX modern dan state management.", stack: ["Flutter", "Dart", "State Management"], link: "https://github.com/viiazuh/infoin_ewallet", icon: <Smartphone size={24} /> },
        { title: "25 Kisah Nabi", description: "Aplikasi Android Native Kotlin untuk edukasi agama.", stack: ["Kotlin", "Android Native"], link: "https://github.com/viiazuh/25-prophets", icon: <Smartphone size={24} /> },
        { title: "PASA: Password Security", description: "Tim project deteksi keamanan password menggunakan Machine Learning.", stack: ["React", "Python", "ML"], link: "https://github.com/kentangbiru/PASA", icon: <Layout size={24} /> },
    ];
    return (
        <div className="pt-12 pb-24 animate-fade-in-up">
            <header className="mb-12 text-center max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Featured <span className="text-amber-500">Projects</span></h2>
                <p className="text-lg text-slate-600">Proyek-proyek terpilih yang menunjukkan kemampuan teknis saya.</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
            </div>
        </div>
    );
};

// --- CONTACT ---
const Contact = () => (
    <div className="p-12 bg-white min-h-[50vh] rounded-2xl shadow-lg border border-slate-100 text-center flex flex-col justify-center items-center animate-fade-in-up">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">CONTACT ME</h2>
        <p className="text-xl text-slate-600 mb-8 max-w-xl">Saya terbuka untuk diskusi proyek, kolaborasi, atau peluang kerja. Jangan ragu untuk menghubungi saya!</p>
        <a href="mailto:sequadtaswan@gmail.com" className="px-8 py-4 bg-amber-500 text-white rounded-full font-bold shadow-xl shadow-amber-500/30 hover:bg-amber-600 transition-transform hover:-translate-y-1 flex items-center gap-2">
            <Mail size={20}/> KIRIM EMAIL SEKARANG
        </a>
    </div>
);

// =================================================================
// 4. MAIN APP COMPONENT
// =================================================================

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const location = useLocation(); 

  // Efek Intro (2.5 detik)
  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll ke atas saat ganti halaman
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Data Navigasi
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/certificates', label: 'Certificates' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' },
  ];

  if (showIntro) return <WelcomeScreen />;

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden flex flex-col">
      
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-6 md:px-12 max-w-7xl mx-auto w-full relative z-50">
        <div className="flex items-center gap-2">
          <div className="bg-slate-900 text-white p-2 rounded-lg"><Code size={24} /></div>
          <span className="text-xl font-bold tracking-tight">Vio<span className="text-amber-500">Stack</span></span>
        </div>
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
            <Link to="/contact" className="text-sm font-bold text-slate-900 hover:text-amber-500">HIRE</Link>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 border border-slate-200 rounded-md">
                {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>
        </div>

        {/* Links Desktop & Mobile Dropdown */}
        <div className={`md:flex md:relative absolute top-full left-0 right-0 z-50 md:w-auto bg-white md:bg-transparent shadow-xl md:shadow-none p-4 md:p-0 transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'} `}>
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={() => setIsMenuOpen(false)}
              className={`block text-sm font-semibold transition-colors md:inline-block w-full md:w-auto text-left md:text-center py-3 md:py-0 px-4 md:px-6 rounded-lg md:rounded-none
                ${location.pathname === link.path ? 'text-amber-600 bg-amber-50 md:bg-transparent' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50 md:hover:bg-transparent'}`}
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
        </div>

        <Link to="/contact" className="bg-slate-900 text-white px-6 py-2 rounded-full font-bold hover:bg-slate-800 transition-all flex items-center gap-2 shadow-lg shadow-slate-900/20 hidden md:flex">
          HIRE ME
        </Link>
      </nav>

      {/* ROUTING CONTENT */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 mt-8 md:mt-12 w-full flex-grow">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-50 py-12 text-center border-t border-slate-200 mt-24">
         <h2 className="text-2xl font-bold text-slate-900 mb-6">Let's Build Something Great Together</h2>
         <div className="flex justify-center gap-4 mb-8">
            <a href="https://github.com/viiazuh" target="_blank" className="p-3 bg-white shadow-sm rounded-full hover:text-white hover:bg-slate-900 transition-all"><Github size={20}/></a>
            <a href="https://www.linkedin.com/in/vio-azuhri-b5a25530a" target="_blank" className="p-3 bg-white shadow-sm rounded-full hover:text-white hover:bg-blue-600 transition-all"><Linkedin size={20}/></a>
            <a href="mailto:sequadtaswan@gmail.com" className="p-3 bg-white shadow-sm rounded-full hover:text-white hover:bg-red-500 transition-all"><Mail size={20}/></a>
         </div>
         <p className="text-slate-400 text-sm font-medium">© 2025 Azuzu Full-Stack Portfolio. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
};

export default App;