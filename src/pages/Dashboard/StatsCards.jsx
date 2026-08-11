import {
  Wallet,
  TrendingUp,
  TrendingDown,
  Receipt,
} from "lucide-react";

const StatsCards = ({ summary }) => {
  const cards = [
    {
      title: "Total Balance",
      value: summary?.totalBalance || 0,
      icon: Wallet,
    },
    {
      title: "Income",
      value: summary?.totalIncome || 0,
      icon: TrendingUp,
    },
    {
      title: "Expense",
      value: summary?.totalExpense || 0,
      icon: TrendingDown,
    },
    {
      title: "Transactions",
      value: summary?.totalTransactions || 0,
      icon: Receipt,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="group rounded-2xl border border-[#D6B56D]/15 bg-[#11110F] p-5 shadow-[0_10px_35px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D6B56D]/40 hover:shadow-[0_15px_40px_rgba(214,181,109,0.08)]"
          >
            <div className="flex items-center justify-between">
              
              {/* Content */}
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
                  {card.title}
                </p>

                <h2 className="mt-2 text-2xl font-bold text-white">
                  {card.title === "Transactions"
                    ? Number(card.value).toLocaleString()
                    : `₹${Number(card.value).toLocaleString()}`}
                </h2>
              </div>

              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D6B56D]/15 bg-[#D6B56D]/10 transition-all duration-300 group-hover:bg-[#D6B56D]/15">
                <Icon
                  size={21}
                  strokeWidth={2}
                  className="text-[#D6B56D]"
                />
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="mt-5 h-px w-full bg-gradient-to-r from-[#D6B56D]/20 via-[#D6B56D]/5 to-transparent" />
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;