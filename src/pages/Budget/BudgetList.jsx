import {
  Pencil,
  Trash2,
} from "lucide-react";

const BudgetList = ({
  budgets,
  onEdit,
  onDelete,
}) => {
  return (
    <div>

      {/* Header */}
      <div className="mb-5">
        <h2 className="text-xl font-bold text-white">
          Budget List
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Manage all your budgets.
        </p>
      </div>

      {budgets.length === 0 ? (
        <div className="flex h-40 items-center justify-center rounded-2xl border border-dashed border-[#332C1D]">
          <p className="text-slate-500">
            No Budgets Found
          </p>
        </div>
      ) : (
        <div className="space-y-4">

          {budgets.map((budget) => {

            const spent = Number(budget.spent || 0);
            const limit = Number(budget.limit || 0);

            return (

              <div
                key={budget._id}
                className="flex items-center justify-between rounded-2xl border border-[#332C1D] bg-[#121210] p-4"
              >

                <div>

                  <h3 className="font-semibold text-white">
                    {budget.category}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    ₹{spent.toLocaleString()} / ₹{limit.toLocaleString()}
                  </p>

                </div>

                <div className="flex items-center gap-2">

                  <button
                    onClick={() => onEdit(budget)}
                    className="rounded-xl bg-[#D6B56D]/10 p-2 text-[#D6B56D] transition hover:bg-[#D6B56D]/20"
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    onClick={() => onDelete(budget._id)}
                    className="rounded-xl bg-rose-500/10 p-2 text-rose-400 transition hover:bg-rose-500/20"
                  >
                    <Trash2 size={18} />
                  </button>

                </div>

              </div>

            );
          })}

        </div>
      )}

    </div>
  );
};

export default BudgetList;