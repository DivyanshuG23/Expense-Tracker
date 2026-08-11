import { Play, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleStartTracking = () => {
    navigate("/register");
  };

  const handleWatchDemo = () => {
    document
      .getElementById("dashboard-preview")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col items-center gap-14 px-6 py-12 lg:flex-row lg:justify-between">

      {/* LEFT CONTENT */}
      <div className="max-w-xl">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
          <Sparkles size={16} className="text-primary" />

          <span className="text-sm font-medium text-[#E8C978]">
            Personal Finance Reimagined
          </span>
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight text-textPrimary md:text-7xl">
          Financial Freedom
          <br />
          <span className="text-primary">
            Starts Today.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-xl text-lg leading-8 text-textSecondary">
          Track your income, monitor every expense,
          set monthly budgets and gain beautiful
          financial insights from one powerful dashboard.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">

          {/* Start Tracking */}
          <button
            type="button"
            onClick={handleStartTracking}
            className="rounded-xl bg-primary px-7 py-3 font-semibold text-[#080A0D] shadow-lg shadow-[#D4A84F]/10 transition duration-300 hover:-translate-y-1 hover:bg-[#E8C978]"
          >
            Start Tracking Free
          </button>

          {/* Watch Demo */}
          <button
            type="button"
           onClick={() => {
  document.getElementById("dashboard")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}}
            className="flex items-center gap-2 rounded-xl border border-white/10 px-7 py-3 font-semibold text-textPrimary transition hover:border-primary/50 hover:bg-primary/5"
          >
            <Play size={18} className="text-primary" />
            Watch Demo
          </button>

        </div>

        {/* Stats */}
        <div className="mt-12 flex flex-wrap gap-10">

          <div>
            <h3 className="text-3xl font-bold text-textPrimary">
              10K+
            </h3>

            <p className="mt-1 text-sm text-textMuted">
              Active Users
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-textPrimary">
              ₹12Cr+
            </h3>

            <p className="mt-1 text-sm text-textMuted">
              Expenses Tracked
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-textPrimary">
              99.9%
            </h3>

            <p className="mt-1 text-sm text-textMuted">
              Uptime
            </p>
          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="relative flex w-full max-w-lg justify-center">

        {/* Main Card */}
        <div className="relative w-full rounded-[30px] border border-white/10 bg-card p-7 shadow-[0_20px_60px_rgba(0,0,0,.45)]">

          {/* Gold Glow */}
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

          {/* Header */}
          <div className="relative flex items-center justify-between">

            <div>
              <p className="text-sm text-textMuted">
                Total Balance
              </p>

              <h2 className="mt-2 text-5xl font-black tracking-tight text-textPrimary">
                ₹1,24,530
              </h2>

              <p className="mt-2 text-sm text-success">
                ▲ +12.8% this month
              </p>
            </div>

            {/* Money Icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D4A84F] to-[#E8C978] text-3xl text-[#080A0D] shadow-lg shadow-[#D4A84F]/10">
              💰
            </div>

          </div>

          {/* Income / Expense */}
          <div className="mt-8 grid grid-cols-2 gap-5">

            {/* Income */}
            <div className="rounded-3xl border border-success/10 bg-success/10 p-5 transition hover:-translate-y-1">

              <p className="text-sm text-textMuted">
                Income
              </p>

              <h3 className="mt-2 text-2xl font-bold text-success">
                ₹54,200
              </h3>

            </div>

            {/* Expense */}
            <div className="rounded-3xl border border-danger/10 bg-danger/10 p-5 transition hover:-translate-y-1">

              <p className="text-sm text-textMuted">
                Expense
              </p>

              <h3 className="mt-2 text-2xl font-bold text-danger">
                ₹21,870
              </h3>

            </div>

          </div>

          {/* Chart */}
          <div className="mt-10">

            <div className="mb-4 flex items-center justify-between">

              <p className="text-sm text-textMuted">
                Spending Overview
              </p>

              <span className="text-xs text-primary">
                Last 6 Months
              </span>

            </div>

            <div className="flex h-44 items-end justify-between gap-3">

              <div className="h-24 w-5 rounded-full bg-gradient-to-t from-[#8F6B24] to-[#D4A84F]" />

              <div className="h-36 w-5 rounded-full bg-gradient-to-t from-[#1F8A61] to-[#35C98A]" />

              <div className="h-20 w-5 rounded-full bg-gradient-to-t from-[#8F6B24] to-[#E8C978]" />

              <div className="h-40 w-5 rounded-full bg-gradient-to-t from-[#35C98A] to-[#6BE0AB]" />

              <div className="h-28 w-5 rounded-full bg-gradient-to-t from-[#8F6B24] to-[#D4A84F]" />

              <div className="h-44 w-5 rounded-full bg-gradient-to-t from-[#1F8A61] to-[#35C98A]" />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Hero;