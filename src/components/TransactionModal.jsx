import React, { useState } from "react";
import { useFinanceStore } from "../store/useFinanceStore";

export default function TransactionModal({ onClose }) {
  const addTransaction = useFinanceStore((s) => s.addTransaction);

  const [type, setType] = useState("expence");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const submit = () => {
    if (!title || !amount || !category) return;

    addTransaction({
      type,
      title,
      amount: Number(amount),
      category,
      date: new Date().toISOString(),
    });

    onClose();
  };
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-[420px] p-6">
        <h2 className="text-xl font-bold mb-4">Add transaction</h2>

        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setType("income")}
            className={`flex-1 py-2 rounded-2xl font-semibold ${type === "income" ? "bg-green-600 text-white" : "bg-gray-100"}`}
          >
            Income
          </button>
          <button
            onClick={() => setType("expense")}
            className={`flex-1 py-2 rounded-2xl font-semibold ${type === "expense" ? "bg-red-600 text-white" : "bg-gray-100"}`}
          >
            Income
          </button>
        </div>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full mb-3 px-3 py-2 border rounded-2xl"
        />

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className="w-full mb-3 px-3 py-2 border rounded-2xl"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full mb-5 px-3 py-2 border rounded-xl"
        >
          <option value="">Selected category</option>
          <option value="Salary">Salary</option>
          <option value="Food">Food</option>
          <option value="Subscriptions">Subscriptions</option>
          <option value="Transport">Transport</option>
          <option value="Other">Other</option>
        </select>
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2 rounded-xl bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={submit}
            className="flex-1 py-2 rounded-xl bg-blue-600 text-white font-semibold active:scale-95 transition"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
