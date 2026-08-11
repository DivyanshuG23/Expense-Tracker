import {
  Wallet,
  TrendingUp,
  TrendingDown,
  PiggyBank,
} from "lucide-react";

const AnalyticsCards = ({ analytics }) => {
  const cards = [
    {
      title: "Total Income",
      amount: `₹${analytics?.totalIncome || 0}`,
      icon: TrendingUp,
      color: "text-[#D6B56D]",
      bg: "bg-[#D6B56D]/10",
    },
    {
      title: "Total Expense",
      amount: `₹${analytics?.totalExpense || 0}`,
      icon: TrendingDown,
      color: "text-rose-400",
      bg: "bg-rose-500/10",
    },
    {
      title: "Savings",
      amount: `₹${
        (analytics?.totalIncome || 0) -
        (analytics?.totalExpense || 0)
      }`,
      icon: PiggyBank,
      color: "text-[#E5C98A]",
      bg: "bg-[#D6B56D]/10",
    },
    {
      title: "Balance",
      amount: `₹${analytics?.balance || 0}`,
      icon: Wallet,
      color: "text-[#C9A95D]",
      bg: "bg-[#D6B56D]/10",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-3xl border border-[#332C1D] bg-[#121210] p-5 shadow-[0_15px_45px_rgba(0,0,0,.25)] transition-all duration-300 hover:border-[#D6B56D]/40 hover:shadow-[0_18px_50px_rgba(214,181,109,.08)]"
          >
            <div className="flex items-center justify-between">

              <div className="min-w-0">

                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  {card.title}
                </p>

                <h2 className="mt-2 truncate text-xl font-bold text-white lg:text-2xl">
                  {card.amount}
                </h2>

              </div>

              <div
                className={`ml-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-[#332C1D] ${card.bg}`}
              >
                <Icon
                  size={22}
                  className={card.color}
                />
              </div>

            </div>
          </div>
        );
      })}

    </div>
  );
};

export default AnalyticsCards;