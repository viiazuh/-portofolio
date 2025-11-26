import { useState } from 'react';
import { 
  ArrowUpRight, Github, Linkedin, Mail, ChevronRight, 
  Code, Layout, Database, Smartphone, Download, Zap
} from 'lucide-react';

// --- FOTO DARI GITHUB KAMU ---
const fotoProfil = "https://avatars.githubusercontent.com/u/125689177?v=4"; 
// -----------------------------

// =================================================================
// KOMPONEN CARD DAN STUB UTAMA (Tidak Berubah)
// =================================================================

const SkillCard = ({ title, description, techs, icon }) => (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
        <div className="flex items-start mb-4">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4 flex-shrink-0">{icon}</div>
            <div>
                <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
                <p className="text-slate-500 text-sm">{description}</p>
            </div>
        </div>
        <div className="flex flex-wrap gap-3 mt-6">
            {techs.map((tech, index) => (
                <span key={index} className="px-4 py-2 bg-slate-100 text-slate-800 rounded-lg font-medium text-sm">
                    {tech}
                </span>
            ))}
        </div>
    </div>
);

const ProjectCard = ({ title, description, stack, link, icon }) => (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl hover:border-amber-400 transition-all duration-300 group">
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-slate-800 group-hover:text-amber-600 transition-colors">{title}</h3>
            <div className="text-slate-400 group-hover:text-amber-500">{icon}</div>
        </div>
        <p className="text-slate-600 mb-4 text-base">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
            {stack.map(tech => (
                <span key={tech} className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-medium">
                    {tech}
                </span>
            ))}
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold flex items-center hover:text-blue-800">
            Lihat Repository
        </a>
    </div>
);


// =================================================================
// FUNGSI PAGES (ServicesPage, PortfolioPage, ContactPage) - Tidak Berubah
// =================================================================

const ServicesPage = () => (
    <div className="pt-12 pb-24">
        <header className="mb-10 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">Technical <span className="text-blue-600">Stack</span></h2>
            <p className="text-lg text-slate-600">Melihat detail teknologi yang saya gunakan di setiap tahap pengembangan.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            <SkillCard
                title="Full-Stack Development"
                description="Membangun aplikasi web mulai dari UI (FE) hingga logic server (BE) dan Database."
                techs={["React", "Vue.js", "Flask (Python)", "Node.js (Express)", "MySQL", "SQLite 3", "RESTful API"]}
                icon={<Layout size={24} />}
            />
            
            <SkillCard
                title="Mobile Development"
                description="Fokus pada pengembangan aplikasi native dan cross-platform yang efisien."
                techs={["Flutter", "Kotlin", "Dart", "Android Native", "Firebase"]}
                icon={<Smartphone size={24} />}
            />
            
            <SkillCard
                title="Deployment & CI/CD"
                description="Otomatisasi pengiriman kode ke produksi, manajemen container, dan hosting ML Model."
                techs={["Docker", "GitHub Actions", "GitLab CI/CD", "Linux Server Mgmt", "MLOps Basics"]}
                icon={<Zap size={24} />}
            />
            
            <SkillCard
                title="Tools & Utility"
                description="Peralatan yang digunakan sehari-hari untuk meningkatkan efisiensi dan kolaborasi kerja."
                techs={["Git", "Tailwind CSS", "Bootstrap", "VS Code", "Postman", "Figma Basics"]}
                icon={<Code size={24} />}
            />
        </div>
    </div>
);

const PortfolioPage = () => {
    const projects = [
        {
            title: "ML Prediction Deployment App & Monitor",
            description: "Aplikasi Full-Stack untuk prediksi ML (Diabetes) dengan database lokal (SQLite 3) dan deployment otomatis (CI/CD).",
            stack: ["Flask", "Docker", "CI/CD", "SQLite 3", "React"],
            link: "https://github.com/viiazuh/diabetes-app_UTsDevops",
            icon: <Database size={24} />,
        },
        {
            title: "Mobile E-Wallet (Infoin Wallet)",
            description: "Aplikasi Mobile Cross-Platform (Flutter) untuk simulasi e-wallet dengan fokus pada UI/UX dan State Management.",
            stack: ["Flutter", "Dart", "API Integration", "State Management"],
            link: "https://github.com/viiazuh/infoin_ewallet",
            icon: <Smartphone size={24} />,
        },
        {
            title: "25 Kisah Nabi (Kotlin Native)",
            description: "Aplikasi Mobile Native Android menggunakan Kotlin untuk menampilkan kisah-kisah nabi. Fokus pada Native Development dan efisiensi.",
            stack: ["Kotlin", "Android Native", "UI/UX Design"],
            link: "https://github.com/viiazuh/25-prophets",
            icon: <Smartphone size={24} />,
        },
        {
            title: "PASA: Password Security Detector (Team)",
            description: "Project tim besar untuk mendeteksi tingkat keamanan password menggunakan Machine Learning. Menunjukkan kemampuan kolaborasi tim.",
            stack: ["React", "Machine Learning", "Python", "Team Collaboration"],
            link: "https://github.com/kentangbiru/PASA",
            icon: <Layout size={24} />,
        },
    ];

    return (
        <div className="pt-12 pb-24">
            <header className="mb-10 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">My Featured <span className="text-amber-500">Projects</span></h2>
                <p className="text-lg text-slate-600">A collection of my best work covering Web, Mobile, Deployment, and Team Collaboration.</p>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
            <div className="mt-16 text-center">
                <p className="text-slate-500">Lihat semua repository di GitHub saya:</p>
                <a href="https://github.com/viiazuh" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:text-blue-800 flex items-center justify-center mt-2">
                    <Github size={20} className="mr-2"/> GitHub Profile
                </a>
            </div>
        </div>
    );
};

