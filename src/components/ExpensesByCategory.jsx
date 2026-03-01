import React from "react";
import { useFinanceStore } from "../store/useFinanceStore";
import { Cell, Pie, Tooltip, PieChart, YAxis, XAxis, Bar, ResponsiveContainer, BarChart, CartesianGrid, Legend } from "recharts";

const COLORS = ["#2563eb", "#ef4444", "#f59e0b", "#10b981"];

export default function ExpensesByCategory() {
  const transactions = useFinanceStore((state) => state.transactions);

  const data = Object.values(
    transactions.reduce((acc, tx) => {
      if (!acc[tx.category]) {
        acc[tx.category] = {
          category: tx.category,
          income: 0,
          expense: 0,
        };
      }

      if (tx.type === "income") {
        acc[tx.category].income += tx.amount;
      } else {
        acc[tx.category].expense += tx.amount;
      }

      return acc;
    }, {}),
  );

  return (
    <div className="bg-white rounded-2xl p-4 shadow">
      <h3 className="font-semibold text-lg mb-4">Expenses by category</h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar dataKey="income" fill="#16a34a" radius={[6, 6, 0, 0]} />
          <Bar dataKey="expense" fill="#dc2626" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
