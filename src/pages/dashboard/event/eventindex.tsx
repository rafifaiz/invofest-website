import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Trash2, Edit3, ShieldAlert } from 'lucide-react';
import api from '../../../services/api'; // Pastikan path ini benar!

export default function EventIndex() {
  const [events, setEvents] = useState<Array<{ id: number; nama?: string; title?: string; date_event?: string; date?: string; lokasi?: string; location?: string }>>([]);
  const [deleteTarget, setDeleteTarget] = useState<{ id: number; title: string } | null>(null);

  // Kita taruh di sini agar saat halaman dibuka, data langsung terambil
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/events');
        setEvents(response.data);
      } catch (e) {
        console.error("Gagal mengambil data dari server:", e);
      }
    };
    
    fetchData();
  }, []); // [] artinya hanya jalan sekali saat komponen pertama kali muncul

  const executeDelete = async () => {
    if (deleteTarget) {
      try {
        await api.delete(`/events/${deleteTarget.id}`);
        // Update UI secara instan setelah sukses hapus
        setEvents(events.filter(e => e.id !== deleteTarget.id));
        setDeleteTarget(null);
      } catch (err) {
        alert("Gagal menghapus data.");
      }
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto bg-black text-gray-300 min-h-screen">
      <div className="flex justify-between items-center mb-8 border-b border-zinc-900 pb-6">
        <h1 className="text-3xl font-black text-emerald-500 uppercase tracking-wider font-mono">EVENT_REGISTRY</h1>
        <Link to="/dashboard/event/create" className="bg-emerald-600 px-6 py-3 rounded-xl font-bold text-xs uppercase flex items-center gap-2">
          <Plus size={16} /> Tambah Event
        </Link>
      </div>

      <div className="bg-zinc-950 rounded-2xl border border-zinc-900 overflow-hidden">
        {events.length === 0 ? (
          <div className="p-10 text-center text-gray-500">Data tidak ditemukan.</div>
        ) : (
          events.map((event) => (
            <div key={event.id} className="p-6 border-b border-zinc-900 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-gray-200">{event.nama ?? event.title}</h3>
                <p className="text-xs font-mono text-gray-500">
                  {(event.date_event ?? event.date) ?? "-"} | {(event.lokasi ?? event.location) ?? "-"}
                </p>
              </div>
              <div className="flex gap-3">
                <Link to={`/dashboard/event/${event.id}/edit`} className="p-2 border border-zinc-800 rounded-lg text-gray-400 hover:text-emerald-400"><Edit3 size={16} /></Link>
                <button
                  type="button"
                  title="Hapus"
                  onClick={() => setDeleteTarget({ id: event.id, title: event.nama ?? event.title })}
                  className="p-2 border border-zinc-800 rounded-lg text-gray-400 hover:text-red-400"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-zinc-950 border border-red-900 p-6 rounded-2xl max-w-sm w-full">
            <h3 className="text-red-400 font-bold mb-4 flex items-center gap-2"><ShieldAlert /> PURGE_CONFIRM</h3>
            <p className="text-xs text-zinc-400 mb-6">Yakin ingin menghapus "{deleteTarget.title}"?</p>
            <div className="flex gap-3 justify-end">
              <button onClick={() => setDeleteTarget(null)} className="px-4 py-2 border border-zinc-800 rounded-lg text-xs">Abort</button>
              <button onClick={executeDelete} className="px-4 py-2 bg-red-800 rounded-lg text-xs">Execute_Purge</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}