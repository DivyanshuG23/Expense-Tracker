const LoginIllustration = () => {
  return (
    <div>
      {/* Badge */}

      <div className="inline-flex w-fit items-center rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2">
        <span className="text-sm font-medium text-amber-200">
          Welcome to ExpenseFlow
        </span>
      </div>

      {/* Heading */}

      <h1 className="mt-8 max-w-xl text-6xl font-black leading-tight text-white">
        Manage Your

        <span className="block bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-400 bg-clip-text text-transparent">
          Money Smarter.
        </span>
      </h1>

      {/* Description */}

      <p className="mt-8 max-w-lg text-lg leading-8 text-slate-400">
        Track every expense, monitor budgets and visualize your
        financial growth from one secure dashboard.
      </p>

      {/* Premium Card */}

      <div className="mt-14 w-[430px] rounded-[30px] border border-white/10 bg-[#11120F]/80 p-8 shadow-[0_20px_80px_rgba(0,0,0,.55)] backdrop-blur-xl">

        <p className="text-sm text-slate-400">
          Total Balance
        </p>

        <h2 className="mt-3 text-5xl font-black text-white">
          ₹1,24,530
        </h2>

        <p className="mt-2 text-sm text-emerald-400">
          ▲ +12.8% This Month
        </p>

        <div className="mt-10 flex gap-4">

          {/* Income */}

          <div className="flex-1 rounded-2xl border border-emerald-400/10 bg-emerald-500/10 p-5">

            <p className="text-sm text-slate-400">
              Income
            </p>

            <h3 className="mt-2 text-2xl font-bold text-emerald-400">
              ₹54,200
            </h3>

          </div>

          {/* Expense */}

          <div className="flex-1 rounded-2xl border border-rose-400/10 bg-rose-500/10 p-5">

            <p className="text-sm text-slate-400">
              Expense
            </p>

            <h3 className="mt-2 text-2xl font-bold text-rose-400">
              ₹21,870
            </h3>

          </div>

        </div>

      </div>

    </div>
  );
};

export default LoginIllustration;