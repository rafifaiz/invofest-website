import { Outlet, Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Tag, Calendar, Users } from "lucide-react";

const menuItems = [
  { path: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { path: "/dashboard/kategori", icon: Tag, label: "Kategori" },
  { path: "/dashboard/event", icon: Calendar, label: "Event" },
  { path: "/dashboard/pembicara", icon: Users, label: "Pembicara" }
];

export const AdminLayout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-red-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-red-600 shadow-lg z-40">
        <div className="p-6 border-b border-red-500 bg-red-600 text-white rounded-br-lg">
          <h1 className="text-2xl font-bold drop-shadow-lg">Invofest Admin</h1>
          <p className="text-sm mt-1 drop-shadow-md">Kelola event & pembicara</p>
        </div>
        <nav className="mt-8">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-6 py-4 text-white hover:bg-red-700 hover:text-white transition-all duration-200 border-r-4 ${
                  isActive ? "bg-red-700 border-red-900 font-semibold shadow-inner" : "border-transparent"
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Main content */}
      <div className="ml-64 p-8">
        <Outlet />
      </div>
    </div>
  );
};

