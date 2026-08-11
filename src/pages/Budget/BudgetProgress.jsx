const BudgetProgress = ({ budgets }) => {
  return (
    <div>
      {/* Heading */}
      <div className="mb-6 flex-shrink-0">
        <h2 className="text-lg font-bold text-white sm:text-xl">
          Budget Progress
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Track your monthly spending
        </p>
      </div>

      {/* Progress List */}
      <div className="flex-1 space-y-5 overflow-auto">

        {budgets.length === 0 ? (
          <p className="text-slate-500">
            No Budgets Found
          </p>
        ) : (
          budgets.map((item) => {
            const spent = Number(item.spent || 0);
            const limit = Number(item.limit || 0);

            const percentage =
              limit === 0
                ? 0
                : Math.min(
                    Math.round((spent / limit) * 100),
                    100
                  );

            return (
              <div key={item._id}>

                <div className="mb-2 flex items-center justify-between gap-3">

                  <span className="truncate font-medium text-white">
                    {item.category}
                  </span>

                  <span className="text-sm font-semibold text-[#D6B56D]">
                    {percentage}%
                  </span>

                </div>

                <div className="h-3 overflow-hidden rounded-full bg-[#252117]">

                  <div
                    className="h-full rounded-full bg-[#D6B56D] transition-all duration-700"
                    style={{
                      width: `${percentage}%`,
                    }}
                  />

                </div>

                <div className="mt-2 flex items-center justify-between text-xs text-slate-500">

                  <span>
                    ₹{spent.toLocaleString()}
                  </span>

                  <span>
                    ₹{limit.toLocaleString()}
                  </span>

                </div>

              </div>
            );
          })
        )}

      </div>

    </div>
  );
};

export default BudgetProgress;