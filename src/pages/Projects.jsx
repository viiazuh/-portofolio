import { Database, Smartphone, Layout, ChevronRight } from 'lucide-react';

const ProjectCard = ({ title, description, stack, link, icon }) => (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl hover:border-amber-400 transition-all duration-300 group">
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-slate-800 group-hover:text-amber-600 transition-colors">{title}</h3>
            <div className="text-slate-400 group-hover:text-amber-500">{icon}</div>
        </div>
        <p className="text-slate-600 mb-4 text-base">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
            {stack.map(tech => (
                <span key={tech} className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-medium">{tech}</span>
            ))}
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold flex items-center hover:text-blue-800">
            Lihat Repository <ChevronRight size={16} className="ml-1" />
        </a>
    </div>
);

// GANTI NAMA KOMPONEN JADI PROJECTS
const Projects = () => {
    const projects = [
        { title: "ML Prediction Deployment", description: "Web monitor diabetes dengan Flask & Docker.", stack: ["Flask", "Docker", "CI/CD", "React"], link: "https://github.com/viiazuh/diabetes-app_UTsDevops", icon: <Database size={24} /> },
        { title: "Mobile E-Wallet", description: "Aplikasi E-Wallet dengan Flutter UI/UX.", stack: ["Flutter", "Dart", "State Management"], link: "https://github.com/viiazuh/infoin_ewallet", icon: <Smartphone size={24} /> },
        { title: "25 Kisah Nabi", description: "Aplikasi Android Native Kotlin.", stack: ["Kotlin", "Android Native"], link: "https://github.com/viiazuh/25-prophets", icon: <Smartphone size={24} /> },
        { title: "PASA: Password Security", description: "Tim project deteksi keamanan password (ML).", stack: ["React", "Python", "ML"], link: "https://github.com/kentangbiru/PASA", icon: <Layout size={24} /> },
    ];

    return (
        <div className="pt-12 pb-24 animate-fade-in-up">
            <header className="mb-10 text-center"><h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">Featured <span className="text-amber-500">Projects</span></h2><p className="text-lg text-slate-600">Karya terbaik saya.</p></header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
            </div>
        </div>
    );
};

export default Projects;