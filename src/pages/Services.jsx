import { Layout, Smartphone, Zap, Code } from 'lucide-react';

const SkillCard = ({ title, description, techs, icon }) => (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-500">
        <div className="flex items-start mb-4">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4 flex-shrink-0 flex items-center justify-center">{icon}</div>
            <div>
                <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
                <p className="text-slate-500 text-sm">{description}</p>
            </div>
        </div>
        <div className="flex flex-wrap gap-3 mt-6">
            {techs.map((tech, index) => (
                <span key={index} className="px-4 py-2 bg-slate-100 text-slate-800 rounded-lg font-medium text-sm">{tech}</span>
            ))}
        </div>
    </div>
);

const Services = () => {
    return (
        <div className="pt-12 pb-24 animate-fade-in-up">
            <header className="mb-10 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">Technical <span className="text-blue-600">Stack</span></h2>
                <p className="text-lg text-slate-600">Melihat detail teknologi yang saya gunakan di setiap tahap pengembangan.</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <SkillCard 
                    title="Full-Stack Development" 
                    description="Membangun aplikasi web mulai dari UI (FE) hingga logic server (BE) dan Database." 
                    techs={["React", "Vue.js", "Flask", "Node.js", "MySQL", "SQLite 3", "Firebase", "RESTful API"]} 
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
                    techs={["Git", "Tailwind CSS", "Bootstrap", "VS Code", "Postman", "Cloudinary", "Figma"]} 
                    icon={<Code size={24} />} 
                />
            </div>
        </div>
    );
};

export default Services;