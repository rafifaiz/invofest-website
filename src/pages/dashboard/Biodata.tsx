import React from "react";
import { Users } from "lucide-react";

export default function Biodata() {
    return (
        <div className="p-8 max-w-4xl mx-auto space-y-8 bg-black text-gray-300 min-h-screen font-mono">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 border-b border-zinc-900 pb-6">
            <div>
            <h1 className="text-3xl font-black bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent uppercase tracking-wider">
                BIODATA_MAHASISWA //
            </h1>
            <p className="text-xs text-emerald-500/80 mt-2 tracking-wide">
                Menu khusus pembuat website - Fakultas Sekolah Vokasi
            </p>
            </div>
        </div>

        <div className="bg-zinc-950 rounded-2xl border border-zinc-900 shadow-2xl overflow-hidden">
            <div className="p-5 border-b border-zinc-900 bg-zinc-950 flex items-center gap-2">
            <Users size={14} className="text-emerald-400" />
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-200">
                EQUATOR_APT_TEAM // PROFILE
            </h2>
            </div>

            <div className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider">Nama</p>
                <p className="text-sm text-gray-200 mt-2">Rafi Faiz Amalta</p>
                </div>
                <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider">NIM</p>
                <p className="text-sm text-gray-200 mt-2">24090033</p>
                </div>
                <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider">Program Studi</p>
                <p className="text-sm text-gray-200 mt-2">D-4 Teknik Informatika</p>
                </div>
                <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider">Fakultas</p>
                <p className="text-sm text-gray-200 mt-2">Fakultas Sekolah Vokasi</p>
                </div>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider">Alamat</p>
                <p className="text-sm text-gray-200 mt-2">
                Gedung D Ruang D2.15 Kampus Mataram – Jalan Mataram No.9 Kota Tegal
                </p>
            </div>

            <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider">WhatsApp</p>
                <p className="text-sm text-gray-200 mt-2">+94378-6875-01</p>
            </div>

            <div className="bg-emerald-950/30 border border-emerald-900/40 rounded-xl p-4">
                <p className="text-xs text-emerald-300 uppercase tracking-wider">Catatan</p>
                <p className="text-sm text-emerald-100 mt-2">
                kata kata hari ini : selain yg tidak menghasilkan uang saya anggap formalitas saja mau itu tentang hal apapun
                </p>
            </div>
            </div>
        </div>
        </div>
    );
}

