import {
  Pencil,
  Trash2,
  ArrowDownLeft,
  ArrowUpRight,
  SearchX,
} from "lucide-react";

const TransactionTable = ({
  transactions,
  onDelete,
  onEdit,
}) => {
  return (
    <div>
      {transactions.length === 0 ? (
        <div className="flex h-[420px] flex-col items-center justify-center text-center">
          {/* Empty Icon */}
          <div className="mb-5 rounded-full bg-[#D6B56D]/10 p-5">
            <SearchX
              size={40}
              className="text-[#D6B56D]"
            />
          </div>

          <h2 className="text-2xl font-bold text-white">
            No Transactions Found
          </h2>

          <p className="mt-2 text-slate-400">
            Try changing your search or filters.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px]">
            {/* Header */}
            <thead className="bg-[#151513]">
              <tr className="text-left">
                <th className="px-6 py-4 text-sm font-semibold text-slate-300">
                  Transaction
                </th>

                <th className="px-6 py-4 text-sm font-semibold text-slate-300">
                  Category
                </th>

                <th className="px-6 py-4 text-sm font-semibold text-slate-300">
                  Date
                </th>

                <th className="px-6 py-4 text-right text-sm font-semibold text-slate-300">
                  Amount
                </th>

                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300">
                  Action
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {transactions.map((item) => {
                const Icon =
                  item.type === "Income"
                    ? ArrowDownLeft
                    : ArrowUpRight;

                const isIncome =
                  item.type === "Income";

                return (
                  <tr
                    key={item.id}
                    className="border-t border-white/5 transition duration-300 hover:bg-[#D6B56D]/[0.025]"
                  >
                    {/* Transaction */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                            isIncome
                              ? "bg-emerald-500/15 text-emerald-400"
                              : "bg-rose-500/15 text-rose-400"
                          }`}
                        >
                          <Icon size={18} />
                        </div>

                        <span className="font-medium text-white">
                          {item.title}
                        </span>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="px-6">
                      <span className="rounded-full border border-[#D6B56D]/10 bg-[#D6B56D]/5 px-3 py-1 text-xs text-slate-300">
                        {item.category}
                      </span>
                    </td>

                    {/* Date */}
                    <td className="px-6 text-sm text-slate-400">
                      {item.date}
                    </td>

                    {/* Amount */}
                    <td
                      className={`px-6 text-right font-bold ${
                        isIncome
                          ? "text-emerald-400"
                          : "text-rose-400"
                      }`}
                    >
                      {isIncome
                        ? `+₹${item.amount.toLocaleString()}`
                        : `-₹${item.amount.toLocaleString()}`}
                    </td>

                    {/* Actions */}
                    <td className="px-6">
                      <div className="flex justify-center gap-2">
                        {/* Edit */}
                        <button
                          type="button"
                          onClick={() => onEdit(item)}
                          className="rounded-xl border border-[#D6B56D]/10 bg-[#D6B56D]/5 p-2 text-[#D6B56D] transition-all duration-300 hover:border-[#D6B56D]/25 hover:bg-[#D6B56D]/10 hover:shadow-[0_5px_20px_rgba(214,181,109,.08)]"
                        >
                          <Pencil size={16} />
                        </button>

                        {/* Delete */}
                        <button
                          type="button"
                          onClick={() => onDelete(item.id)}
                          className="rounded-xl bg-rose-500/10 p-2 text-rose-400 transition-all duration-300 hover:bg-rose-500/20 hover:text-rose-300"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TransactionTable;