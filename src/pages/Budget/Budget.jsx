import { useState, useEffect } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";

import BudgetCards from "./BudgetCards";
import BudgetProgress from "./BudgetProgress";
import BudgetList from "./BudgetList";
import BudgetModal from "./BudgetModal";

import {
  getBudgets,
  createBudget,
  updateBudget,
  deleteBudget,
} from "../../services/budgetService";

const Budget = () => {
  // ==========================
  // States
  // ==========================

  const [budgets, setBudgets] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editingBudget, setEditingBudget] = useState(null);

  // ==========================
  // Fetch Budgets
  // ==========================

  const fetchBudgets = async () => {
    try {
      const response = await getBudgets();

      setBudgets(response.data.budgets);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // Load Data
  // ==========================

  useEffect(() => {
    fetchBudgets();
  }, []);

  // ==========================
  // Loading Screen
  // ==========================

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex min-h-[60vh] items-center justify-center">
          <p className="text-sm font-medium text-[#D6B56D]">
            Loading Budgets...
          </p>
        </div>
      </DashboardLayout>
    );
  }

  // ==========================
  // Save Budget
  // ==========================

  const handleSaveBudget = async (formData) => {
    try {
      const budgetData = {
        category: formData.category,
        limit: Number(formData.limit),
      };

      if (editingBudget) {
        await updateBudget(
          editingBudget._id,
          budgetData
        );
      } else {
        await createBudget(budgetData);
      }

      await fetchBudgets();

      setEditingBudget(null);
      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  // ==========================
  // Edit Budget
  // ==========================

  const handleEditBudget = (budget) => {
    setEditingBudget(budget);
    setIsModalOpen(true);
  };

  // ==========================
  // Delete Budget
  // ==========================

  const handleDeleteBudget = async (id) => {
    try {
      await deleteBudget(id);

      await fetchBudgets();
    } catch (error) {
      console.log(error);
    }
  };

  // ==========================
  // Budget Summary
  // ==========================

  const totalBudget = budgets.reduce(
    (sum, item) =>
      sum + Number(item.limit || 0),
    0
  );

  const totalSpent = budgets.reduce(
    (sum, item) =>
      sum + Number(item.spent || 0),
    0
  );

  const remainingBudget =
    totalBudget - totalSpent;

  return (
    <DashboardLayout>

      {/* Heading */}
      <div className="mb-5">
        <h1 className="text-3xl font-black text-white">
          Budget
        </h1>

        <p className="mt-1 text-slate-400">
          Plan and manage your monthly budgets efficiently.
        </p>
      </div>

      {/* Top Cards */}
      <div className="mb-5">
        <BudgetCards
          totalBudget={totalBudget}
          totalSpent={totalSpent}
          remainingBudget={remainingBudget}
          onAdd={() => {
            setEditingBudget(null);
            setIsModalOpen(true);
          }}
        />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">

        {/* Progress */}
        <div className="self-start xl:col-span-1">
          <BudgetProgress
            budgets={budgets}
          />
        </div>

        {/* Budget List */}
        <div className="self-start xl:col-span-2">
          <BudgetList
            budgets={budgets}
            onEdit={handleEditBudget}
            onDelete={handleDeleteBudget}
          />
        </div>

      </div>

      {/* Budget Modal */}
      <BudgetModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingBudget(null);
        }}
        onSave={handleSaveBudget}
        editingBudget={editingBudget}
      />

    </DashboardLayout>
  );
};

export default Budget;