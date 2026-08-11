import { Target } from "lucide-react";

const BudgetProgress = ({
  totalIncome = 0,
  totalExpense = 0,
}) => {
  const remaining = totalIncome - totalExpense;

  const percent =
    totalIncome > 0
      ? Math.min((totalExpense / totalIncome) * 100, 100)
      : 0;

  let progressColor = "bg-emerald-500";

  if (percent >= 80) {
    progressColor = "bg-rose-500";
  } else if (percent >= 50) {
    progressColor = "bg-[#D6B56D]";
  }

  return (
    <div className="h-full rounded-2xl border border-white/10 bg-[#11110F] p-5 shadow-[0_15px_40px_rgba(0,0,0,.18)]">

      {/* Header */}

      <div className="mb-6 flex items-center gap-3">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D6B56D]/10">
          <Target
            size={18}
            className="text-[#D6B56D]"
          />
        </div>

        <div>
          <h3 className="text-base font-semibold text-white">
            Budget Progress
          </h3>

          <p className="text-xs text-slate-500">
            Live Budget Status
          </p>
        </div>

      </div>

      {/* Income */}

      <div className="mb-5">

        <div className="mb-2 flex items-center justify-between">

          <span className="text-sm text-slate-400">
            Income
          </span>

          <span className="text-sm font-semibold text-white">
            ₹{totalIncome.toLocaleString()}
          </span>

        </div>

      </div>

      {/* Expense */}

      <div className="mb-5">

        <div className="mb-2 flex items-center justify-between">

          <span className="text-sm text-slate-400">
            Expense
          </span>

          <span className="text-sm font-semibold text-white">
            ₹{totalExpense.toLocaleString()}
          </span>

        </div>

        {/* Progress */}

        <div className="h-2 overflow-hidden rounded-full bg-white/10">

          <div
            className={`${progressColor} h-full rounded-full transition-all duration-700`}
            style={{
              width: `${percent}%`,
            }}
          />

        </div>

        <div className="mt-2 flex justify-between">

          <p className="text-[11px] text-slate-500">
            {percent.toFixed(1)}% used
          </p>

          <p className="text-[11px] text-slate-500">
            {Math.max(0, 100 - percent).toFixed(1)}% left
          </p>

        </div>

      </div>

      {/* Remaining */}

      <div className="rounded-xl border border-[#D6B56D]/10 bg-[#D6B56D]/[0.03] p-4">

        <p className="text-xs text-slate-500">
          Remaining Balance
        </p>

        <h2
          className={`mt-1 text-2xl font-bold ${
            remaining >= 0
              ? "text-emerald-400"
              : "text-rose-400"
          }`}
        >
          ₹{Math.abs(remaining).toLocaleString()}
        </h2>

        {remaining < 0 && (
          <p className="mt-1 text-[11px] text-rose-400">
            Over budget
          </p>
        )}

      </div>

    </div>
  );
};

export default BudgetProgress;