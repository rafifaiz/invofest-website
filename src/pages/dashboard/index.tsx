import React from 'react';
import { Link } from 'react-router-dom';
import { Users, CalendarDays, Tag, Users2, BarChart3, TrendingUp, Activity } from 'lucide-react';

const stats = [
  {
    name: 'Total Event',
    value: '12',
    change: '+3',
    icon: CalendarDays,
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'Total Peserta',
    value: '1,247',
    change: '+18%',
    icon: Users,
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    name: 'Kategori Aktif',
    value: '4',
    change: 'steady',
    icon: Tag,
    color: 'from-purple-500 to-purple-600'
  },
  {
    name: 'Pembicara',
    value: '8',
    change: '+2',
    icon: Users2,
    color: 'from-orange-500 to-orange-600'
  }
];

export default function DashboardIndex() {
  const Icon = ({ iconName, color }: { iconName: any; color: string }) => {
    const Component = iconName;
    return <Component className={`w-8 h-8 ${color.replace('from-', 'text-').replace('to-', '')}`} />;
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 bg-red-50">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-900 to-red-700 bg-clip-text text-transparent">
            Dashboard Admin
          </h1>
          <p className="text-xl text-red-900 mt-2">Monitoring lengkap Invofest 2025</p>
        </div>
        <div className="flex gap-3">
          <Link
            to="/dashboard/event/create"
            className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
          >
            <CalendarDays size={18} />
            Event Baru
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-red-100/70 backdrop-blur-xl rounded-2xl p-6 border border-red-200/50 shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-red-900 uppercase tracking-wide">{stat.name}</p>
                <p className="text-3xl font-bold text-red-900 mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 shadow-lg group-hover:scale-110 transition-transform`}>
                <Icon iconName={stat.icon} color={stat.color} />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <span className="text-sm font-semibold text-red-700">{stat.change}</span>
              <span className="ml-1 text-xs text-red-700/70">{stat.change === 'steady' ? 'stabil' : stat.change.includes('%') ? 'dari bulan lalu' : 'baru ditambahkan'}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity & Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-red-100/70 backdrop-blur-xl rounded-2xl p-6 border border-red-200/50 shadow-lg">
          <h2 className="text-xl font-bold text-red-900 mb-6 flex items-center gap-2">
            <Activity size={20} />
            Aktivitas Terbaru
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
              <div className="w-10 h-10 bg-red-200 rounded-xl flex items-center justify-center">
                <Users size={16} className="text-red-800" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-red-900 truncate">10 peserta baru Workshop UI/UX</p>
                <p className="text-sm text-red-800/70">2 jam yang lalu</p>
              </div>
              <span className="text-red-800 font-medium">+10</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
              <div className="w-10 h-10 bg-red-200 rounded-xl flex items-center justify-center">
                <CalendarDays size={16} className="text-red-800" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-red-900 truncate">Event Seminar AI dikonfirmasi</p>
                <p className="text-sm text-red-800/70">1 hari yang lalu</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
              <div className="w-10 h-10 bg-red-200 rounded-xl flex items-center justify-center">
                <Users2 size={16} className="text-red-800" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-red-900 truncate">Pembicara baru ditambahkan</p>
                <p className="text-sm text-red-800/70">3 hari yang lalu</p>
              </div>
            </div>
          </div>
        </div>

        {/* Charts/Quick Stats */}
        <div className="space-y-6">
          <div className="bg-red-100/70 backdrop-blur-xl rounded-2xl p-6 border border-red-200/50 shadow-lg">
            <h2 className="text-xl font-bold text-red-900 mb-6 flex items-center gap-2">
              <BarChart3 size={20} />
              Statistik Event
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-red-100 to-red-200 rounded-xl">
                <span className="font-semibold text-red-900">Pendaftaran Hari Ini</span>
                <span className="text-2xl font-bold text-red-800">47</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-red-100 to-red-200 rounded-xl">
                <span className="font-semibold text-red-900">Konversi</span>
                <span className="text-2xl font-bold text-red-800">82%</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-red-100 to-red-200 rounded-xl">
                <span className="font-semibold text-red-900">Revenue</span>
                <span className="text-2xl font-bold text-red-800">Rp 12.5M</span>
              </div>
            </div>
          </div>

          <div className="bg-red-100/70 backdrop-blur-xl rounded-2xl p-6 border border-red-200/50 shadow-lg">
            <h2 className="text-xl font-bold text-red-900 mb-6 flex items-center gap-2">
              <TrendingUp size={20} />
              Trend Bulan Ini
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-red-900">Seminar</span>
                <div className="w-24 bg-red-200 rounded-full h-2">
                  <div className="bg-red-700 h-2 rounded-full" style={{ width: '75%' }} />
                </div>
                <span className="text-red-900">75%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-red-900">Workshop</span>
                <div className="w-24 bg-red-200 rounded-full h-2">
                  <div className="bg-red-700 h-2 rounded-full" style={{ width: '60%' }} />
                </div>
                <span className="text-red-900">60%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-red-900">Competition</span>
                <div className="w-24 bg-red-200 rounded-full h-2">
                  <div className="bg-red-700 h-2 rounded-full" style={{ width: '45%' }} />
                </div>
                <span className="text-red-900">45%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

