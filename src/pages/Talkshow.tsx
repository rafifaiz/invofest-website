import React from 'react';
import { Button } from '../components/ui/Button';
import { Marquee } from '../components/ui/Marquee';
import { Collapse } from '../components/ui/Collapse';
import { ScrollReveal } from '../components/ScrollReveal';
import { Calendar, Clock, MapPin, Building } from 'lucide-react';

const Talkshow = () => {
    const openWhatsApp = () => {
        window.open('https://api.whatsapp.com/send/?phone=62895605919551&text=Halo+Kak%2C+Saya+Ingin+Bertanya+mengenai+EQUATOR_APT+%2F%2F+SYSTEM_BREACH...&type=phone_number&app_absent=0', '_blank');
    };

    return (
        <div className="pt-16 md:pt-20 bg-black text-gray-300 min-h-screen">
            {/* 1. HERO SECTION */}
            <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center px-8 md:px-24 py-12 bg-black">
                <ScrollReveal direction="left" className="md:w-1/2 z-10 text-left">
                    <h1 className="text-5xl md:text-7xl font-black text-emerald-500 mb-4 tracking-tight uppercase">
                        Red Team Talkshow
                    </h1>
                    <p className="text-2xl md:text-3xl font-bold text-gray-100 mb-6 font-mono">
                        "From Access to Accountability: Red Team Ethics"
                    </p>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl font-medium">
                        Red Team Talkshow: sebuah diskusi interaktif tentang praktik engagement red team yang bertanggung jawab—mencakup ethics, ruang lingkup (scope), threat modeling, dan pelaporan temuan yang actionable. Tujuan acara ini adalah membangun pemahaman bahwa pengujian ofensif harus selalu diikuti accountability dan minimisasi risiko.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button 
                            onClick={openWhatsApp}
                            className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors uppercase tracking-wider text-sm shadow-lg shadow-emerald-600/20"
                        >
                            DAFTAR SEKARANG
                        </button>
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={200} className="md:w-1/2 flex justify-center mt-12 md:mt-0 relative">
                    <img 
                        src="https://media.licdn.com/dms/image/v2/D4D12AQEfi-qapKadjw/article-cover_image-shrink_720_1280/B4DZiOAZ6gHYAI-/0/1754729128083?e=2147483647&v=beta&t=8PAU9BdqvhpnvaIMEmjauUg1rka6vxs68SrjO7pD7fo" 
                        alt="Maskot Talkshow" 
                        className="w-full max-w-[550px] drop-shadow-2xl animate-bounce-slow opacity-90 filter brightness-95" 
                    />
                    <div className="absolute -bottom-20 w-full h-[300px] bg-gradient-to-t from-black to-transparent -z-10"></div>
                </ScrollReveal>
            </section>

            {/* 2. TENTANG IT TALKSHOW */}
            <section id="tentang" className="bg-zinc-950 py-24 px-8 md:px-24 border-t border-zinc-900">
                <ScrollReveal className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-emerald-500 mb-8 uppercase tracking-wider">Tentang IT Talkshow</h2>
                    <p className="text-gray-400 leading-relaxed font-medium text-lg max-w-4xl mx-auto">
                        Talkshow ini membahas praktik red team/pentest yang bertanggung jawab: bagaimana menentukan scope, melakukan threat modeling, menjaga batas etika, dan memastikan setiap temuan ditulis serta ditindaklanjuti secara actionable. Materi menekankan bahwa pengujian ofensif bukan untuk “mencari celah”, melainkan untuk memperkuat sistem melalui accountability dan minimisasi risiko.
                    </p>
                </ScrollReveal>
            </section>

            {/* 3. PEMBICARA */}
            <section className="bg-black py-24 px-8 md:px-24 border-t border-zinc-900">
                <ScrollReveal className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4 uppercase tracking-wider">Temui Pembicara Khusus Kami</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto font-mono text-sm">Berdiskusi bersama para pakar dan profesional yang berpengalaman di bidangnya.</p>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    <ScrollReveal delay={0}>
                        <div className="bg-zinc-950 p-6 rounded-2xl border-r-8 border-b-8 border-emerald-600 shadow-2xl text-center hover:-translate-y-2 transition-transform duration-300 border border-zinc-900">
                            <img 
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbWyvQB_LaIhOnCoReIB9IQ8lLtArN6w8B0w&s" 
                                alt="Anonymous 1" 
                                className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-emerald-500 grayscale hover:grayscale-0 transition-all"
                            />
                            <h3 className="font-extrabold text-gray-100 text-lg mb-2">Anonymous 1</h3>
                            <p className="text-emerald-400 font-bold text-sm mb-1 font-mono">Red Team Specialist</p>
                            <p className="text-gray-500 font-medium text-xs">Cyber Security Enggineer</p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={100}>
                        <div className="bg-zinc-950 p-6 rounded-2xl border-r-8 border-b-8 border-emerald-600 shadow-2xl text-center hover:-translate-y-2 transition-transform duration-300 border border-zinc-900">
                            <img 
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOuvJJNZ5MK5rW9uM1JnzLXLgSKF9evWHEJGIiKpmc&s" 
                                alt="Anonymous 2" 
                                className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-emerald-500 grayscale hover:grayscale-0 transition-all"
                            />
                            <h3 className="font-extrabold text-gray-100 text-lg mb-2">Anonymous 2</h3>
                            <p className="text-emerald-400 font-bold text-sm mb-1 font-mono">Penetration Tester</p>
                            <p className="text-gray-500 font-medium text-xs">Bug Hunter</p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <div className="bg-zinc-950 p-6 rounded-2xl border-r-8 border-b-8 border-emerald-600 shadow-2xl text-center hover:-translate-y-2 transition-transform duration-300 border border-zinc-900">
                            <img 
                                src="https://it.proxsisgroup.com/wp-content/uploads/2023/11/Kemenhan-Indonesia-Kena-Hack-RI-Darurat-Cyber-Apa-Dampaknya.jpg" 
                                alt="Anonymous 3" 
                                className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-emerald-500 grayscale hover:grayscale-0 transition-all"
                            />
                            <h3 className="font-extrabold text-gray-100 text-lg mb-2">Anonymous 3</h3>
                            <p className="text-emerald-400 font-bold text-sm mb-1 font-mono">Pentest | Web Developer</p>
                            <p className="text-gray-500 font-medium text-xs">Security Research</p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={300}>
                        <div className="bg-zinc-950 p-6 rounded-2xl border-r-8 border-b-8 border-emerald-600 shadow-2xl text-center hover:-translate-y-2 transition-transform duration-300 border border-zinc-900">
                            <img 
                                src="https://img-c.udemycdn.com/course/480x270/4996128_77c7_5.jpg" 
                                alt="Anonymous 4" 
                                className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-emerald-500 grayscale hover:grayscale-0 transition-all"
                            />
                            <h3 className="font-extrabold text-gray-100 text-lg mb-2">Anonymous 4</h3>
                            <p className="text-emerald-400 font-bold text-sm mb-1 font-mono">Cyber Security Profesoenal</p>
                            <p className="text-gray-500 font-medium text-xs">Osint Intellegence</p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* 4. PELAKSANAAN */}
            <section className="bg-zinc-950 py-24 px-8 md:px-24 border-t border-zinc-900">
                <ScrollReveal className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-emerald-500 mb-12 uppercase tracking-wider">Pelaksanaan IT Talkshow</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-black p-8 rounded-2xl shadow-2xl flex items-center gap-6 border border-zinc-900">
                            <div className="bg-emerald-600 w-14 h-14 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg shadow-emerald-500/20">
                                <Calendar size={28} />
                            </div>
                            <div className="text-left">
                                <p className="text-emerald-400 font-bold text-sm font-mono uppercase tracking-wider">// Hari & Tanggal</p>
                                <p className="text-gray-200 text-xl font-extrabold mt-1">Senin, 24 November 2025</p>
                            </div>
                        </div>

                        <div className="bg-black p-8 rounded-2xl shadow-2xl flex items-center gap-6 border border-zinc-900">
                            <div className="bg-emerald-600 w-14 h-14 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg shadow-emerald-500/20">
                                <Clock size={28} />
                            </div>
                            <div className="text-left">
                                <p className="text-emerald-400 font-bold text-sm font-mono uppercase tracking-wider">// Waktu</p>
                                <p className="text-gray-200 text-xl font-extrabold mt-1">08.00 WIB - 12.00 WIB</p>
                            </div>
                        </div>

                        <div className="bg-black p-8 rounded-2xl shadow-2xl flex items-center gap-6 border border-zinc-900">
                            <div className="bg-emerald-600 w-14 h-14 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg shadow-emerald-500/20">
                                <MapPin size={28} />
                            </div>
                            <div className="text-left">
                                <p className="text-emerald-400 font-bold text-sm font-mono uppercase tracking-wider">// Tempat</p>
                                <p className="text-gray-200 text-xl font-extrabold mt-1">Aula Gedung C</p>
                            </div>
                        </div>

                        <div className="bg-black p-8 rounded-2xl shadow-2xl flex items-center gap-6 border border-zinc-900">
                            <div className="bg-emerald-600 w-14 h-14 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg shadow-emerald-500/20">
                                <Building size={28} />
                            </div>
                            <div className="text-left">
                                <p className="text-emerald-400 font-bold text-sm font-mono uppercase tracking-wider">// Lokasi</p>
                                <p className="text-gray-200 text-lg font-extrabold mt-1">Kampus 1 (Mataram) Universitas Harkat Negeri</p>
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
                    <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm">Ada banyak informasi terkait EQUATOR_APT // SYSTEM_BREACH, Anda dapat melihat daftar pertanyaan di bawah ini.</p>
                </ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    <ScrollReveal delay={0}>
                        <Collapse title="Apa itu EQUATOR_APT // SYSTEM_BREACH?" description="EQUATOR_APT // SYSTEM_BREACH adalah rangkaian red team & pentest yang mengutamakan ethics, scope yang jelas, dan pembelajaran yang dapat dipertanggungjawabkan." />
                    </ScrollReveal>
                    <ScrollReveal delay={100}>
                        <Collapse title="Kapan dan dimana acara dilaksanakan?" description="Acara berlangsung secara hybrid (online/offline) sesuai jadwal dan venue yang diumumkan panitia." />
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                        <Collapse title="Apakah ada biaya pendaftaran?" description="Beberapa sesi dapat gratis, sementara sesi hands-on biasanya memiliki kuota dan skema biaya sesuai ketentuan masing-masing event." />
                    </ScrollReveal>
                    <ScrollReveal delay={300}>
                        <Collapse title="Bagaimana update peserta?" description="Update acara akan diumumkan melalui kanal resmi EQUATOR_APT // SYSTEM_BREACH dan media sosial panitia setelah sesi selesai." />
                    </ScrollReveal>
                    <ScrollReveal delay={400}>
                        <Collapse title="Apa yang didapat peserta?" description="Peserta mendapatkan sertifikat/rekap partisipasi, materi referensi, dan kesempatan Q&A bersama mentor/speaker sesuai sesi." />
                    </ScrollReveal>
                    <ScrollReveal delay={500}>
                        <Collapse title="Bagaimana cara mendaftar?" description="Pendaftaran dilakukan melalui website ini: buat akun, pilih sesi yang diikuti, lalu lengkapi formulir pendaftaran." />
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

export default Talkshow;