import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

const COLORS = [
  "#D6B56D",
  "#E5C98A",
  "#B89550",
  "#C9A95D",
  "#F0D58A",
  "#A88B4A",
  "#DEC27A",
  "#967B3F",
];

const ExpensePieChart = ({ analytics }) => {
  const data = analytics?.categoryData || [];

  return (
    <div className="rounded-3xl border border-[#332C1D] bg-[#121210] p-5 shadow-[0_15px_45px_rgba(0,0,0,.25)]">

      {/* Header */}
      <div>
        <h2 className="text-lg font-bold text-white sm:text-xl">
          Expense Categories
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Expense distribution
        </p>
      </div>

      {/* Chart */}
      <div className="mt-5 h-[260px] sm:h-[300px]">
        {data.length === 0 ? (
          <div className="flex h-full items-center justify-center text-sm text-slate-500">
            No Expense Data Available
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>

              <Pie
                data={data}
                dataKey="amount"
                nameKey="category"
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={90}
                paddingAngle={4}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`${entry.category}-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    stroke="#121210"
                    strokeWidth={2}
                  />
                ))}
              </Pie>

              <Tooltip
                contentStyle={{
                  background: "#121210",
                  border: "1px solid #332C1D",
                  borderRadius: "14px",
                  color: "#ffffff",
                  boxShadow: "0 15px 40px rgba(0,0,0,.45)",
                }}
                itemStyle={{
                  color: "#E5C98A",
                }}
              />

            </PieChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Categories */}
      {data.length > 0 && (
        <div className="mt-5 rounded-2xl border border-[#332C1D] bg-[#0F0F0D] p-3">

          {/* Legend Header */}
          <div className="mb-3 flex items-center justify-between">

            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Categories
            </p>

            <span className="rounded-full border border-[#332C1D] bg-[#171715] px-2.5 py-1 text-[10px] font-medium text-[#D6B56D]">
              {data.length} {data.length === 1 ? "Category" : "Categories"}
            </span>

          </div>

          {/* Scrollable Categories */}
          <div
            className="max-h-[125px] overflow-y-auto pr-1"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#5A4A29 #171715",
            }}
          >

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">

              {data.map((item, index) => (

                <div
                  key={item.category}
                  className="flex min-w-0 items-center gap-2 rounded-xl border border-[#332C1D] bg-[#171715] px-3 py-2.5 transition-all duration-300 hover:border-[#D6B56D]/50 hover:bg-[#D6B56D]/5"
                >

                  {/* Color Indicator */}
                  <div
                    className="h-3 w-3 flex-shrink-0 rounded-full"
                    style={{
                      backgroundColor:
                        COLORS[index % COLORS.length],
                    }}
                  />

                  {/* Category Name */}
                  <span className="min-w-0 flex-1 truncate text-sm text-slate-300">
                    {item.category}
                  </span>

                  {/* Amount */}
                  <span className="flex-shrink-0 text-xs font-semibold text-[#D6B56D]">
                    ₹{Number(item.amount || 0).toLocaleString()}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default ExpensePieChart;