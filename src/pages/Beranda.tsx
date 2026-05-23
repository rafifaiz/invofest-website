import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Card } from '../components/ui/Card';
import { Collapse } from '../components/ui/Collapse';
import { ScrollReveal } from '../components/ScrollReveal';

const Beranda = () => {
    const navigate = useNavigate();

    const openWhatsApp = () => {
        window.open('https://api.whatsapp.com/send/?phone=62895605919551&text=Halo+Kak%2C+Saya+Ingin+Bertanya+mengenai+EQUATOR_APT+%2F+SYSTEM_BREACH+%28Red+Team+%26+Pentest%29+...&type=phone_number&app_absent=0', '_blank');
    };

    return (
        <div className="pt-16 md:pt-20">
            {/* 1. HERO SECTION */}
            <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center px-8 md:px-24 py-12 bg-black">
                <ScrollReveal direction="left" className="md:w-1/2 z-10 text-left">
                    <h1 className="text-5xl md:text-7xl font-black text-green-400 mb-4 tracking-tight">
                        EQUATOR_APT // SYSTEM_BREACH
                    </h1>
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-xl font-medium">
                        EQUATOR_APT // SYSTEM_BREACH adalah rangkaian red team & pentest yang mengutamakan etika pengujian, pelaporan temuan, dan mitigasi yang dapat ditindaklanjuti—untuk membangun kemampuan keamanan siber secara nyata.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={() => navigate('/competition')}
                            className="bg-black border-2 border-green-400 text-white px-7 py-3 rounded-xl font-bold hover:bg-green-300 hover:text-black transition-all duration-300 text-sm tracking-wider uppercase"
                        >
                            DAFTAR SEKARANG
                        </button>
                        <button
                            onClick={openWhatsApp}
                            className="bg-black border-2 border-green-400 text-white px-7 py-3 rounded-xl font-bold hover:bg-green-300 hover:text-black transition-all duration-300 text-sm tracking-wider uppercase"
                        >
                            HUBUNGI PANITIA
                        </button>
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={200} className="md:w-1/2 flex justify-center mt-12 md:mt-0 relative">
                    <img 
                        src="https://www.avast.com/hubfs/New_Avast_Academy/Hackers/Hacker-Thumb-a1.png" 
                        alt="Cyber Mascot" 
                        className="w-full max-w-[550px] drop-shadow-2xl animate-bounce-slow" 
                    />
                    <div className="absolute -bottom-20 w-full h-[300px] bg-gradient-to-t from-black to-transparent -z-10"></div>
                </ScrollReveal>
            </section>

            {/* 2. TENTANG & KATEGORI */}
            <section id="tentang" className="bg-black py-24 px-8 md:px-24">
                <ScrollReveal className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Tentang EQUATOR_APT // SYSTEM_BREACH</h2>
                    <p className="text-gray-200 max-w-5xl mx-auto leading-relaxed font-medium">
                        EQUATOR_APT // SYSTEM_BREACH adalah rangkaian kegiatan red team & pentest yang dirancang untuk memperkuat budaya keamanan siber melalui latihan yang terstruktur, studi kasus, dan diskusi taktis.
                        Tahun ini, focus kami melatih kemampuan threat modeling, pengujian aplikasi/web, dan incident response secara etis—agar setiap peserta memahami cara membangun sistem yang lebih resilien.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { t: 'Red Team Seminar', d: 'Sesi berbasis studi kasus untuk memahami trade-off operasi red team, etika pengujian, dan mitigasi nyata.', path: '/seminar' },
                        { t: 'Threat Hunt Talkshow', d: 'Diskusi taktis seputar indikator kompromi (IOC), deteksi, dan cara merespons insiden dengan cepat.', path: '/talkshow' },
                        { t: 'Exploit Challenge', d: 'Ajang CTF/mini-breach simulation untuk menguji kemampuan analisis, chaining, dan dokumentasi temuan.', path: '/competition' },
                        { t: 'Pentest Workshop', d: 'Hands-on lab untuk web/app testing, privilege escalation awareness, dan pelaporan temuan yang rapi.', path: '/workshop' }
                    ].map((item, idx) => (
                        <ScrollReveal key={idx} delay={idx * 100}>
                            <Card className="bg-black p-7 rounded-2xl border-r-8 border-b-8 border-green-400/30 shadow-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between h-full">
                                <div>
                                    <h3 className="font-extrabold text-black text-2xl mb-4">{item.t}</h3>
                                    <p className="text-black text-xs leading-relaxed mb-8">{item.d}</p>
                                </div>
                                <button
                                    onClick={() => navigate(item.path)}
                                    className="bg-black border-2 border-green-400 text-white px-5 py-2 rounded-lg font-sans font-bold hover:bg-green-300 hover:text-black transition-colors text-xs uppercase tracking-wider"
                                >
                                    LIHAT DETAIL
                                </button>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* 3. IT SEMINAR SECTION */}
            <section className="bg-black py-24 px-8 md:px-24">
                <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                    <ScrollReveal direction="left" className="md:w-1/2 text-left">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Red Team Seminar</h2>
                        <p className="text-gray-300 leading-relaxed font-medium mb-8">
                            Seminar ini berfokus pada red team: bagaimana menyusun skenario pengujian yang etis, membangun threat model, dan mengubah temuan menjadi mitigasi yang realistis.
                        </p>
                        <button
                            onClick={() => navigate('/seminar')}
                            className="bg-black border-2 border-green-400 text-white px-7 py-3 rounded-xl font-sans font-bold hover:bg-green-300 hover:text-black transition-all duration-300 text-sm tracking-wider uppercase"
                        >
                            DAFTAR RED TEAM SEMINAR
                        </button>
                    </ScrollReveal>
                    <ScrollReveal direction="right" delay={200} className="md:w-1/2 flex justify-center">
                        <img 
                            src="https://humanfocus.co.uk/wp-content/uploads/what-is-cyber-security.jpg" 
                            alt="Red Team Seminar" 
                            className="w-full max-w-[400px] drop-shadow-xl rounded-lg" 
                        />
                    </ScrollReveal>
                </div>
            </section>

            {/* 4. IT TALKSHOW SECTION */}
            <section className="bg-black py-24 px-8 md:px-24">
                <div className="flex flex-col md:flex-row-reverse items-center gap-12 max-w-6xl mx-auto">
                    <ScrollReveal direction="right" className="md:w-1/2 text-left">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Red Team Talkshow</h2>
                        <p className="text-gray-300 leading-relaxed font-medium mb-8">
                            Red Team Talkshow berskala nasional membahas engagement yang bertanggung jawab: scope, threat modeling, ethics, dan reporting yang actionable—agar pengujian ofensif selalu diikuti accountability dan minimisasi risiko.
                        </p>
                        <button
                            onClick={() => navigate('/talkshow')}
                            className="bg-black border-2 border-green-400 text-white px-7 py-3 rounded-xl font-sans font-bold hover:bg-green-300 hover:text-black transition-all duration-300 text-sm tracking-wider uppercase"
                        >
                            DAFTAR RED TEAM TALKS
                        </button>
                    </ScrollReveal>
                    <ScrollReveal direction="left" delay={200} className="md:w-1/2 flex justify-center">
                        <img 
                            src="https://ids.ac.id/wp-content/uploads/2021/05/30.-Mengenal-Ethical-Hacker.jpeg" 
                            alt="Red Team Talkshow" 
                            className="w-full max-w-[400px] drop-shadow-xl rounded-lg" 
                        />
                    </ScrollReveal>
                </div>
            </section>

            {/* 5. IT WORKSHOP SECTION */}
            <section className="bg-black py-24 px-8 md:px-24">
                <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                    <ScrollReveal direction="left" className="md:w-1/2 text-left">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Red Team Workshop</h2>
                        <p className="text-gray-300 leading-relaxed font-medium mb-8">
                            Workshop EQUATOR_APT // SYSTEM_BREACH adalah lab hands-on red team/pentest yang etis: recon, validasi akses, hingga penulisan laporan temuan dan mitigasi yang rapi.
                        </p>
                        <button
                            onClick={() => navigate('/workshop')}
                            className="bg-black border-2 border-green-400 text-white px-7 py-3 rounded-xl font-sans font-bold hover:bg-green-300 hover:text-black transition-all duration-300 text-sm tracking-wider uppercase"
                        >
                            DAFTAR RED TEAM WORKSHOP
                        </button>
                    </ScrollReveal>
                    <ScrollReveal direction="right" delay={200} className="md:w-1/2 flex justify-center">
                        <img 
                            src="https://akcdn.detik.net.id/visual/2022/09/12/ilustrasi-hacker-ilustrasi-serangan-siber-4_169.jpeg?w=400&q=90" 
                            alt="Red Team Workshop" 
                            className="w-full max-w-[400px] drop-shadow-xl rounded-lg" 
                        />
                    </ScrollReveal>
                </div>
            </section>

            {/* 6. IT COMPETITION SECTION */}
            <section className="bg-black py-24 px-8 md:px-24">
                <div className="flex flex-col md:flex-row-reverse items-center gap-12 max-w-6xl mx-auto">
                    <ScrollReveal direction="right" className="md:w-1/2 text-left">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Red Team Competition</h2>
                        <p className="text-gray-300 leading-relaxed font-medium mb-8">
                            Red Team Competition "From Access to Control" menantang tim untuk menguji sistem secara etis, membuktikan dampak dengan dokumentasi, dan menyusun mitigasi yang realistis.
                        </p>
                        <button
                            onClick={() => navigate('/competition')}
                            className="bg-black border-2 border-green-400 text-white px-7 py-3 rounded-xl font-sans font-bold hover:bg-green-300 hover:text-black transition-all duration-300 text-sm tracking-wider uppercase"
                        >
                            DAFTAR RED TEAM COMPETITION
                        </button>
                    </ScrollReveal>
                    <ScrollReveal direction="left" delay={200} className="md:w-1/2 flex justify-center">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeWrU8wt2jonPbJLwMebpnFyv63t19dBnQRw&s" 
                            alt="Red Team Competition" 
                            className="w-full max-w-[400px] drop-shadow-xl rounded-lg" 
                        />
                    </ScrollReveal>
                </div>
            </section>

            {/* 7. FAQ SECTION */}
            <section className="py-24 px-8 md:px-24 bg-black">
                <ScrollReveal className="text-center mb-12">
                    <p className="text-green-300 font-bold tracking-widest uppercase mb-2">FAQ</p>
                    <h2 className="text-4xl font-extrabold text-white">
                        Punya Pertanyaan? Lihat <span className="text-green-300">Disini</span>
                    </h2>
                    <p className="text-gray-200 mt-4">Ada banyak informasi yang terkait dengan EQUATOR_APT // SYSTEM_BREACH (Red Team & Pentest), Anda dapat melihat daftar pertanyaan di bawah ini.</p>
                </ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    <ScrollReveal delay={0}>
                        <Collapse title="Apa itu EQUATOR_APT // SYSTEM_BREACH?" description="EQUATOR_APT // SYSTEM_BREACH adalah program red team & pentest yang berfokus pada latihan pengujian aplikasi/web dan pemahaman etika pengujian, threat modeling, serta mitigasi yang realistis." />
                    </ScrollReveal>
                    <ScrollReveal delay={100}>
                        <Collapse title="Kapan dan dimana acara dilaksanakan?" description="Rangkaian kegiatan EQUATOR_APT // SYSTEM_BREACH akan dilaksanakan secara hybrid: sesi online dan sesi offline (lokasi kampus/by-venue mengikuti pengumuman panitia)." />
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                        <Collapse title="Apakah ada biaya pendaftaran?" description="Beberapa sesi (mis. seminar/talkshow) dapat gratis, sedangkan workshop/CTF biasanya memiliki kuota dan biaya sesuai ketentuan masing-masing event." />
                    </ScrollReveal>
                    <ScrollReveal delay={300}>
                        <Collapse title="Bagaimana update hasil/penilaian?" description="Ringkasan hasil evaluasi akan diumumkan melalui kanal resmi EQUATOR_APT // SYSTEM_BREACH and media sosial panitia setelah proses seleksi selesai." />
                    </ScrollReveal>
                    <ScrollReveal delay={400}>
                        <Collapse title="Apa yang didapat pemenang dalam kompetisi?" description="Pemenang kompetisi akan mendapatkan hadiah uang tunai, sertifikat, trophy, kesempatan magang di perusahaan mitra, dan mentoring eksklusif dengan para pakar industri." />
                    </ScrollReveal>
                    <ScrollReveal delay={500}>
                        <Collapse title="Bagaimana cara mendaftar event?" description="Pendaftaran dapat dilakukan melalui website ini dengan membuat akun terlebih dahulu, lalu memilih event yang ingin diikuti dan mengisi formulir pendaftaran." />
                    </ScrollReveal>
                </div>
            </section>

            {/* Back to Top */}
            <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 bg-green-400 w-12 h-12 rounded-full text-black shadow-2xl flex items-center justify-center hover:scale-110 transition-transform font-bold"
            >
                ↑
            </button>
        </div>
    );
};

export default Beranda;