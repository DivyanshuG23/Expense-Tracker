import API from "./api";

// Get Budgets
export const getBudgets = () => {
  return API.get("/budget/all");
};

// Create Budget
export const createBudget = (data) => {
  return API.post("/budget/add", data);
};

// Update Budget
export const updateBudget = (id, data) => {
  return API.put(`/budget/update/${id}`, data);
};

// Delete Budget
export const deleteBudget = (id) => {
  return API.delete(`/budget/delete/${id}`);
};