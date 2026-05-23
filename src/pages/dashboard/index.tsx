import React from 'react';
import { Link } from 'react-router-dom';
import { Users, CalendarDays, Tag, Users2, BarChart3, TrendingUp, Activity } from 'lucide-react';

const stats = [
  {
    name: 'Total Event',
    value: '12',
    change: '+3',
    icon: CalendarDays,
    color: 'text-emerald-400'
  },
  {
    name: 'Total Peserta',
    value: '1,247',
    change: '+18%',
    icon: Users,
    color: 'text-emerald-400'
  },
  {
    name: 'Kategori Aktif',
    value: '4',
    change: 'steady',
    icon: Tag,
    color: 'text-emerald-400'
  },
  {
    name: 'Pembicara',
    value: '8',
    change: '+2',
    icon: Users2,
    color: 'text-emerald-400'
  }
];

export default function DashboardIndex() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 bg-black text-gray-300 min-h-screen">
      
      {/* Header - Cyber Emerald Green */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 border-b border-zinc-900 pb-6">
        <div>
          <h1 className="text-4xl font-black bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent uppercase tracking-wider font-mono">
            Dashboard Admin
          </h1>
          <p className="text-xl text-emerald-500/80 mt-2 font-mono text-sm tracking-wide">
            // Monitoring lengkap Equator APT 2026
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            to="/dashboard/event/create"
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold font-mono text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-900/20 transition-all flex items-center gap-2"
          >
            <CalendarDays size={16} />
            Event Baru
          </Link>
        </div>
      </div>

      {/* Stats Grid - Dark Cyber Box */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-zinc-950 rounded-2xl p-6 border border-zinc-900 shadow-xl transition-all duration-300 group hover:border-emerald-900/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wider font-mono">{stat.name}</p>
                  <p className="text-3xl font-black text-gray-100 mt-1 font-mono">{stat.value}</p>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 group-hover:bg-emerald-950/30 group-hover:border-emerald-800 transition-colors">
                  <IconComponent className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
              <div className="flex items-center mt-4 font-mono text-xs">
                <span className="font-bold text-emerald-400">{stat.change}</span>
                <span className="ml-1.5 text-gray-600">
                  {stat.change === 'steady' ? 'stabil' : stat.change.includes('%') ? 'dari bulan lalu' : 'baru ditambahkan'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity & Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Log Aktivitas Sistem (Full Cyber Text) */}
        <div className="bg-zinc-950 rounded-2xl p-6 border border-zinc-900 shadow-xl">
          <h2 className="text-md font-bold text-gray-200 uppercase tracking-wider font-mono mb-6 flex items-center gap-2 border-b border-zinc-900 pb-3">
            <Activity size={18} className="text-emerald-400" />
            Log Aktivitas Sistem
          </h2>
          <div className="space-y-4">
            
            <div className="flex items-center gap-4 p-4 bg-zinc-900/50 rounded-xl border border-zinc-900/50">
              <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center border border-zinc-800">
                <Users size={16} className="text-emerald-400" />
              </div>
              <div className="flex-1 min-w-0 font-mono">
                <p className="text-sm font-semibold text-gray-300 truncate">10 peserta baru terdaftar Web Pentesting</p>
                <p className="text-xs text-gray-600 mt-0.5">2 jam yang lalu</p>
              </div>
              <span className="text-emerald-400 font-bold font-mono text-sm">+10</span>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-zinc-900/50 rounded-xl border border-zinc-900/50">
              <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center border border-zinc-800">
                <CalendarDays size={16} className="text-emerald-400" />
              </div>
              <div className="flex-1 min-w-0 font-mono">
                <p className="text-sm font-semibold text-gray-300 truncate">Event CTF Competition berhasil diverifikasi</p>
                <p className="text-xs text-gray-600 mt-0.5">1 hari yang lalu</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-zinc-900/50 rounded-xl border border-zinc-900/50">
              <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center border border-zinc-800">
                <Users2 size={16} className="text-emerald-400" />
              </div>
              <div className="flex-1 min-w-0 font-mono">
                <p className="text-sm font-semibold text-gray-300 truncate">Pembicara [OSINT Expert] ditambahkan</p>
                <p className="text-xs text-gray-600 mt-0.5">3 hari yang lalu</p>
              </div>
            </div>
            
          </div>
        </div>

        {/* Statistik Event & Progress Trend */}
        <div className="space-y-6">
          <div className="bg-zinc-950 rounded-2xl p-6 border border-zinc-900 shadow-xl">
            <h2 className="text-md font-bold text-gray-200 uppercase tracking-wider font-mono mb-6 flex items-center gap-2 border-b border-zinc-900 pb-3">
              <BarChart3 size={18} className="text-emerald-400" />
              Statistik Event
            </h2>
            <div className="space-y-4 font-mono">
              <div className="flex justify-between items-center p-4 bg-zinc-900/30 border border-zinc-900 rounded-xl">
                <span className="text-sm text-gray-400">Pendaftaran Hari Ini</span>
                <span className="text-xl font-black text-emerald-400">47</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-zinc-900/30 border border-zinc-900 rounded-xl">
                <span className="text-sm text-gray-400">Konversi</span>
                <span className="text-xl font-black text-emerald-400">82%</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-zinc-900/30 border border-zinc-900 rounded-xl">
                <span className="text-sm text-gray-400">Revenue</span>
                <span className="text-xl font-black text-emerald-400">Rp 12.5M</span>
              </div>
            </div>
          </div>

          {/* Trend Tracker */}
          <div className="bg-zinc-950 rounded-2xl p-6 border border-zinc-900 shadow-xl">
            <h2 className="text-md font-bold text-gray-200 uppercase tracking-wider font-mono mb-6 flex items-center gap-2 border-b border-zinc-900 pb-3">
              <TrendingUp size={18} className="text-emerald-400" />
              Trend Bulan Ini
            </h2>
            <div className="space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between gap-4">
                <span className="text-gray-400 w-20">Seminar</span>
                <div className="flex-1 bg-zinc-900 border border-zinc-800 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: '75%' }} />
                </div>
                <span className="text-emerald-400 font-bold w-8 text-right">75%</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-gray-400 w-20">Workshop</span>
                <div className="flex-1 bg-zinc-900 border border-zinc-800 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: '60%' }} />
                </div>
                <span className="text-emerald-400 font-bold w-8 text-right">60%</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-gray-400 w-20">Competition</span>
                <div className="flex-1 bg-zinc-900 border border-zinc-800 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: '45%' }} />
                </div>
                <span className="text-emerald-400 font-bold w-8 text-right">45%</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}