import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const IncomeExpenseChart = ({ analytics }) => {
  const data = analytics?.monthlyData || [];

  return (
    <div>
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-lg font-bold text-white sm:text-xl">
          Income vs Expense
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Monthly comparison
        </p>
      </div>

      {/* Chart */}
      <div className="h-[300px] sm:h-[360px] lg:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 0,
              bottom: 0,
            }}
            barCategoryGap="28%"
          >
            <CartesianGrid
              stroke="#332C1D"
              vertical={false}
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="month"
              stroke="#8F836B"
              tick={{
                fontSize: 11,
                fill: "#8F836B",
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              stroke="#8F836B"
              width={50}
              tick={{
                fontSize: 11,
                fill: "#8F836B",
              }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                background: "#121210",
                border: "1px solid #332C1D",
                borderRadius: "14px",
                color: "#fff",
              }}
              labelStyle={{
                color: "#D6B56D",
              }}
              itemStyle={{
                color: "#E5C98A",
              }}
            />

            <Bar
              dataKey="income"
              fill="#D6B56D"
              radius={[8, 8, 0, 0]}
              barSize={18}
            />

            <Bar
              dataKey="expense"
              fill="#F43F5E"
              radius={[8, 8, 0, 0]}
              barSize={18}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default IncomeExpenseChart;