import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Plus, User, Share2 } from 'lucide-react';

export default function PembicaraIndex() {
  const speakers = [
    {
      id: 1,
      name: "Dr. John Doe",
      role: "CEO Tech Startup Indonesia",
      social: "@johndoe",
      events: 3
    },
    {
      id: 2,
      name: "Sarah Wijaya",
      role: "UI/UX Designer Expert",
      social: "@sarahwijaya",
      events: 2
    }
  ];

  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-red-900 mb-2">Pembicara</h1>
          <p className="text-lg text-red-800">Kelola daftar pembicara terhormat Invofest</p>
        </div>
        <Link
          to="/dashboard/pembicara/create"
          className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2 w-full md:w-auto justify-center"
        >
          <Plus size={20} />
          Tambah Pembicara
        </Link>
      </div>

      <div className="bg-red-50 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6 border-b border-red-200">
          <h2 className="text-xl font-bold text-red-900">Daftar Pembicara</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {speakers.length === 0 ? (
            <div className="text-center py-16">
              <Users className="mx-auto h-16 w-16 text-red-300 mb-4" />
              <h3 className="text-lg font-medium text-red-900 mb-2">Belum ada pembicara</h3>
              <p className="text-red-800/80 mb-6">Tambahkan pembicara pertama untuk event</p>
              <Link
                to="/dashboard/pembicara/create"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Tambah Pembicara Pertama
              </Link>
            </div>
          ) : (
            speakers.map((speaker) => (
              <div key={speaker.id} className="p-6 hover:bg-red-50 transition-colors">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-gray-900 truncate">{speaker.name}</h3>
                    <p className="text-gray-600 mb-1">{speaker.role}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Share2 size={14} />
                        {speaker.social}
                      </div>
                    </div>
                  </div>
                <div className="text-right">
                    <p className="text-sm font-semibold text-red-900">{speaker.events} Event</p>
                    <div className="flex gap-2 mt-2">
                      <Link
                        to={`/dashboard/pembicara/${speaker.id}/edit`}
                        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-all"
                      >
                        Edit
                      </Link>
                      <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-all">
                        Hapus
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

