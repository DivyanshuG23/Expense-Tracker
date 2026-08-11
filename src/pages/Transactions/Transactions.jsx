import { useState, useEffect } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";
import TransactionFilters from "./TransactionFilters";
import TransactionTable from "./TransactionTable";
import AddTransactionModal from "./AddTransactionModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

import {
  getExpenses,
  createExpense,
  updateExpense,
  deleteExpense,
} from "../../services/expenseService";

const Transactions = () => {
  // ===========================
  // States
  // ===========================

  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editingTransaction, setEditingTransaction] =
    useState(null);

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All Categories");

  const [selectedType, setSelectedType] =
    useState("All Types");

  const [deleteModalOpen, setDeleteModalOpen] =
    useState(false);

  const [selectedTransactionId, setSelectedTransactionId] =
    useState(null);

  // ===========================
  // Fetch Transactions
  // ===========================

  const fetchTransactions = async () => {
    try {
      const response = await getExpenses();

      const formattedTransactions =
        response.data.expenses.map((item) => ({
          id: item._id,
          title: item.title,
          category: item.category,
          amount: item.amount,

          type:
            item.type.charAt(0).toUpperCase() +
            item.type.slice(1),

          date: new Date(item.date).toLocaleDateString(
            "en-GB"
          ),

          notes: item.note || "",
        }));

      setTransactions(formattedTransactions);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  // ===========================
  // Save Transaction
  // ===========================

  const handleSaveTransaction = async (formData) => {
    try {
      const expenseData = {
        title: formData.title,
        amount: Number(formData.amount),
        type: formData.type.toLowerCase(),
        category: formData.category,
        date: formData.date,
        note: formData.notes,
      };

      if (editingTransaction) {
        await updateExpense(
          editingTransaction.id,
          expenseData
        );
      } else {
        await createExpense(expenseData);
      }

      await fetchTransactions();

      setEditingTransaction(null);
      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  // ===========================
  // Delete Transaction
  // ===========================

  const handleDeleteTransaction = (id) => {
    setSelectedTransactionId(id);
    setDeleteModalOpen(true);
  };

  const confirmDeleteTransaction = async () => {
    try {
      await deleteExpense(selectedTransactionId);

      await fetchTransactions();

      setDeleteModalOpen(false);
      setSelectedTransactionId(null);
    } catch (error) {
      console.log(error);
    }
  };

  // ===========================
  // Edit Transaction
  // ===========================

  const handleEditTransaction = (transaction) => {
    setEditingTransaction(transaction);
    setIsModalOpen(true);
  };

  // ===========================
  // Filters
  // ===========================

  const filteredTransactions =
    transactions.filter((transaction) => {
      const matchesSearch =
        transaction.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All Categories" ||
        transaction.category === selectedCategory;

      const matchesType =
        selectedType === "All Types" ||
        transaction.type === selectedType;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesType
      );
    });

  // ===========================
  // Loading
  // ===========================

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex min-h-[70vh] items-center justify-center">
          <div className="text-center">

            <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-2 border-[#D6B56D]/20 border-t-[#D6B56D]" />

            <p className="text-sm font-medium text-slate-400">
              Loading Transactions...
            </p>

          </div>
        </div>
      </DashboardLayout>
    );
  }

  // ===========================
  // UI
  // ===========================

  return (
    <DashboardLayout>

      {/* Page Header */}
      <div className="mb-6">

        <h1 className="text-3xl font-black text-white">
          Transactions
        </h1>

        <p className="mt-1 text-slate-400">
          Manage all your income & expenses.
        </p>

      </div>

      {/* Filters */}
      <div className="rounded-3xl border border-[#D6B56D]/10 bg-[#0F0F0E] p-4 shadow-lg">
        <TransactionFilters
          onAdd={() => {
            setEditingTransaction(null);
            setIsModalOpen(true);
          }}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />
      </div>

      {/* Transaction Table */}
      <div className="mt-6 overflow-hidden rounded-3xl border border-[#D6B56D]/10 bg-[#0F0F0E] shadow-[0_20px_60px_rgba(0,0,0,.25)]">

        <TransactionTable
          transactions={filteredTransactions}
          onDelete={handleDeleteTransaction}
          onEdit={handleEditTransaction}
        />

      </div>

      {/* Add / Edit Modal */}
      <AddTransactionModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingTransaction(null);
        }}
        onSave={handleSaveTransaction}
        editingTransaction={editingTransaction}
      />

      {/* Delete Modal */}
      <DeleteConfirmationModal
        isOpen={deleteModalOpen}
        onClose={() => {
          setDeleteModalOpen(false);
          setSelectedTransactionId(null);
        }}
        onConfirm={confirmDeleteTransaction}
      />

    </DashboardLayout>
  );
};

export default Transactions;