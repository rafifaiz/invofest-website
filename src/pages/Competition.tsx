import React from 'react';

const BRAND = {
    name: 'EQUATOR_APT // SYSTEM_BREACH',
};

import { Card } from '../components/ui/Card';
import { Collapse } from '../components/ui/Collapse';
import { ScrollReveal } from '../components/ScrollReveal';

const Competition = () => {
    const scrollToDeskripsi = () => {
        const element = document.getElementById('deskripsi');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const openWhatsApp = () => {
        window.open(
            'https://api.whatsapp.com/send/?phone=62895605919551&text=Halo+Kak%2C+Saya+Ingin+Bertanya+mengenai+EQUATOR_APT+%2F+SYSTEM_BREACH+%28Red+Team+%26+Pentest%29+...&type=phone_number&app_absent=0',
            '_blank'
        );
    };

    return (
        <div className="pt-16 md:pt-20">
            {/* 1. HERO SECTION */}
            <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center px-8 md:px-24 py-12 bg-black">
                <ScrollReveal direction="left" className="md:w-1/2 z-10 text-left">
                    <h1 className="text-5xl md:text-7xl font-black text-green-300 mb-4 tracking-tight">
                        Exploit Challenge / Red Team Competition
                    </h1>
                    <p className="text-2xl md:text-3xl font-bold text-green-300 mb-6">
                        "From Access to Control"
                    </p>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl font-medium">
                        Kompetisi EQUATOR_APT // SYSTEM_BREACH mengusung tema "From Access to Control"—mendorong tim untuk menguji sistem secara etis, membangun analisis yang kuat, dan menyusun mitigasi yang realistis.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button
                            className="bg-black border-2 border-green-400 text-white px-6 py-3 rounded-xl font-sans font-bold hover:bg-green-300 hover:text-black transition-all duration-300 tracking-wider text-sm uppercase"
                            onClick={scrollToDeskripsi}
                        >
                            INFO SELENGKAPNYA
                        </button>
                        <button
                            className="bg-black border-2 border-green-400 text-white px-6 py-3 rounded-xl font-sans font-bold hover:bg-green-300 hover:text-black transition-all duration-300 tracking-wider text-sm uppercase"
                            onClick={openWhatsApp}
                        >
                            HUBUNGI PANITIA
                        </button>
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={200} className="md:w-1/2 flex justify-center mt-12 md:mt-0 relative">
                    <img 
                        src="https://b.acaraseru.com/images/b49d9411-707f-47e9-b688-599bd01fa35d/l-ilustrasi-hacker-new.jpg" 
                        alt="Red Team Mascot" 
                        className="w-full max-w-[550px] drop-shadow-2xl animate-bounce-slow" 
                    />
                    <div className="absolute -bottom-20 w-full h-[300px] bg-gradient-to-t from-black to-transparent -z-10"></div>
                </ScrollReveal>
            </section>

            {/* 2. DESKRIPSI KOMPETISI */}
            <section id="deskripsi" className="bg-black py-24 px-8 md:px-24">
                <ScrollReveal className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Deskripsi Kompetisi</h2>
                    <p className="text-gray-300 leading-relaxed font-medium">
                        Kompetisi dalam EQUATOR_APT // SYSTEM_BREACH berfokus pada eksploitasi etis dan pembelajaran dari tiap temuan.
                        Peserta mengerjakan skenario attack path: menganalisis permukaan serangan, menyusun hipotesis berbasis data, lalu membuktikan dampak secara etis dengan dokumentasi.
                        Output: write-up teknis + recommendation mitigasi yang realistis dan dapat ditindaklanjuti.
                    </p>
                </ScrollReveal>
            </section>

            {/* 3. DAFTAR KOMPETISI */}
            <section className="bg-black py-24 px-8 md:px-24">
                <ScrollReveal className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Daftar Kompetisi</h2>
                    <p className="text-gray-300 text-lg">Berikut adalah daftar track kompetisi pada {BRAND.name}.</p>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Card 1: BG Black */}
                    <ScrollReveal delay={0}>
                        <Card className="bg-black p-7 rounded-2xl border-r-8 border-b-8 border-green-300 shadow-xl hover:-translate-y-2 transition-transform duration-300 text-center flex flex-col justify-between h-full">
                            <div>
                                <img 
                                    src="https://media.licdn.com/dms/image/v2/D5612AQH-Ap4I7tvnOg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1683380521228?e=2147483647&v=beta&t=0Qkj6fJ3tCvjFEIp9RoM7a0ecE2HUGqVZpuCsbF2lyA" 
                                    alt="CTF Web Exploitation and Cryptography" 
                                    className="h-32 mx-auto mb-6 object-contain"
                                />
                                <h3 className="font-extrabold text-green-300 text-xl mb-4">CTF Web Exploitation and Cryptography</h3>
                                <p className="text-gray-300 text-sm leading-relaxed mb-8">
                                    Track ini menguji keahlian tim dalam mengeksploitasi kerentanan keamanan web, melakukan reverse engineering, hingga memecahkan tantangan kriptografi untuk menemukan flag tersembunyi.
                                </p>
                            </div>
                            <button
                                className="bg-black border-2 border-green-400 text-white px-5 py-2 rounded-lg font-sans font-bold hover:bg-green-300 hover:text-black transition-colors uppercase text-xs tracking-wider"
                                onClick={scrollToDeskripsi}
                            >
                                INFO SELENGKAPNYA
                            </button>
                        </Card>
                    </ScrollReveal>

                    {/* Card 2: BG White */}
                    <ScrollReveal delay={100}>
                        <Card className="bg-white p-7 rounded-2xl border-r-8 border-b-8 border-green-300 shadow-xl hover:-translate-y-2 transition-transform duration-300 text-center flex flex-col justify-between h-full">
                            <div>
                                <img 
                                    src="https://pdpsi.unisnu.ac.id/assets/media/cybersecurity.jpg" 
                                    alt="Secure UI & Abuse Case Track" 
                                    className="h-32 mx-auto mb-6 object-contain"
                                />
                                <h3 className="font-extrabold text-black text-xl mb-4">Secure UI & Abuse Case Track</h3>
                                <p className="text-gray-700 text-sm leading-relaxed mb-8">
                                    Track ini fokus pada perancangan kontrol yang mengurangi penyalahgunaan: authz/authn yang tepat, validasi input, dan pola UI yang mencegah abuse.
                                </p>
                            </div>
                            <button
                                className="bg-black border-2 border-green-400 text-white px-5 py-2 rounded-lg font-sans font-bold hover:bg-green-300 hover:text-black transition-colors uppercase text-xs tracking-wider"
                                onClick={scrollToDeskripsi}
                            >
                                INFO SELENGKAPNYA
                            </button>
                        </Card>
                    </ScrollReveal>

                    {/* Card 3: BG White */}
                    <ScrollReveal delay={200}>
                        <Card className="bg-white p-7 rounded-2xl border-r-8 border-b-8 border-green-300 shadow-xl hover:-translate-y-2 transition-transform duration-300 text-center flex flex-col justify-between h-full">
                            <div>
                                <img 
                                    src="https://www.avast.com/hubfs/New_Avast_Academy/Hackers/Hacker-Thumb-a1.png" 
                                    alt="Web Exploit & Mitigation Track" 
                                    className="h-32 mx-auto mb-6 object-contain"
                                />
                                <h3 className="font-extrabold text-black text-xl mb-4">Web Exploit & Mitigation Track</h3>
                                <p className="text-gray-700 text-sm leading-relaxed mb-8">
                                    Track ini menantang tim untuk menguji aplikasi/web secara etis dan membuktikan dampak dengan dokumentasi rapi, lalu menyusun mitigasi yang teruji.
                                </p>
                            </div>
                            <button
                                className="bg-black border-2 border-green-400 text-white px-5 py-2 rounded-lg font-sans font-bold hover:bg-green-300 hover:text-black transition-colors uppercase text-xs tracking-wider"
                                onClick={scrollToDeskripsi}
                            >
                                INFO SELENGKAPNYA
                            </button>
                        </Card>
                    </ScrollReveal>
                </div>
            </section>

            {/* 4. FAQ SECTION */}
            <section className="py-24 px-8 md:px-24 bg-black">
                <ScrollReveal className="text-center mb-12">
                    <p className="text-green-300 font-bold tracking-widest uppercase mb-2">FAQ</p>
                    <h2 className="text-4xl font-extrabold text-white">
                        Punya Pertanyaan? Lihat <span className="text-green-300">Disini</span>
                    </h2>
                    <p className="text-gray-300 mt-4">Ada banyak informasi terkait EQUATOR_APT // SYSTEM_BREACH. Berikut FAQ untuk memudahkan tim Anda.</p>
                </ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    <ScrollReveal delay={0}>
                        <Collapse title="Apa itu EQUATOR_APT // SYSTEM_BREACH?" description="EQUATOR_APT // SYSTEM_BREACH adalah program red team & pentest yang fokus pada latihan threat modeling, pengujian aplikasi/web, dan penulisan temuan secara etis." />
                    </ScrollReveal>
                    <ScrollReveal delay={100}>
                        <Collapse title="Kapan dan dimana acara dilaksanakan?" description="Rangkaian kegiatan EQUATOR_APT // SYSTEM_BREACH dilaksanakan secara hybrid: sesi online dan offline sesuai pengumuman panitia." />
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                        <Collapse title="Apakah ada biaya pendaftaran?" description="Beberapa sesi dapat gratis. Sementara sesi hands-on/workshop biasanya memiliki kuota dan skema biaya sesuai ketentuan masing-masing event." />
                    </ScrollReveal>
                    <ScrollReveal delay={300}>
                        <Collapse title="Bagaimana update hasil kompetisi?" description="Ringkasan hasil evaluasi diumumkan melalui kanal resmi EQUATOR_APT // SYSTEM_BREACH dan media sosial panitia setelah proses seleksi selesai." />
                    </ScrollReveal>
                    <ScrollReveal delay={400}>
                        <Collapse title="Apa yang didapat peserta?" description="Peserta berkesempatan mendapatkan sertifikat, materi referensi, umpan balik mentor, dan pengakuan/rekap hasil berdasarkan penilaian etis." />
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

export default Competition;