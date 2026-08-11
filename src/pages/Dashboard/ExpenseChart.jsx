import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
} from "recharts";

const ExpenseChart = ({
  analytics,
  selectedYear,
  onYearChange,
}) => {
  // ==========================
  // Generate Years Dynamically
  // ==========================
  const currentYear = new Date().getFullYear();

  const years = Array.from(
    { length: 5 },
    (_, index) => currentYear - index
  );

  // ==========================
  // Chart Data
  // ==========================
  const data = Object.keys(analytics || {}).map(
    (month) => ({
      month,
      expense: analytics[month]?.expense || 0,
    })
  );

  return (
    <div className="flex h-full min-h-0 flex-col">
      {/* Header */}
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-base font-semibold text-white">
            Expense Overview
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Your spending activity over the selected year
          </p>
        </div>

        {/* Dynamic Year Selector */}
        <select
          value={selectedYear}
          onChange={(e) =>
            onYearChange?.(e.target.value)
          }
          className="w-full rounded-xl border border-[#D6B56D]/20 bg-[#181713] px-3 py-2 text-xs font-medium text-slate-200 outline-none transition-all duration-300 hover:border-[#D6B56D]/40 focus:border-[#D6B56D] sm:w-28"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* ==========================
          Expense Chart
      ========================== */}
      <div className="min-h-[260px] min-w-0 flex-1 overflow-x-auto overflow-y-hidden">
        {data.length === 0 ? (
          <div className="flex h-full min-h-[260px] items-center justify-center rounded-xl border border-dashed border-[#D6B56D]/10 text-sm text-slate-500">
            No Analytics Available
          </div>
        ) : (
          <div className="h-[260px] w-[720px] sm:h-full sm:w-full">
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <AreaChart
                data={data}
               margin={{
  top: 10,
  right: 30,
  left: 10,
  bottom: 0,
}}
              >
                {/* Gradient */}
                <defs>
                  <linearGradient
                    id="expenseGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#D6B56D"
                      stopOpacity={0.35}
                    />

                    <stop
                      offset="100%"
                      stopColor="#D6B56D"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>

                {/* Grid */}
                <CartesianGrid
                  stroke="#2A2924"
                  strokeDasharray="3 3"
                  vertical={false}
                />

                {/* X Axis */}
                <XAxis
  dataKey="month"
  tick={{
    fill: "#A8A29E",
    fontSize: 10,
  }}
  axisLine={false}
  tickLine={false}
  tickMargin={10}
  interval={0}
  padding={{
    left: 20,
    right: 20,
  }}
/>

                {/* Tooltip */}
                <Tooltip
                  cursor={{
                    stroke: "#D6B56D",
                    strokeOpacity: 0.2,
                  }}
                  contentStyle={{
                    background: "#0B0B0A",
                    border:
                      "1px solid rgba(214,181,109,0.25)",
                    borderRadius: "12px",
                    color: "#fff",
                    boxShadow:
                      "0 10px 30px rgba(0,0,0,0.45)",
                  }}
                  labelStyle={{
                    color: "#A8A29E",
                    fontSize: "12px",
                    marginBottom: "4px",
                  }}
                  formatter={(value) => [
                    `₹${Number(
                      value
                    ).toLocaleString()}`,
                    "Expense",
                  ]}
                />

                {/* Expense Area */}
                <Area
                  type="monotone"
                  dataKey="expense"
                  stroke="#D6B56D"
                  strokeWidth={2.5}
                  fill="url(#expenseGradient)"
                  dot={false}
                  activeDot={{
                    r: 5,
                    fill: "#D6B56D",
                    stroke: "#11110F",
                    strokeWidth: 3,
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseChart;