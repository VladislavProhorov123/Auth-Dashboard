// store/useFinanceStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { nanoid } from "nanoid";


const round = (n) => Math.round((n + Number.EPSILON) * 100) / 100;

export const useFinanceStore = create(
  persist(
    (set, get) => ({
      transactions: [],

      totalIncome: 0,
      totalExpenses: 0,
      balance: 0,
      savings: 0,

      addTransaction: (transaction) =>
        set((state) => {
          const transactions = [...state.transactions, transaction];

          const totalIncome = transactions
            .filter((t) => t.type === "income")
            .reduce((sum, t) => sum + t.amount, 0);

          const totalExpenses = transactions
            .filter((t) => t.type === "expense")
            .reduce((sum, t) => sum + t.amount, 0);

          const balance = totalIncome - totalExpenses;
          const savings = balance * 0.2;

          const addTransaction = (type, amount) => {
            useFinanceStore.getState().addTransaction({
              id: nanoid(),
              type, // "income" | "expense"
              amount: Number(amount),
              date: new Date().toISOString(),
            });
          };

          return {
            transactions,
            totalIncome: round(totalIncome),
            totalExpenses: round(totalExpenses),
            balance: round(balance),
            savings: round(savings),
          };
        }),
    }),
    {
      name: "finance-storage",
    },
  ),
);
