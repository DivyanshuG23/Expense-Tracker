import { useState, useEffect } from "react";
import { X } from "lucide-react";

const AddTransactionModal = ({
  isOpen,
  onClose,
  onSave,
  editingTransaction,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    type: "Expense",
    category: "Food",
    date: "",
    notes: "",
  });

  useEffect(() => {
    if (editingTransaction) {
      let formattedDate = "";

      if (editingTransaction.date) {
        const dateValue = editingTransaction.date;

        // Already YYYY-MM-DD
        if (
          typeof dateValue === "string" &&
          /^\d{4}-\d{2}-\d{2}$/.test(dateValue)
        ) {
          formattedDate = dateValue;
        } else {
          const parsedDate = new Date(dateValue);

          if (!Number.isNaN(parsedDate.getTime())) {
            formattedDate = parsedDate
              .toISOString()
              .split("T")[0];
          }
        }
      }

      setFormData({
        title: editingTransaction.title || "",
        amount: editingTransaction.amount || "",
        type: editingTransaction.type || "Expense",
        category: editingTransaction.category || "Food",
        date: formattedDate,
        notes: editingTransaction.notes || "",
      });
    } else {
      setFormData({
        title: "",
        amount: "",
        type: "Expense",
        category: "Food",
        date: "",
        notes: "",
      });
    }
  }, [editingTransaction, isOpen]);

  if (!isOpen) return null;

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = async () => {
    if (!formData.title.trim() || !formData.amount) {
      alert("Please enter Title and Amount");
      return;
    }

    await onSave(formData);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-sm">

      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[90vh] w-full max-w-xl flex-col overflow-hidden rounded-[28px] border border-[#332C1D] bg-[#121210] shadow-[0_25px_100px_rgba(0,0,0,.65)]"
      >

        {/* Header */}
        <div className="flex flex-shrink-0 items-start justify-between border-b border-[#29261F] px-6 py-5 sm:px-7">

          <div>
            <h2 className="text-2xl font-black text-white">
              {editingTransaction
                ? "Edit Transaction"
                : "Add Transaction"}
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              {editingTransaction
                ? "Update your transaction details."
                : "Fill the details below."}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1A1916] text-[#A58C54] transition-all duration-300 hover:bg-[#D6B56D]/10 hover:text-[#E5C98A]"
          >
            <X size={22} />
          </button>

        </div>

        {/* Scrollable Content */}
        <div className="modal-scroll flex-1 overflow-y-auto px-6 py-6 sm:px-7">

          <div className="space-y-5">

            {/* Transaction Title */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Transaction Title
              </label>

              <input
                type="text"
                placeholder="Transaction Title"
                value={formData.title}
                onChange={(e) =>
                  handleChange("title", e.target.value)
                }
                className="w-full rounded-2xl border border-[#332C1D] bg-[#171715] px-5 py-3.5 text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:border-[#D6B56D] focus:ring-1 focus:ring-[#D6B56D]/20"
              />
            </div>

            {/* Amount */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Amount
              </label>

              <input
                type="number"
                placeholder="Amount"
                value={formData.amount}
                onChange={(e) =>
                  handleChange("amount", e.target.value)
                }
                className="w-full rounded-2xl border border-[#332C1D] bg-[#171715] px-5 py-3.5 text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:border-[#D6B56D] focus:ring-1 focus:ring-[#D6B56D]/20"
              />
            </div>

            {/* Type + Category */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              {/* Type */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Type
                </label>

                <select
                  value={formData.type}
                  onChange={(e) =>
                    handleChange("type", e.target.value)
                  }
                  className="w-full rounded-2xl border border-[#332C1D] bg-[#171715] px-5 py-3.5 text-white outline-none transition-all duration-300 focus:border-[#D6B56D] focus:ring-1 focus:ring-[#D6B56D]/20"
                >
                  <option value="Income">Income</option>
                  <option value="Expense">Expense</option>
                </select>
              </div>

              {/* Category */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Category
                </label>

                <select
                  value={formData.category}
                  onChange={(e) =>
                    handleChange(
                      "category",
                      e.target.value
                    )
                  }
                  className="w-full rounded-2xl border border-[#332C1D] bg-[#171715] px-5 py-3.5 text-white outline-none transition-all duration-300 focus:border-[#D6B56D] focus:ring-1 focus:ring-[#D6B56D]/20"
                >
                  <option value="Food">Food</option>
                  <option value="Shopping">
                    Shopping
                  </option>
                  <option value="Transport">
                    Transport
                  </option>
                  <option value="Salary">Salary</option>
                </select>
              </div>

            </div>

            {/* Date */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Date
              </label>

              <input
                type="date"
                value={formData.date}
                onChange={(e) =>
                  handleChange("date", e.target.value)
                }
                className="w-full rounded-2xl border border-[#332C1D] bg-[#171715] px-5 py-3.5 text-white outline-none transition-all duration-300 focus:border-[#D6B56D] focus:ring-1 focus:ring-[#D6B56D]/20"
              />
            </div>

            {/* Notes */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Notes
              </label>

              <textarea
                rows={4}
                placeholder="Add notes..."
                value={formData.notes}
                onChange={(e) =>
                  handleChange("notes", e.target.value)
                }
                className="w-full resize-none rounded-2xl border border-[#332C1D] bg-[#171715] px-5 py-3.5 text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:border-[#D6B56D] focus:ring-1 focus:ring-[#D6B56D]/20"
              />
            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="flex flex-shrink-0 flex-col gap-3 border-t border-[#29261F] bg-[#121210] px-6 py-5 sm:flex-row sm:justify-end sm:px-7">

          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-2xl border border-[#332C1D] bg-[#171715] px-6 py-3 font-semibold text-slate-300 transition-all duration-300 hover:border-[#D6B56D]/40 hover:bg-[#D6B56D]/10 hover:text-[#E5C98A] sm:w-auto"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="w-full rounded-2xl bg-[#D6B56D] px-7 py-3 font-semibold text-[#0B0B0A] shadow-[0_10px_30px_rgba(214,181,109,.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E5C98A] hover:shadow-[0_12px_35px_rgba(214,181,109,.2)] sm:w-auto"
          >
            {editingTransaction
              ? "Update Transaction"
              : "Save Transaction"}
          </button>

        </div>

      </div>

      {/* Hide Scrollbar */}
      <style>{`
        .modal-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .modal-scroll::-webkit-scrollbar {
          display: none;
        }

        select option {
          background: #171715;
          color: #ffffff;
        }

        input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(75%) sepia(30%) saturate(600%) hue-rotate(5deg);
          cursor: pointer;
        }
      `}</style>

    </div>
  );
};

export default AddTransactionModal;