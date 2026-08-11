import {
  LayoutDashboard,
  Wallet,
  PieChart,
  Receipt,
  User,
} from "lucide-react";

const DashboardPreview = () => {
  return (
   <section
  id="dashboard"
  className="px-4 sm:px-6 lg:px-8"
>
      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">

        <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-[#E8C978]">
          Live Dashboard
        </span>

        <h2 className="mt-5 text-3xl font-black text-textPrimary sm:text-4xl md:text-5xl">
          Powerful Financial Dashboard
        </h2>

        <p className="mt-5 text-base leading-7 text-textSecondary md:text-lg md:leading-8">
          Track balances, monitor spending and manage every
          transaction from one beautifully designed workspace.
        </p>

      </div>

      {/* Dashboard Card */}
      <div className="relative mx-auto mt-10 w-full max-w-6xl overflow-hidden rounded-[30px] border border-white/10 bg-surface shadow-[0_20px_60px_rgba(0,0,0,.45)]">

        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr]">

          {/* Sidebar */}
          <div className="border-b border-white/10 p-5 lg:border-b-0 lg:border-r">

            <h3 className="text-xl font-bold text-textPrimary">
              Expense<span className="text-primary">Flow</span>
            </h3>

            <div className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1 lg:space-y-2 lg:gap-0">

              {/* Dashboard */}
              <div className="flex items-center gap-3 rounded-xl bg-primary/10 px-4 py-3 text-primary">
                <LayoutDashboard size={18} />
                <span>Dashboard</span>
              </div>

              {/* Transactions */}
              <div className="flex items-center gap-3 rounded-xl px-4 py-3 text-textMuted">
                <Wallet size={18} />
                <span>Transactions</span>
              </div>

              {/* Analytics */}
              <div className="flex items-center gap-3 rounded-xl px-4 py-3 text-textMuted">
                <PieChart size={18} />
                <span>Analytics</span>
              </div>

              {/* Budget */}
              <div className="flex items-center gap-3 rounded-xl px-4 py-3 text-textMuted">
                <Receipt size={18} />
                <span>Budget</span>
              </div>

              {/* Profile */}
              <div className="flex items-center gap-3 rounded-xl px-4 py-3 text-textMuted">
                <User size={18} />
                <span>Profile</span>
              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-3">

            {/* Balance */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#171B20] to-[#101317] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">

              <p className="text-sm text-textMuted">
                Total Balance
              </p>

              <h3 className="mt-2 break-words text-2xl font-bold text-textPrimary sm:text-3xl">
                ₹1,24,530
              </h3>

              <div className="mt-3 flex items-center justify-between">

                <span className="text-xs text-success">
                  +12.4%
                </span>

                <span className="text-xs text-textMuted">
                  This Month
                </span>

              </div>

            </div>

            {/* Income */}
            <div className="rounded-2xl border border-success/20 bg-gradient-to-br from-success/15 to-success/5 p-5 transition-all duration-300 hover:-translate-y-1">

              <p className="text-sm text-textSecondary">
                Income
              </p>

              <h3 className="mt-2 break-words text-2xl font-bold text-success sm:text-3xl">
                ₹54,200
              </h3>

              <div className="mt-3 flex items-center justify-between">

                <span className="text-xs text-success">
                  +8.1%
                </span>

                <span className="text-xs text-textMuted">
                  Salary
                </span>

              </div>

            </div>

            {/* Expense */}
            <div className="rounded-2xl border border-danger/20 bg-gradient-to-br from-danger/15 to-danger/5 p-5 transition-all duration-300 hover:-translate-y-1">

              <p className="text-sm text-textSecondary">
                Expenses
              </p>

              <h3 className="mt-2 break-words text-2xl font-bold text-danger sm:text-3xl">
                ₹21,870
              </h3>

              <div className="mt-3 flex items-center justify-between">

                <span className="text-xs text-danger">
                  -4.2%
                </span>

                <span className="text-xs text-textMuted">
                  Spending
                </span>

              </div>

            </div>

            {/* Spending Chart */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#171B20] to-[#101317] p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 md:col-span-2">

              <div className="mb-3 flex items-center justify-between">

                <h4 className="text-sm font-semibold text-textPrimary">
                  Spending Trend
                </h4>

                <span className="text-xs text-primary">
                  Jan - Jun
                </span>

              </div>

              <svg
                viewBox="0 0 420 120"
                className="h-24 w-full"
              >

                <path
                  d="M10 95 C70 80 120 60 170 70 S260 90 320 45 S370 40 410 20"
                  fill="none"
                  stroke="#D4A84F"
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                <circle
                  cx="10"
                  cy="95"
                  r="4"
                  fill="#D4A84F"
                />

                <circle
                  cx="170"
                  cy="70"
                  r="4"
                  fill="#D4A84F"
                />

                <circle
                  cx="320"
                  cy="45"
                  r="4"
                  fill="#D4A84F"
                />

                <circle
                  cx="410"
                  cy="20"
                  r="4"
                  fill="#D4A84F"
                />

              </svg>

            </div>

            {/* Recent Activity */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#171B20] to-[#101317] p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 md:col-span-1">

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-textPrimary">
                  Recent Activity
                </h4>
              </div>

              <div className="space-y-4">

                <div className="flex items-center justify-between">
                  <span className="text-sm text-textMuted">
                    Amazon
                  </span>

                  <span className="text-sm font-semibold text-danger">
                    -₹1,299
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-textMuted">
                    Salary
                  </span>

                  <span className="text-sm font-semibold text-success">
                    +₹54,200
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-textMuted">
                    Netflix
                  </span>

                  <span className="text-sm font-semibold text-danger">
                    -₹649
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-textMuted">
                    Fuel
                  </span>

                  <span className="text-sm font-semibold text-danger">
                    -₹1,000
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default DashboardPreview;