import { Button } from '../components/ui/Button';
import { Collapse } from '../components/ui/Collapse';
import { ScrollReveal } from '../components/ScrollReveal';

const Seminar = () => {
    const openWhatsApp = () => {
        window.open('https://api.whatsapp.com/send/?phone=62895605919551&text=Halo+Kak%2C+Saya+Ingin+Bertanya+mengenai+EQUATOR_APT+%2F%2F+SYSTEM_BREACH...&type=phone_number&app_absent=0', '_blank');
    };

    return (
        <div className="pt-16 md:pt-20 bg-black min-h-screen">
            {/* 1. HERO SECTION */}
            <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center px-8 md:px-24 py-12 bg-black">
                <ScrollReveal direction="left" className="md:w-1/2 z-10 text-left">
                    <h1 className="text-5xl md:text-7xl font-black text-green-300 mb-4 tracking-tight">
                        Red Team Seminar
                    </h1>
                    <p className="text-2xl md:text-3xl font-bold text-green-300 mb-6">
                        "Threat Modeling & Reporting for Red Teams"
                    </p>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl font-medium">
                        Seminar nasional yang membahas strategi dan arsitektur teknologi untuk menciptakan sistem 
                        di mana manusia dan AI bekerja sebagai mitra yang sinergis. Yang bertujuan mengubah paradigma 
                        dari persaingan menjadi kolaborasi, serta meningkatkan pengetahuan peserta dalam merancang 
                        teknologi AI yang berpusat pada manusia.
                    </p>
                    <div className="flex flex-wrap gap-4 items-center">
                        <button 
                            onClick={openWhatsApp}
                            className="bg-black border border-green-300 text-white hover:bg-green-300 hover:text-black transition-all duration-300 px-6 py-3 rounded-md font-bold tracking-wider uppercase text-sm"
                        >
                            DAFTAR SEKARANG
                        </button>
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={200} className="md:w-1/2 flex justify-center mt-12 md:mt-0 relative">
                    <img 
                        src="https://breakingsecurity.net/wp-content/uploads/2023/11/Red_Team_Hacker.png" 
                        alt="Maskot Seminar" 
                        className="w-full max-w-[550px] drop-shadow-2xl" 
                    />
                </ScrollReveal>
            </section>

            {/* 2. TENTANG IT SEMINAR */}
            <section id="tentang" className="bg-black py-24 px-8 md:px-24">
                <ScrollReveal className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-green-300 mb-8">Tentang Red Team Seminar</h2>
                    <p className="text-gray-300 leading-relaxed font-medium text-lg">
                        Seminar bertajuk "Human-AI Integration: Merancang Arsitektur Kolaboratif, Di tengah pesatnya kemajuan 
                        kecerdasan buatan (AI), narasi yang sering muncul adalah tentang persaingan antara manusia dan mesin. 
                        Kekhawatiran akan penggantian peran manusia oleh teknologi cerdas menjadi diskusi utama di berbagai sektor. 
                        Namun, bagaimana jika kita mengubah paradigma tersebut? Seminar Nasional Teknologi Informasi ini hadir 
                        untuk menjawab tantangan itu dengan mengangkat tema "Human-AI Integration: Merancang Arsitektur Kolaboratif, 
                        Bukan Kompetitif." Kami bertujuan untuk menggeser fokus dari ketakutan akan kompetisi menjadi eksplorasi 
                        peluang kolaborasi. Seminar ini akan mengupas tuntas bagaimana kita dapat merancang sistem, etika, 
                        dan lingkungan kerja di mana AI berfungsi sebagai mitra yang memperkuat kecerdasan, kreativitas, 
                        dan produktivitas manusia—bukan sebagai pengganti.
                    </p>
                </ScrollReveal>
            </section>

            {/* 3. PEMBICARA */}
            <section className="bg-black py-24 px-8 md:px-24">
                <ScrollReveal className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-green-300 mb-4">Temui Pembicara Khusus Kami</h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    <ScrollReveal delay={0}>
                        <div className="bg-black p-8 rounded-2xl border border-green-300 shadow-xl text-center hover:-translate-y-2 transition-transform duration-300">
                            <img 
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSndcs7QNyQRK_e7ooFrhCD7jYILMP1zE5b3A&s" 
                                alt="Red Team Hacker" 
                                className="w-40 h-40 mx-auto rounded-full object-cover mb-6 border-4 border-green-300"
                            />
                            <h3 className="font-extrabold text-green-300 text-xl mb-2">Lill Sah Cyber</h3>
                            <p className="text-gray-400 font-medium">Team Anonymous Cyber</p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={100}>
                        <div className="bg-black p-8 rounded-2xl border border-green-300 shadow-xl text-center hover:-translate-y-2 transition-transform duration-300">
                            <img 
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSkS40s4BnxFZGaCuYM_gc4BuPQuWc5h2lLQ&s" 
                                alt="Lil Bah Cyber" 
                                className="w-40 h-40 mx-auto rounded-full object-cover mb-6 border-4 border-green-300"
                            />
                            <h3 className="font-extrabold text-green-300 text-xl mb-2">Lill Bah Cyber</h3>
                            <p className="text-gray-400 font-medium">Team Anonymous Cyber</p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* 4. PELAKSANAAN */}
            <section className="bg-black py-24 px-8 md:px-24">
                <ScrollReveal className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-green-300 mb-12">Pelaksanaan Red Team Seminar</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-neutral-900 border border-green-300 p-8 rounded-2xl shadow-lg">
                            <p className="text-green-300 font-bold text-lg mb-2">Hari & Tanggal</p>
                            <p className="text-white text-2xl font-extrabold">Kamis, 27 November 2025</p>
                        </div>
                        <div className="bg-neutral-900 border border-green-300 p-8 rounded-2xl shadow-lg">
                            <p className="text-green-300 font-bold text-lg mb-2">Waktu</p>
                            <p className="text-white text-2xl font-extrabold">08.00 WIB - 12.00 WIB</p>
                        </div>
                        <div className="bg-neutral-900 border border-green-300 p-8 rounded-2xl shadow-lg">
                            <p className="text-green-300 font-bold text-lg mb-2">Tempat</p>
                            <p className="text-white text-2xl font-extrabold">Aula Gedung C</p>
                        </div>
                        <div className="bg-neutral-900 border border-green-300 p-8 rounded-2xl shadow-lg">
                            <p className="text-green-300 font-bold text-lg mb-2">Lokasi</p>
                            <p className="text-white text-2xl font-extrabold">Kampus 1 (Mataram) Universitas Harkat Negeri</p>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* 5. FAQ SECTION */}
            <section className="py-24 px-8 md:px-24 bg-black">
                <ScrollReveal className="text-center mb-12">
                    <p className="text-green-300 font-bold tracking-widest uppercase mb-2">FAQ</p>
                    <h2 className="text-4xl font-extrabold text-white">
                        Punya Pertanyaan? Lihat <span className="text-green-300">Disini</span>
                    </h2>
                    <p className="text-gray-400 mt-4">Ada banyak informasi terkait EQUATOR_APT // SYSTEM_BREACH, Anda dapat melihat daftar pertanyaan di bawah ini.</p>
                </ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    <ScrollReveal delay={0}>
                        <Collapse title="Apa itu EQUATOR_APT // SYSTEM_BREACH?" description="EQUATOR_APT // SYSTEM_BREACH adalah rangkaian red team & pentest untuk melatih threat modeling, pengujian aplikasi/web, serta dokumentasi temuan secara etis." />
                    </ScrollReveal>
                    <ScrollReveal delay={100}>
                        <Collapse title="Kapan dan dimana acara dilaksanakan?" description="Rangkaian kegiatan EQUATOR_APT // SYSTEM_BREACH dilaksanakan secara hybrid: sesi online dan sesi offline (venue mengikuti pengumuman panitia)." />
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                        <Collapse title="Apakah ada biaya pendaftaran?" description="Beberapa sesi dapat gratis, sementara sesi hands-on/workshop biasanya memiliki kuota dan skema biaya sesuai ketentuan masing-masing event." />
                    </ScrollReveal>
                    <ScrollReveal delay={300}>
                        <Collapse title="Bagaimana update peserta & hasil evaluasi?" description="Update kegiatan dan ringkasan evaluasi akan diumumkan melalui kanal resmi EQUATOR_APT // SYSTEM_BREACH dan media sosial panitia setelah sesi selesai." />
                    </ScrollReveal>
                    <ScrollReveal delay={400}>
                        <Collapse title="Apa yang didapat peserta?" description="Peserta berkesempatan mendapatkan sertifikat kehadiran/partisipasi, materi referensi, dan umpan balik/redaction dari mentor sesuai sesi." />
                    </ScrollReveal>
                    <ScrollReveal delay={500}>
                        <Collapse title="Bagaimana cara mendaftar?" description="Pendaftaran dilakukan melalui website ini: buat akun, pilih sesi yang diikuti, lalu lengkapi formulir pendaftaran." />
                    </ScrollReveal>
                </div>
            </section>

            {/* Tombol Scroll to Top disesuaikan warna hijau neon */}
            <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 bg-green-300 text-black w-12 h-12 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform font-bold"
            >
                ↑
            </button>
        </div>
    );
};

export default Seminar;