const ContactPage = () => (
    <div className="p-12 bg-white min-h-[60vh] rounded-2xl shadow-lg border border-slate-100 text-center flex flex-col justify-center items-center">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">CONTACT ME</h2>
        <p className="text-xl text-slate-600 mb-8">Saya terbuka untuk project baru. Mari kita diskusikan kebutuhan Anda!</p>
        <a href="mailto:sequadtaswan@gmail.com" className="px-8 py-4 bg-amber-500 text-white rounded-full font-bold shadow-xl shadow-amber-500/30 hover:bg-amber-600 transition-transform hover:-translate-y-1 flex items-center gap-2">
            <Mail size={20}/> EMAIL SAYA SEKARANG
        </a>
    </div>
);

// =================================================================
// KOMPONEN HOME - PERUBAHAN DI SINI
// =================================================================
const HomePageContent = ({ setActivePage }) => (
  <>
    {/* --- HERO SECTION --- */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 relative">
      
      {/* Teks (Kiri) */}
      <div className="order-2 lg:order-1 relative z-10">
        <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full font-bold text-sm mb-6 border border-amber-200">
          ⚡ FULL-STACK GENERALIST
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-slate-900 tracking-tight">
          Azu<span className="text-amber-500">zu</span><br/>
          Full-Stack &<br/>
          Mobile Dev.
        </h1>
        <p className="text-slate-500 text-lg mb-8 max-w-md leading-relaxed">
          Mahasiswa Teknik Informatika. Spesialisasi di Mobile (Flutter/Kotlin), membangun Backend (Flask, Node.js), dan memiliki keahlian vital dalam Deployment (Docker, CI/CD).
        </p>
        
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => setActivePage('portfolio')} 
            className="bg-amber-500 text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-amber-500/30 hover:bg-amber-600 transition-transform hover:-translate-y-1"
          >
            VIEW MY PROJECTS
          </button>
          
          {/* PERUBAHAN DI SINI: Tombol Download menjadi link <a> */}
          <a 
            href="/CV_Azuzu.pdf" 
            download="CV_Azuzu_FullStack.pdf"
            className="bg-white border-2 border-slate-200 px-8 py-4 rounded-full font-bold hover:border-slate-900 transition-colors flex items-center gap-2"
          >
            Download CV <Download size={20}/>
          </a>
        </div>
      </div>

      {/* Foto (Kanan) */}
      <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
        {/* Background Shapes */}
        <div className="absolute top-10 right-0 lg:right-10 w-64 h-64 bg-amber-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute w-[350px] h-[400px] bg-amber-400 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] rotate-0 z-0 transition-all duration-700"></div>
        
        {/* Frame Foto */}
        <div className="relative z-10 w-72 h-80 md:w-80 md:h-[450px] overflow-hidden rounded-b-[3rem] rounded-t-[10rem] border-[6px] border-white shadow-2xl bg-white">
          <img 
            src={fotoProfil} 
            className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
            alt="Profile"
          />
        </div>

        {/* Floating Badges */}
        <div className="hidden md:flex absolute top-24 left-10 bg-white p-3 rounded-xl shadow-xl items-center gap-3 animate-bounce duration-[3000ms] border border-slate-100">
          <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Database size={20}/></div>
          <div>
            <p className="text-xs text-slate-400 font-bold">Backend</p>
            <p className="text-sm font-bold">Flask / Node</p>
          </div>
        </div>

        <div className="hidden md:flex absolute bottom-20 -right-4 bg-white p-3 rounded-xl shadow-xl items-center gap-3 animate-bounce duration-[4000ms] delay-700 border border-slate-100">
          <div className="bg-green-100 p-2 rounded-lg text-green-600"><Zap size={20}/></div>
          <div>
            <p className="text-xs text-slate-400 font-bold">Infra</p>
            <p className="text-sm font-bold">Docker / CI/CD</p>
          </div>
        </div>
        
        {/* Dekorasi Bintang */}
        <div className="absolute -top-6 right-20 text-slate-800 animate-spin-slow">
           <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        </div>
      </div>
    </div>

    {/* --- SERVICES / PROJECTS PREVIEW --- */}
    <section className="py-24 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          <div>
            <h3 className="text-amber-500 font-bold mb-2 uppercase tracking-wide flex items-center gap-2">
              <span className="w-8 h-[2px] bg-amber-500"></span> What I Build
            </h3>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Aplikasi Multiplatform & Infrastruktur Otomatis.
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8 text-lg">
              Saya mencakup seluruh siklus pengembangan, dari desain UI/UX, coding Backend/Mobile, hingga Deployment dengan Docker dan CI/CD.
            </p>
            <button 
              onClick={() => setActivePage('services')} 
              className="px-8 py-4 bg-slate-100 text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-colors flex items-center gap-2 group"
            >
              Lihat Semua Stack
            </button>
          </div>

          <div className="space-y-6">
            {/* Card Project 1: ML Deployment - (Tidak Klikable) */}
            <div className="group bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-amber-400 transition-all flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="bg-red-50 p-4 rounded-2xl text-red-600 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <Database size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">ML Prediction Deployment</h4>
                  <p className="text-sm text-slate-400 font-medium">Flask, Python, Docker, CI/CD</p>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-colors">
                {/* Arrow Dihapus */}
              </div>
            </div>
            
            {/* Card Project 2: Mobile Dev - (Tidak Klikable) */}
            <div className="group bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-amber-400 transition-all flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div className="bg-amber-50 p-4 rounded-2xl text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <Smartphone size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">Mobile Development</h4>
                  <p className="text-sm text-slate-400 font-medium">Flutter (Dart), Kotlin, API Integration</p>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-colors">
                {/* Arrow Dihapus */}
              </div>
            </div>

          </div>
        </div>
    </section>
  </>
);


