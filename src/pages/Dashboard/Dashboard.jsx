import { useEffect, useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";

import StatsCards from "./StatsCards";
import ExpenseChart from "./ExpenseChart";
import BudgetProgress from "./BudgetProgress";
import RecentTransactions from "./RecentTransactions";

import {
  getDashboardSummary,
  getAnalytics,
} from "../../services/dashboardService";

const Dashboard = () => {
  const currentYear = new Date().getFullYear();

  const [summary, setSummary] = useState(null);
  const [analytics, setAnalytics] = useState({});
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [loading, setLoading] = useState(true);

  // ==========================
  // Fetch Dashboard Data
  // ==========================
  const fetchDashboard = async (year = selectedYear) => {
    try {
      const summaryResponse = await getDashboardSummary();

      const analyticsResponse = await getAnalytics(year);

      setSummary(summaryResponse.data.summary);

      setAnalytics(
        analyticsResponse.data.analytics
      );
    } catch (error) {
      console.log("Dashboard error:", error);
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // Initial Load
  // ==========================
  useEffect(() => {
    fetchDashboard(currentYear);
  }, []);

  // ==========================
  // Year Change
  // ==========================
  const handleYearChange = async (year) => {
    const newYear = Number(year);

    setSelectedYear(newYear);

    try {
      const analyticsResponse =
        await getAnalytics(newYear);

      setAnalytics(
        analyticsResponse.data.analytics
      );
    } catch (error) {
      console.log(
        "Year Analytics Error:",
        error
      );
    }
  };

  // ==========================
  // Loading
  // ==========================
  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D6B56D]/10">
            <div className="h-7 w-7 animate-spin rounded-full border-2 border-[#D6B56D]/20 border-t-[#D6B56D]" />
          </div>

          <h2 className="text-lg font-semibold text-white">
            Loading Dashboard
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Preparing your financial overview...
          </p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="flex h-full min-h-0 flex-col">

        {/* Stats Cards */}
        <div className="mb-4 flex-shrink-0">
          <StatsCards summary={summary} />
        </div>

        {/* Chart + Budget */}
        <div className="mb-4 grid min-h-0 flex-shrink-0 grid-cols-12 gap-4">

          <div className="col-span-12 min-h-0 xl:col-span-9">
            <ExpenseChart
              analytics={analytics}
              selectedYear={selectedYear}
              onYearChange={handleYearChange}
            />
          </div>

          <div className="col-span-12 min-h-0 xl:col-span-3">
            <BudgetProgress
              totalIncome={summary.totalIncome}
              totalExpense={summary.totalExpense}
            />
          </div>

        </div>

        {/* Recent Transactions */}
        <div className="min-h-0 flex-1">
          <RecentTransactions
            transactions={summary.recentTransactions}
          />
        </div>

      </div>
    </DashboardLayout>
  );
};

export default Dashboard;