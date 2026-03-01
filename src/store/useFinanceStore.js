import { create } from "zustand";

export const useFinanceStore = create((set, get) => ({
  transactions: [
    {
      id: 1,
      type: "income",
      amount: 1200,
      category: "Salary",
      title: "Monthly salary",
      date: "2026-02-01",
    },
    {
      id: 2,
      type: "expense",
      amount: 250,
      category: "Food",
      title: "Groceries",
      date: "2026-02-03",
    },
    {
      id: 3,
      type: "expense",
      amount: 99,
      category: "Subscriptions",
      title: "Netflix",
      date: "2026-02-04",
    },
  ],

  addTransaction: (tx) => set((state) => ({
    transactions: [
      {id: Date.now(), ...tx},
      ...state.transactions
    ]
  }))
}));
