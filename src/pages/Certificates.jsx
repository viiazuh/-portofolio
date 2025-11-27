import { useState } from 'react';
import { Award, X, ExternalLink, FileText, Eye } from 'lucide-react';

const CertificatesPage = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    // DATA SERTIFIKAT (Pastikan file gambar ada di public/sertifikat/)
    const certs = [
        { 
            id: 1,
            title: "Data Science Python", 
            issuer: "SkillPedia", 
            file: "sertifikat-data-science-python.png", 
        },
        { 
            id: 2,
            title: "HTML Css", 
            issuer: "SkillPedia", 
            file: "sertifikat-html-css.png", 
        },
        { 
            id: 3,
            title: "Unity", 
            issuer: "SkillPedia", 
            file: "sertifikat-unity-platform.png", 
           
        },
         { 
            id: 4,
            title: "Pengembangan Aplikasi Android Intermediate", 
            issuer: "Dicoding",  
            file: "Android-Intermediate.png", 
         
        },
         { 
            id: 5,
            title: "Belajar Dasar AI", 
            issuer: "Dicoding", 
            file: "Belajar-Dasar.Ai.png", 
           
        },
        { 
            id: 6,
            title: "Fundamental APlikasi Android", 
            issuer: "Dicoding", 
            file: "Fundamental-Aplikasi-Android.png", 
           
        },
         { 
            id: 7,
            title: "Fundamental APlikasi Android", 
            issuer: "Dicoding", 
            file: "Fundamental-Aplikasi-Android.png", 
           
        },
        { 
            id: 8,
            title: "Penerapan Machine Learning pada Android", 
            issuer: "Dicoding", 
            file: "ml-android.png", 
          
        },
         { 
            id: 9,
            title: "redhat linux Sertifikat", 
            issuer: "huawei", 
            file: "redhat.png", 
         
        },
        { 
            id: 10,
            title: "Kampus Merdeka", 
            issuer: "huawei", 
            file: "sertifikat kampus merdeka.pdf", 
           
        },


       
    ];

    const isPdf = (filePath) => filePath.toLowerCase().endsWith('.pdf');

    return (
        <div className="pt-12 pb-24 animate-fade-in-up relative">
            <header className="mb-12 text-center max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
                    My <span className="text-green-600">Certificates</span>
                </h2>
                <p className="text-lg text-slate-600">
                    Bukti kompetensi dan sertifikasi profesional 
                </p>
            </header>

            {/* --- GRID GALLERY STYLE (SEPERTI GAMBAR) --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {certs.map((cert) => (
                    <div 
                        key={cert.id} 
                        onClick={() => setSelectedCert(cert)} // Buka Modal saat klik
                        className="group relative cursor-pointer rounded-xl overflow-hidden shadow-lg border border-slate-200 aspect-[4/3] bg-slate-100"
                    >
                        {/* GAMBAR BACKGROUND */}
                        {isPdf(cert.file) ? (
                            <div className="w-full h-full flex flex-col items-center justify-center bg-slate-50 text-slate-400 group-hover:scale-110 transition-transform duration-500">
                                <FileText size={64} />
                                <span className="text-sm font-bold mt-2">PDF DOCUMENT</span>
                            </div>
                        ) : (
                            <img 
                                src={cert.file} 
                                alt={cert.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                onError={(e) => {
                                    e.target.style.display = 'none'; // Sembunyikan jika error
                                }}
                            />
                        )}

                        {/* OVERLAY HITAM SAAT HOVER (Efek 'View Certificate') */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                            <Eye size={32} className="mb-2 text-amber-400" />
                            <h3 className="font-bold text-lg leading-tight mb-1">{cert.title}</h3>
                            <p className="text-xs text-slate-300">{cert.issuer}</p>
                            <span className="mt-4 px-4 py-2 border border-white/30 rounded-full text-xs font-semibold hover:bg-white hover:text-black transition-colors">
                                View Certificate
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- MODAL POPUP (TETAP DIPAKAI BIAR JELAS) --- */}
            {selectedCert && (
                <div 
                    className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex justify-center items-center p-4 animate-fade-in-up"
                    onClick={() => setSelectedCert(null)}
                >
                    <div 
                        className="bg-white rounded-xl overflow-hidden w-full max-w-5xl h-[85vh] flex flex-col relative shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header Modal */}
                        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-white">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900">{selectedCert.title}</h3>
                                <p className="text-xs text-slate-500">Issued by: {selectedCert.issuer}</p>
                            </div>
                            <button 
                                onClick={() => setSelectedCert(null)}
                                className="p-2 bg-slate-100 rounded-full hover:bg-red-100 hover:text-red-600 transition-colors"
                            >
                                <X size={24}/>
                            </button>
                        </div>

                        {/* Body Modal */}
                        <div className="flex-1 bg-slate-200 overflow-hidden relative flex items-center justify-center p-4">
                            {isPdf(selectedCert.file) ? (
                                <iframe 
                                    src={selectedCert.file} 
                                    className="w-full h-full rounded-lg shadow-inner bg-white"
                                    title="Certificate PDF"
                                />
                            ) : (
                                <img 
                                    src={selectedCert.file} 
                                    alt={selectedCert.title} 
                                    className="max-w-full max-h-full object-contain rounded shadow-lg"
                                />
                            )}
                        </div>

                        {/* Footer Modal */}
                        <div className="p-4 border-t border-slate-100 bg-white flex justify-end gap-3">
                            {selectedCert.verifyLink !== "#" && (
                                <a 
                                    href={selectedCert.verifyLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 text-blue-600 font-bold hover:bg-blue-50 rounded-lg flex items-center gap-2"
                                >
                                    Verifikasi <ExternalLink size={16}/>
                                </a>
                            )}
                            <a 
                                href={selectedCert.file} 
                                download 
                                className="px-4 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-700 flex items-center gap-2"
                            >
                                Download <ExternalLink size={16}/>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CertificatesPage;    