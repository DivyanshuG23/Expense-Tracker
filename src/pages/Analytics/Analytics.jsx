import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import AnalyticsCards from "./AnalyticsCards";
import IncomeExpenseChart from "./IncomeExpenseChart";
import ExpensePieChart from "./ExpensePieChart";

import { getAnalytics } from "../../services/analyticsService";

const Analytics = () => {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchAnalytics = async () => {
    try {
      const response = await getAnalytics();
      setAnalytics(response.data.analytics);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex h-[70vh] items-center justify-center">
          <p className="text-lg font-medium text-white">
            Loading Analytics...
          </p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      {/* Heading */}
      <div className="mb-4">
        <h1 className="text-3xl font-black text-white">
          Analytics
        </h1>

        <p className="mt-1 text-slate-400">
          Visualize your income, expenses and financial growth.
        </p>
      </div>

      {/* Cards */}
      <div className="mb-4">
        <AnalyticsCards analytics={analytics} />
      </div>

      {/* Charts */}
      <div className="grid h-[470px] grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="h-full xl:col-span-2">
          <IncomeExpenseChart analytics={analytics} />
        </div>

        <div className="h-full">
          <ExpensePieChart analytics={analytics} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;