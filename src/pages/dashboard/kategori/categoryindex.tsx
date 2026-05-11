import React from "react";
import { Link } from "react-router-dom";
import { Tag, Plus } from "lucide-react";

export default function CategoryIndex() {
  const categories = [
    { id: 1, name: "Seminar", eventCount: 5, color: "from-red-500 to-red-600" },
    { id: 2, name: "Workshop", eventCount: 3, color: "from-red-500 to-red-600" },
    { id: 3, name: "Talkshow", eventCount: 2, color: "from-red-500 to-red-600" },
    { id: 4, name: "Competition", eventCount: 4, color: "from-red-500 to-red-600" },
  ];

  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-red-900 mb-2">Kategori</h1>
          <p className="text-lg text-red-800">Kelola semua kategori event</p>
        </div>
        <Link
          to="/dashboard/kategori/create"
          className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2 w-full md:w-auto justify-center"
        >
          <Plus size={20} />
          Tambah Kategori
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-red-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
          >
            <div className={`h-32 bg-gradient-to-r ${category.color} flex items-end p-6`}>
              <Tag className="w-12 h-12 text-white drop-shadow-lg" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-red-900 mb-1 group-hover:text-red-800 transition-colors">
                {category.name}
              </h3>
              <p className="text-2xl font-bold text-red-900 mb-2">{category.eventCount}</p>
              <p className="text-sm text-red-700 mb-4">Event tersedia</p>

              <div className="flex gap-2">
                <button
                  type="button"
                  className="flex-1 text-center px-4 py-2 bg-red-100 hover:bg-red-200 text-red-800 text-sm font-medium rounded-lg transition-all shadow-sm hover:shadow-md"
                  onClick={() => alert("Fitur edit belum diaktifkan (hanya create + index).")}
                >
                  Edit
                </button>

                <button
                  type="button"
                  className="flex-1 px-4 py-2 bg-red-200 hover:bg-red-300 text-red-900 text-sm font-medium rounded-lg transition-all shadow-sm hover:shadow-md"
                  onClick={() => alert("Fitur hapus belum diaktifkan.")}
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {categories.length === 0 && (
        <div className="text-center py-16 mt-12">
          <Tag className="mx-auto h-16 w-16 text-red-300 mb-4" />
          <h3 className="text-lg font-medium text-red-900 mb-2">Belum ada kategori</h3>
          <p className="text-red-800/80 mb-6">Buat kategori pertama untuk mengorganisir event</p>
          <Link
            to="/dashboard/kategori/create"
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
          >
            <Plus size={20} />
            Buat Kategori Pertama
          </Link>
        </div>
      )}
    </div>
  );
}

