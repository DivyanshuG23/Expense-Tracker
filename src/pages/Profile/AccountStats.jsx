import {
  Wallet,
  TrendingUp,
  TrendingDown,
  PiggyBank,
} from "lucide-react";

import { useEffect, useState } from "react";
import { getDashboardSummary } from "../../services/dashboardService";

const AccountStats = () => {
  const [summary, setSummary] = useState({
    totalBalance: 0,
    totalIncome: 0,
    totalExpense: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await getDashboardSummary();

        const data = response.data.summary;

        setSummary({
          totalBalance: data.totalBalance || 0,
          totalIncome: data.totalIncome || 0,
          totalExpense: data.totalExpense || 0,
        });
      } catch (error) {
        console.log("Failed to fetch profile stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const savings =
    summary.totalIncome - summary.totalExpense;

  const stats = [
    {
      title: "Balance",
      value: `₹${summary.totalBalance.toLocaleString()}`,
      icon: Wallet,
      color: "text-[#D6B56D]",
      bg: "bg-[#D6B56D]/10",
    },
    {
      title: "Income",
      value: `₹${summary.totalIncome.toLocaleString()}`,
      icon: TrendingUp,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
    {
      title: "Expense",
      value: `₹${summary.totalExpense.toLocaleString()}`,
      icon: TrendingDown,
      color: "text-rose-400",
      bg: "bg-rose-500/10",
    },
    {
      title: "Savings",
      value: `₹${savings.toLocaleString()}`,
      icon: PiggyBank,
      color: "text-[#D6B56D]",
      bg: "bg-[#D6B56D]/10",
    },
  ];

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-[#D6B56D]/10 bg-[#11100E] p-5 shadow-lg"
          >
            <div className="h-20 animate-pulse rounded-2xl bg-white/5" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-3xl border border-[#D6B56D]/10 bg-[#11100E] p-5 shadow-lg transition duration-300 hover:-translate-y-0.5 hover:border-[#D6B56D]/30"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="text-sm text-slate-400">
                  {item.title}
                </p>

                <h2 className="mt-2 truncate text-2xl font-bold text-white">
                  {item.value}
                </h2>
              </div>

              <div
                className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${item.bg}`}
              >
                <Icon
                  size={24}
                  className={item.color}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AccountStats;