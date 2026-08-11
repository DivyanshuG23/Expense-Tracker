import API from "./api";

// Get All Expenses
export const getExpenses = () => {
  return API.get("/expense");
};

// Create Expense
export const createExpense = (data) => {
  return API.post("/expense", data);
};

// Update Expense
export const updateExpense = (id, data) => {
  return API.put(`/expense/${id}`, data);
};

// Delete Expense
export const deleteExpense = (id) => {
  return API.delete(`/expense/${id}`);
};