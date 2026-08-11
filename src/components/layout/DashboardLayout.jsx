import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#09090B]">

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Right Section */}
      <div className="ml-0 min-h-screen lg:ml-64">

        {/* Fixed Topbar */}
        <Topbar setSidebarOpen={setSidebarOpen} />

        {/* Content */}
        <main className="min-h-screen bg-[#09090B] px-4 pb-6 pt-24 md:px-6">
          {children}
        </main>

      </div>

    </div>
  );
};

export default DashboardLayout;