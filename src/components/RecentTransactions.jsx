import React from "react";
import { useFinanceStore } from "../store/useFinanceStore";

export default function RecentTransactions() {
  const transactions = useFinanceStore((state) => state.transactions);

  return (
    <div className="bg-white rounded-2xl overflow-hidden h-[380px] p-4 shadow flex flex-col">
      <h3 className="font-semibold text-lg mb-4">Recent transactions</h3>

      <ul className="space-y-3 overflow-y-auto pr-2">
        {transactions.map((tx) => (
          <li key={tx.id} className="flex justify-between items-center">
            <div className="">
              <p className="font-medium">{tx.title}</p>
              <span className="text-sm text-gray-400">{tx.category}</span>
            </div>

            <span
              className={`font-semibold ${
                tx.type === "income" ? "text-green-600" : "text-red-500"
              }`}
            >
              {tx.type === "income" ? "+" : "-"}${tx.amount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
