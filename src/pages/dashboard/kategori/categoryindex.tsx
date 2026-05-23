import React, { useState, useEffect } from "react"; // Tambahkan useEffect di sini
import { Link } from "react-router-dom";
import { Plus, Terminal, ShieldAlert, Layers, Edit3, Trash2 } from "lucide-react";
import api from "../../../services/api"; // Path ini harus benar mengarah ke src/services/api.ts

export default function CategoryIndex() {
  const [categories, setCategories] = useState<any[]>([]);
  const [deleteTarget, setDeleteTarget] = useState<{ id: number; name: string } | null>(null);

  // Ambil data saat halaman dimuat
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.get('/categories');
        setCategories(res.data);
      } catch (err) {
        console.error("Gagal memuat kategori:", err);
      }
    };
    fetchCategories();
  }, []);

  // Fungsi hapus beneran
  const executeDelete = async () => {
    if (!deleteTarget) return;
    try {
      await api.delete(`/categories/${deleteTarget.id}`);
      setCategories((prev) => prev.filter((c) => c.id !== deleteTarget.id));
      setDeleteTarget(null);
    } catch (err) {
      console.error("Gagal menghapus:", err);
      alert("Gagal menghapus.");
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 bg-black text-gray-300 min-h-screen relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4 border-b border-zinc-900 pb-6">
        <div>
          <h1 className="text-3xl font-black bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent uppercase tracking-wider font-mono">
            CATEGORY_NODES //
          </h1>
          <p className="text-sm font-mono text-emerald-500/80 mt-2 tracking-wide">
            // Manajemen klasifikasi data dan parameter taktis Equator APT
          </p>
        </div>
        <Link
          to="/dashboard/kategori/create"
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold font-mono text-xs uppercase tracking-wider shadow-lg shadow-emerald-900/20 transition-all flex items-center gap-2 w-full md:w-auto justify-center"
        >
          <Plus size={16} />
          Tambah Kategori
        </Link>
      </div>

      {/* List */}
      <div className="bg-zinc-950 rounded-2xl border border-zinc-900 overflow-hidden">
        {categories.map((cat) => (
          <div key={cat.id} className="p-6 border-b border-zinc-900 flex justify-between items-center hover:bg-zinc-900/30">
            <div>
<h3 className="font-bold text-gray-200">{cat.nama}</h3>
            </div>
            <div className="flex gap-2">
              <Link to={`/dashboard/kategori/${cat.id}/edit`} className="p-2 border border-zinc-800 text-gray-400 hover:text-emerald-400 rounded-lg">
                <Edit3 size={16} />
              </Link>
              <button
                onClick={async () => {
                  try {
                    await api.delete(`/categories/${cat.id}`);
                    setCategories((prev) => prev.filter((c) => c.id !== cat.id));
                  } catch (err) {
                    console.error("Gagal menghapus:", err);
                    alert("Gagal menghapus.");
                  }
                }}
                className="p-2 border border-zinc-800 text-gray-400 hover:text-red-400 rounded-lg"
                title="Hapus kategori"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}