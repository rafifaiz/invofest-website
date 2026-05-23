import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from "../../../services/api";

type Speaker = {
  id: number;
  nama: string;
  jabatan: string;
  sosialMedia: string | null;
};

export default function PembicaraIndex() {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);


  useEffect(() => {
    api
      .get('/pembicara')
      .then((res) => setSpeakers(res.data))
      .catch((e) => console.error('Gagal memuat pembicara', e));
  }, []);

  const executeDelete = async (id: number) => {
    await api.delete(`/pembicara/${id}`);
    setSpeakers((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="p-8 max-w-7xl mx-auto bg-black text-gray-300 min-h-screen">
      <div className="flex justify-between mb-8">
        <h1 className="text-3xl font-black text-emerald-500">SPEAKER_REGISTRY //</h1>
        <Link to="/dashboard/pembicara/create" className="bg-emerald-600 px-6 py-3 rounded-xl">+ Tambah Pembicara</Link>
      </div>
      <div className="bg-zinc-950 rounded-2xl border border-zinc-900">
        {speakers.map((s) => (
          <div key={s.id} className="p-6 border-b border-zinc-900 flex justify-between">
            <div>
              <h3 className="font-bold">{s.nama}</h3>
              <p className="text-xs text-gray-500">{s.jabatan}</p>
            </div>
            <div className="flex gap-2 items-center">
              <Link
                to={`/dashboard/pembicara/${s.id}/edit`}
                className="inline-flex items-center justify-center px-3 py-1.5 rounded-lg text-xs font-mono border border-zinc-800 text-emerald-400 hover:text-emerald-300 hover:border-emerald-500"
              >
                Edit
              </Link>
              <button
                onClick={() => executeDelete(s.id)}
                className="inline-flex items-center justify-center px-3 py-1.5 rounded-lg text-xs font-mono border border-zinc-800 text-red-400 hover:text-red-300 hover:border-red-500"
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}