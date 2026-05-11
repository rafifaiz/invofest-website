import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Plus } from 'lucide-react';

export default function EventIndex() {
  const events = [
    {
      id: 1,
      title: "Seminar AI 2024",
      date: "2024-06-15",
      location: "Aula Utama",
      category: "Seminar",
      participants: 150
    },
    {
      id: 2,
      title: "Workshop UI/UX Design",
      date: "2024-06-20",
      location: "Lab Digital",
      category: "Workshop",
      participants: 50
    }
  ];

  return (
    <div className="p-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-red-900 mb-2">Event</h1>
          <p className="text-lg text-red-800">Buat dan kelola event Invofest</p>
        </div>
        <Link
          to="/dashboard/event/create"
          className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2 w-full md:w-auto justify-center"
        >
          <Plus size={20} />
          Tambah Event Baru
        </Link>
      </div>

      <div className="bg-red-50 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6 border-b border-red-200">
          <h2 className="text-xl font-bold text-red-900">Daftar Event</h2>
        </div>
        <div className="divide-y divide-red-200">
          {events.length === 0 ? (
            <div className="text-center py-16">
              <Calendar className="mx-auto h-16 w-16 text-red-300 mb-4" />
              <h3 className="text-lg font-medium text-red-900 mb-2">Belum ada event</h3>
              <p className="text-red-800/80 mb-6">Mulai dengan menambah event pertama</p>
              <Link
                to="/dashboard/event/create"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Tambah Event Pertama
              </Link>
            </div>
          ) : (
            events.map((event) => (
              <div key={event.id} className="p-6 hover:bg-red-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-red-900 mb-1">{event.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-red-800 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar size={16} />
                        {event.date}
                      </span>
                      <span>{event.location}</span>
                      <span className="capitalize">{event.category}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-red-800/80">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      {event.participants} peserta terdaftar
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      to={`/dashboard/event/${event.id}/edit`}
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
            ))
          )}
        </div>
      </div>
    </div>
  );
}

