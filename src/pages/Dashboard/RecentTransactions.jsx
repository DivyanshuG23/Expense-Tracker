import {
  ArrowDownLeft,
  TrendingUp,
} from "lucide-react";

const RecentTransactions = ({ transactions = [] }) => {
  return (
    <div
      className="
        flex
        h-[360px]
        min-h-0
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-[#D6B56D]/20
        bg-[#11110F]
        shadow-[0_15px_50px_rgba(0,0,0,0.35)]
      "
    >

      {/* Header - Fixed */}
      <div
        className="
          flex
          flex-shrink-0
          items-center
          border-b
          border-[#D6B56D]/10
          bg-[#141310]
          px-5
          py-4
        "
      >
        <div>
          <h2 className="text-base font-semibold text-white">
            Recent Transactions
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Last Transactions
          </p>
        </div>
      </div>

      {/* Scrollable Transaction Area */}
      <div
        className="
          min-h-0
          flex-1
          overflow-y-auto
          overscroll-contain
          p-5
          [scrollbar-color:#D6B56D40_#11110F]
          [scrollbar-width:thin]
        "
      >

        {transactions.length === 0 ? (

          <div className="flex h-full items-center justify-center">
            <p className="text-sm text-slate-500">
              No Transactions Yet
            </p>
          </div>

        ) : (

          <div className="space-y-3">

            {transactions.map((item) => {

              const isIncome = item.type === "income";

              const Icon = isIncome
                ? TrendingUp
                : ArrowDownLeft;

              return (
                <div
                  key={item._id}
                  className="
                    flex
                    min-h-[84px]
                    items-center
                    justify-between
                    rounded-xl
                    border
                    border-white/[0.06]
                    bg-[#161512]
                    px-4
                    py-3
                    transition-all
                    duration-300
                    hover:border-[#D6B56D]/20
                    hover:bg-[#1A1915]
                  "
                >

                  {/* Left Side */}
                  <div className="flex min-w-0 items-center gap-3">

                    {/* Icon */}
                    <div
                      className={`
                        flex
                        h-11
                        w-11
                        flex-shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        ${
                          isIncome
                            ? "border-emerald-400/10 bg-emerald-500/10"
                            : "border-rose-400/10 bg-rose-500/10"
                        }
                      `}
                    >
                      <Icon
                        size={19}
                        strokeWidth={2}
                        className={
                          isIncome
                            ? "text-emerald-400"
                            : "text-rose-400"
                        }
                      />
                    </div>

                    {/* Transaction Details */}
                    <div className="min-w-0">

                      <h3 className="truncate text-sm font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-xs text-slate-500">
                        {item.date
                          ? new Date(item.date).toLocaleDateString()
                          : "No date"}
                      </p>

                    </div>

                  </div>

                  {/* Amount */}
                  <span
                    className={`
                      ml-4
                      flex-shrink-0
                      whitespace-nowrap
                      text-sm
                      font-bold
                      ${
                        isIncome
                          ? "text-emerald-400"
                          : "text-rose-400"
                      }
                    `}
                  >
                    {isIncome
                      ? `+₹${Number(item.amount).toLocaleString()}`
                      : `-₹${Number(item.amount).toLocaleString()}`}
                  </span>

                </div>
              );
            })}

          </div>

        )}

      </div>

    </div>
  );
};

export default RecentTransactions;