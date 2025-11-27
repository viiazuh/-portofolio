import { Mail } from 'lucide-react';

const Contact = () => {
    return (
        <div className="p-12 bg-white min-h-[50vh] rounded-2xl shadow-lg border border-slate-100 text-center flex flex-col justify-center items-center animate-fade-in-up">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">CONTACT ME</h2>
            <p className="text-xl text-slate-600 mb-8">Saya terbuka untuk project baru. Mari kita diskusikan kebutuhan Anda!</p>
            <a href="mailto:sequadtaswan@gmail.com" className="px-8 py-4 bg-amber-500 text-white rounded-full font-bold shadow-xl shadow-amber-500/30 hover:bg-amber-600 transition-transform hover:-translate-y-1 flex items-center gap-2">
                <Mail size={20}/> EMAIL SAYA SEKARANG
            </a>
        </div>
    );
};

export default Contact;