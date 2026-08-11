import {
  LayoutDashboard,
  Receipt,
  PieChart,
  Wallet,
  User,
  LogOut,
  X,
} from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";
import { logoutUser } from "../../services/authService";

const menuItems = [
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: Receipt,
    title: "Transactions",
    path: "/transactions",
  },
  {
    icon: PieChart,
    title: "Analytics",
    path: "/analytics",
  },
  {
    icon: Wallet,
    title: "Budget",
    path: "/budget",
  },
  {
    icon: User,
    title: "Profile",
    path: "/profile",
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path) => {
    navigate(path);
    setSidebarOpen(false);
  };

  const handleLogout = async () => {
    try {
      await logoutUser();

      setSidebarOpen(false);
      navigate("/login");
    } catch (error) {
      console.log("Logout failed:", error);

      // Even if backend request fails,
      // send user back to login.
      setSidebarOpen(false);
      navigate("/login");
    }
  };

  return (
    <aside
      className={`fixed left-0 top-0 z-50 flex h-screen w-64 flex-col border-r border-white/10 bg-[#0B0B0A] shadow-[10px_0_40px_rgba(0,0,0,.15)] transition-transform duration-300 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      {/* Mobile Close Button */}

      <button
        type="button"
        onClick={() => setSidebarOpen(false)}
        className="absolute right-3 top-3 rounded-lg bg-white/5 p-2 text-slate-300 transition hover:bg-white/10 hover:text-[#D6B56D] lg:hidden"
      >
        <X size={20} />
      </button>

      {/* Logo */}

      <div className="flex items-center gap-3 border-b border-white/10 px-5 py-5">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#D6B56D] to-[#B89550] text-lg font-black text-[#0B0B0A] shadow-[0_8px_25px_rgba(214,181,109,.18)]">
          ₹
        </div>

        <div>
          <h2 className="text-lg font-black text-white">
            Expense
            <span className="text-[#D6B56D]">Flow</span>
          </h2>

          <p className="text-[10px] uppercase tracking-widest text-slate-500">
            Smart Finance
          </p>
        </div>
      </div>

      {/* Menu */}

      <nav className="mt-4 flex-1 px-3">
        {menuItems.map((item) => {
          const Icon = item.icon;

          const isActive = location.pathname === item.path;

          return (
            <button
              key={item.title}
              type="button"
              onClick={() => handleNavigate(item.path)}
              className={`mb-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300 ${
                isActive
                  ? "bg-[#D6B56D] text-[#0B0B0A] shadow-[0_8px_25px_rgba(214,181,109,.15)]"
                  : "text-slate-400 hover:bg-white/5 hover:text-[#D6B56D]"
              }`}
            >
              <Icon size={19} />

              <span className="text-sm font-medium">
                {item.title}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Bottom */}

      <div className="border-t border-white/10 p-3">
        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-rose-400 transition-all duration-300 hover:bg-rose-500/10 hover:text-rose-300"
        >
          <LogOut size={19} />

          <span className="text-sm font-medium">
            Logout
          </span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;