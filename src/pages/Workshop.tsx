import React from 'react';
import { Button } from '../components/ui/Button';
import { Marquee } from '../components/ui/Marquee';
import { Collapse } from '../components/ui/Collapse';
import { ScrollReveal } from '../components/ScrollReveal';
import { Shield, Terminal, Skull } from 'lucide-react';

const Workshop = () => {
    const openWhatsApp = () => {
        window.open('https://api.whatsapp.com/send/?phone=62895605919551&text=Halo+Kak%2C+Saya+Ingin+Bertanya+mengenai+EQUATOR_APT+%2F%2F+SYSTEM_BREACH...&type=phone_number&app_absent=0', '_blank');
    };

    return (
        <div className="pt-16 md:pt-20 bg-black text-gray-300 min-h-screen">
            {/* 1. HERO SECTION */}
            <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center px-8 md:px-24 py-12 bg-black">
                <ScrollReveal direction="left" className="md:w-1/2 z-10 text-left">
                    <h1 className="text-5xl md:text-7xl font-black text-emerald-500 mb-4 tracking-tight uppercase">
                        EQUATOR_APT // SYSTEM_BREACH
                    </h1>
                    <p className="text-2xl md:text-3xl font-bold text-gray-100 mb-6 font-mono">
                        "System Breach Playbook: Learn, Practice, Report"
                    </p>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl font-medium">
                        Workshop intensif yang berfokus pada simulasi serangan nyata (Red Teaming) secara etis. Pelajari metodologi ofensif mulai dari Open Source Intelligence (OSINT), eksploitasi celah keamanan, hingga penyusunan laporan audit standar industri.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button 
                            onClick={openWhatsApp}
                            className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors uppercase tracking-wider text-sm shadow-lg shadow-emerald-600/20"
                        >
                            AMBIL SLOT WORKSHOP
                        </button>
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={200} className="md:w-1/2 flex justify-center mt-12 md:mt-0 relative">
                    <img 
                        src="https://akcdn.detik.net.id/visual/2022/09/12/ilustrasi-hacker-ilustrasi-serangan-siber-4_169.jpeg?w=400&q=90" 
                        alt="Red Team Offensive Workshop" 
                        className="w-full max-w-[550px] drop-shadow-2xl animate-bounce-slow rounded-2xl border-2 border-emerald-500/50 opacity-80" 
                    />
                    <div className="absolute -bottom-20 w-full h-[300px] bg-gradient-to-t from-black to-transparent -z-10"></div>
                </ScrollReveal>
            </section>

            {/* 2. TENTANG WORKSHOP */}
            <section id="tentang" className="bg-zinc-950 py-24 px-8 md:px-24 border-t border-zinc-900">
                <ScrollReveal className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-emerald-500 mb-8 uppercase tracking-wider">Tentang Red Team Workshop</h2>
                    <p className="text-gray-400 leading-relaxed font-medium text-lg max-w-4xl mx-auto">
                        Berbeda dengan seminar teori, kelas Workshop ini didesain 100% hands-on di dalam lab simulasi. Peserta akan dipandu untuk memahami cara berpikir seorang threat actor, mempraktikkan teknik bypass defense modern, dan menghasilkan laporan temuan yang valid dan actionable untuk tim pertahanan (Blue Team).
                    </p>
                </ScrollReveal>
            </section>

            {/* 3. PEMBICARA */}
            <section className="bg-black py-24 px-8 md:px-24 border-t border-zinc-900">
                <ScrollReveal className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4 uppercase tracking-wider">Instruktur & Pakar Keamanan</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto font-mono">Belajar langsung dari praktisi industri aktif yang bergerak di bidang offensive security.</p>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <ScrollReveal delay={0}>
                        <div className="bg-zinc-950 p-8 rounded-2xl border-r-8 border-b-8 border-emerald-600 shadow-2xl text-center hover:-translate-y-2 transition-transform duration-300 border border-zinc-900">
                            <img 
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwnqaixCTbg68FrxauRr-Qv7vxAM6XGKIGHg&s" 
                                alt="OSINT Expert Speaker"
                                className="w-40 h-40 mx-auto rounded-full object-cover mb-6 border-4 border-emerald-500 grayscale hover:grayscale-0 transition-all"
                            />
                            <h3 className="font-extrabold text-gray-100 text-xl mb-2">Kunta</h3>
                            <p className="text-emerald-400 font-bold mb-1 font-mono text-sm">Information Gathering & OSINT</p>
                            <p className="text-gray-500 font-medium text-xs">Security Researcher</p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={100}>
                        <div className="bg-zinc-950 p-8 rounded-2xl border-r-8 border-b-8 border-emerald-600 shadow-2xl text-center hover:-translate-y-2 transition-transform duration-300 border border-zinc-900">
                            <img 
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Sle2tVi4Ra7ruqxF1MWFQAJMeadbE2WEAw&s" 
                                alt="Web Pentest Speaker"
                                className="w-40 h-40 mx-auto rounded-full object-cover mb-6 border-4 border-emerald-500 grayscale hover:grayscale-0 transition-all"
                            />
                            <h3 className="font-extrabold text-gray-100 text-xl mb-2">Fajar Mukhti</h3>
                            <p className="text-emerald-400 font-bold mb-1 font-mono text-sm">Web Vulnerability Exploitation</p>
                            <p className="text-gray-500 font-medium text-xs">Security Engineer</p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <div className="bg-zinc-950 p-8 rounded-2xl border-r-8 border-b-8 border-emerald-600 shadow-2xl text-center hover:-translate-y-2 transition-transform duration-300 border border-zinc-900">
                            <img 
                                src="https://blob.cloudcomputing.id/images/6fadffba-c6a0-48b7-ad90-81d8071e25fb/ilustrasi-hacker-3-l-min.jpg" 
                                alt="Red Teaming Expert Speaker"
                                className="w-40 h-40 mx-auto rounded-full object-cover mb-6 border-4 border-emerald-500 grayscale hover:grayscale-0 transition-all"
                            />
                            <h3 className="font-extrabold text-gray-100 text-xl mb-2">Mukhti lall</h3>
                            <p className="text-emerald-400 font-bold mb-1 font-mono text-sm">Red Team Methodology</p>
                            <p className="text-gray-500 font-medium text-xs">Security Analyst</p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* 4. SILABUS / SESI WORKSHOP */}
            <section className="bg-zinc-950 py-24 px-8 md:px-24 border-t border-zinc-900">
                <ScrollReveal className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-emerald-500 mb-12 uppercase tracking-wider">Silabus & Sesi Red Team Workshop</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-black p-8 rounded-2xl shadow-2xl text-left border border-zinc-900">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-emerald-600 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                                    <Terminal size={28} />
                                </div>
                                <h3 className="font-extrabold text-gray-200 text-lg">Sesi 1: Recon & OSINT</h3>
                            </div>
                            <div className="space-y-3 font-medium">
                                <p className="text-gray-300 font-bold font-mono text-sm">Selasa, 25 November 2025</p>
                                <p className="text-emerald-400 font-mono text-sm">08.00 - 11.30 WIB</p>
                                <p className="text-gray-400 text-sm">Lab Komputer D.1</p>
                                <p className="text-xs text-gray-500 italic border-t border-zinc-900 pt-2 leading-relaxed">Materi: Advanced Reconnaissance, Attack Surface Mapping, Automating Intelligence Gathering.</p>
                            </div>
                        </div>

                        <div className="bg-black p-8 rounded-2xl shadow-2xl text-left border border-zinc-900">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-emerald-600 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                                    <Skull size={28} />
                                </div>
                                <h3 className="font-extrabold text-gray-200 text-lg">Sesi 2: Exploitation Vibe</h3>
                            </div>
                            <div className="space-y-3 font-medium">
                                <p className="text-gray-300 font-bold font-mono text-sm">Selasa, 25 November 2025</p>
                                <p className="text-emerald-400 font-mono text-sm">13.00 - 16.30 WIB</p>
                                <p className="text-gray-400 text-sm">Lab Komputer D.2</p>
                                <p className="text-xs text-gray-500 italic border-t border-zinc-900 pt-2 leading-relaxed">Materi: Web Exploitation, Breaking Authentication Mechanism, Initial Access Validation.</p>
                            </div>
                        </div>

                        <div className="bg-black p-8 rounded-2xl shadow-2xl text-left border border-zinc-900">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-emerald-600 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                                    <Shield size={28} />
                                </div>
                                <h3 className="font-extrabold text-gray-200 text-lg">Sesi 3: Post-Ex & Reporting</h3>
                            </div>
                            <div className="space-y-3 font-medium">
                                <p className="text-gray-300 font-bold font-mono text-sm">Rabu, 26 November 2025</p>
                                <p className="text-emerald-400 font-mono text-sm">08.00 - 16.30 WIB</p>
                                <p className="text-gray-400 text-sm">Lab Komputer D.1</p>
                                <p className="text-xs text-gray-500 italic border-t border-zinc-900 pt-2 leading-relaxed">Materi: Privilege Escalation, Writing Audit-Ready Reports, Defensive Remediations.</p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* 5. FAQ SECTION */}
            <section className="py-24 px-8 md:px-24 bg-black border-t border-zinc-900">
                <ScrollReveal className="text-center mb-12">
                    <p className="text-emerald-400 font-bold tracking-widest uppercase mb-2 font-mono text-sm">// FAQ</p>
                    <h2 className="text-4xl font-extrabold text-gray-100 uppercase tracking-wider">
                        Punya Pertanyaan? Lihat <span className="text-emerald-500">Disini</span>
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm">Informasi penting seputar pelaksanaan training dan hands-on lab EQUATOR_APT // SYSTEM_BREACH.</p>
                </ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    <ScrollReveal delay={0}>
                        <Collapse title="Apa itu EQUATOR_APT // SYSTEM_BREACH?" description="Ini adalah program pelatihan teknis intensif bidang offensive security (Red Teaming/Pentest) yang mencakup simulasi ancaman cyber terstruktur, pemetaan celah keamanan, hingga pembuatan dokumentasi penetrasi." />
                    </ScrollReveal>
                    <ScrollReveal delay={100}>
                        <Collapse title="Apakah workshop ini ramah bagi pemula?" description="Diutamakan bagi Anda yang sudah memahami dasar jaringan komputer, perintah Linux dasar (CLI), dan konsep web server agar bisa mengikuti praktik hands-on lab dengan lancar." />
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                        <Collapse title="Peralatan apa saja yang harus dibawa peserta?" description="Peserta diwajibkan membawa laptop sendiri dengan spesifikasi memadai yang sudah terpasang lingkungan virtualisasi atau OS khusus pentest seperti Kali Linux, Parrot OS, atau WSL2." />
                    </ScrollReveal>
                    <ScrollReveal delay={300}>
                        <Collapse title="Bagaimana sistem evaluasi pengerjaan lab?" description="Setiap tahapan breach eksploitasi akan divalidasi melalui sistem flag capture khusus dan diakhiri dengan kewajiban membuat ringkasan eksekutif berupa Proof of Concept (PoC)." />
                    </ScrollReveal>
                    <ScrollReveal delay={400}>
                        <Collapse title="Apakah peserta mendapatkan sertifikat kompetensi?" description="Ya, seluruh peserta yang menyelesaikan seluruh modul pelatihan dan berhasil menyusun laporan asesmen akhir akan mendapatkan sertifikat penyelesaian resmi dari panitia." />
                    </ScrollReveal>
                    <ScrollReveal delay={500}>
                        <Collapse title="Bagaimana cara mendaftar event?" description="Pendaftaran slot workshop dapat dilakukan langsung dengan menekan tombol 'Ambil Slot Workshop' di bagian atas halaman untuk terhubung dengan sistem administrasi registrasi kami via WhatsApp." />
                    </ScrollReveal>
                </div>
            </section>

            {/* BACK TO TOP BUTTON */}
            <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 bg-emerald-600 w-12 h-12 rounded-full text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50 border border-emerald-500/20"
            >
                ↑
            </button>
        </div>
    );
};

export default Workshop;