// =================================================================
// 6. KOMPONEN UTAMA (Router)
// =================================================================

const App = () => {
  const [activePage, setActivePage] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  // Fungsi yang bertindak sebagai router (penentu konten yang tampil)
  const renderPage = () => {
    switch (activePage) {
        case 'home':
            return <HomePageContent setActivePage={setActivePage} />;
        case 'portfolio':
            return <PortfolioPage />;
        case 'services':
            return <ServicesPage />;
        case 'contact':
            return <ContactPage />;
        default:
            return <HomePageContent setActivePage={setActivePage} />;
    }
  };


  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      
      {/* --- NAVBAR --- */}
      <nav className="flex justify-between items-center px-6 py-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="bg-slate-900 text-white p-2 rounded-lg">
            <Code size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight">Vio<span className="text-amber-500">Stack</span></span>
        </div>
        
        <div className="hidden md:flex gap-8 bg-slate-50 px-8 py-3 rounded-full border border-slate-200 shadow-sm">
          {navLinks.map((link) => (
            <button 
              key={link.id}
              onClick={() => setActivePage(link.id)}
              className={`text-sm font-semibold transition-colors ${activePage === link.id ? 'text-amber-600' : 'text-slate-500 hover:text-slate-900'}`}
            >
              {link.label.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Tombol HIRE ME (Kembali ke Routing) */}
        <button
          onClick={() => setActivePage('contact')} 
          className="bg-slate-900 text-white px-6 py-2 rounded-full font-bold hover:bg-slate-800 transition-all flex items-center gap-2 shadow-lg shadow-slate-900/20"
        >
          HIRE ME
        </button>
      </nav>

      {/* --- MAIN CONTENT (Diisi oleh Router) --- */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 mt-8 md:mt-12">
        {renderPage()}
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-50 py-12 text-center border-t border-slate-200 mt-12">
         <h2 className="text-3xl font-bold text-slate-900 mb-6">Let's Build Something Great Together</h2>
         <div className="flex justify-center gap-4 mb-8">
            <a href="https://github.com/viiazuh" target="_blank" rel="noopener noreferrer" className="p-3 bg-white shadow-sm rounded-full hover:text-white hover:bg-slate-900 transition-all">
               <Github size={20}/>
            </a>
            <a href="https://www.linkedin.com/in/vio-azuhri-b5a25530a" target="_blank" rel="noopener noreferrer" className="p-3 bg-white shadow-sm rounded-full hover:text-white hover:bg-blue-600 transition-all">
               <Linkedin size={20}/>
            </a>
            <a href="mailto:sequadtaswan@gmail.com" className="p-3 bg-white shadow-sm rounded-full hover:text-white hover:bg-red-500 transition-all">
               <Mail size={20}/>
            </a>
         </div>
         <p className="text-slate-400 text-sm font-medium">© 2025 Azuzu Full-Stack Portfolio. Built with React & Tailwind.</p>
      </footer>

    </div>
  );
};

export default App;