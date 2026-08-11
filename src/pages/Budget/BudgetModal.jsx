import { useState, useEffect } from "react";
import { X } from "lucide-react";

const BudgetModal = ({
  isOpen,
  onClose,
  onSave,
  editingBudget,
}) => {
  const [formData, setFormData] = useState({
    category: "Food",
    limit: "",
  });

  useEffect(() => {
    if (editingBudget) {
      setFormData({
        category: editingBudget.category,
        limit: editingBudget.limit,
      });
    } else {
      setFormData({
        category: "Food",
        limit: "",
      });
    }
  }, [editingBudget, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!formData.limit) {
      alert("Please enter budget amount");
      return;
    }

    onSave(formData);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="mx-4 w-full max-w-lg rounded-3xl border border-[#332C1D] bg-[#121210] p-6 shadow-2xl"
      >
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">
              {editingBudget
                ? "Edit Budget"
                : "Add Budget"}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Set your monthly budget.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl bg-white/5 p-2 text-slate-400 transition hover:bg-[#D6B56D]/10 hover:text-[#D6B56D]"
          >
            <X size={20} />
          </button>
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="mb-2 block text-sm text-slate-300">
            Category
          </label>

          <select
            value={formData.category}
            onChange={(e) =>
              setFormData({
                ...formData,
                category: e.target.value,
              })
            }
            className="w-full rounded-2xl border border-[#332C1D] bg-[#181713] px-4 py-3 text-white outline-none focus:border-[#D6B56D]"
          >
            <option>Food</option>
            <option>Shopping</option>
            <option>Transport</option>
            <option>Bills</option>
            <option>Entertainment</option>
            <option>Health</option>
            <option>Education</option>
            <option>Other</option>
          </select>
        </div>

        {/* Budget Limit */}
        <div className="mb-6">
          <label className="mb-2 block text-sm text-slate-300">
            Budget Limit
          </label>

          <input
            type="number"
            placeholder="Enter budget amount"
            value={formData.limit}
            onChange={(e) =>
              setFormData({
                ...formData,
                limit: e.target.value,
              })
            }
            className="w-full rounded-2xl border border-[#332C1D] bg-[#181713] px-4 py-3 text-white outline-none focus:border-[#D6B56D]"
          />
        </div>

        {/* Footer */}
        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

          <button
            onClick={onClose}
            className="w-full rounded-2xl border border-[#332C1D] px-5 py-3 text-white transition hover:bg-white/5 sm:w-auto"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="w-full rounded-2xl bg-[#D6B56D] px-6 py-3 font-semibold text-[#0B0B0A] transition hover:bg-[#E5C98A] sm:w-auto"
          >
            {editingBudget
              ? "Update Budget"
              : "Save Budget"}
          </button>

        </div>
      </div>
    </div>
  );
};

export default BudgetModal;