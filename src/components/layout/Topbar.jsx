import { Search, Menu } from "lucide-react";

const Topbar = ({ setSidebarOpen }) => {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex h-20 items-center justify-between border-b border-white/[0.06] bg-[#09090B]/95 px-4 backdrop-blur-xl md:px-6 lg:left-64">
      {/* Left */}
      <div className="flex items-center gap-3">

        {/* Mobile Menu */}
        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-[#D6B56D]/40 hover:bg-[#D6B56D]/10 hover:text-[#D6B56D] lg:hidden"
        >
          <Menu size={20} />
        </button>

        {/* Welcome Text */}
        <div>
          <h1 className="text-lg font-bold text-white md:text-xl">
            Welcome back 👋
          </h1>

          <p className="hidden text-[11px] text-slate-400 sm:block">
            Here's your financial overview.
          </p>
        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-2 md:gap-3">

        {/* Search */}
        <div className="relative hidden xl:block">

          <Search
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-56 rounded-xl border border-white/10 bg-white/5 py-2 pl-9 pr-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-[#D6B56D]/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-[#D6B56D]/10"
          />

        </div>

      </div>

    </header>
  );
};

export default Topbar; 