const MainLayout = ({ children }) => {
  return (
    <main className="min-h-screen bg-[#09090B] text-textPrimary">
      {children}
    </main>
  );
};

export default MainLayout;