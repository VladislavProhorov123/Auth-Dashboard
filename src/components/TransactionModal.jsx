import React, { useState } from "react";
import { useFinanceStore } from "../store/useFinanceStore";
import { useTranslation } from "react-i18next";

export default function TransactionModal({ onClose }) {
  const addTransaction = useFinanceStore((s) => s.addTransaction);

  const [type, setType] = useState("expense");
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

  const { t } = useTranslation();
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-[420px] p-6">
        <h2 className="text-xl font-bold mb-4">{t("modal.addTransaction")}</h2>

        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setType("income")}
            className={`flex-1 py-2 rounded-2xl font-semibold ${type === "income" ? "bg-green-600 text-white" : "bg-gray-100"}`}
          >
            {t("modal.income")}
          </button>
          <button
            onClick={() => setType("expense")}
            className={`flex-1 py-2 rounded-2xl font-semibold ${type === "expense" ? "bg-red-600 text-white" : "bg-gray-100"}`}
          >
            {t("modal.expense")}
          </button>
        </div>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={t("modal.title")}
          className="w-full mb-3 px-3 py-2 border rounded-2xl"
        />

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder={t("modal.amount")}
          className="w-full mb-3 px-3 py-2 border rounded-2xl"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full mb-5 px-3 py-2 border rounded-xl"
        >
          <option value="">{t("modal.selectCategory")}</option>
          <option value="salary">{t("categories.salary")}</option>
          <option value="food">{t("categories.food")}</option>
          <option value="subscriptions">{t("categories.subscriptions")}</option>
          <option value="transport">{t("categories.transport")}</option>
          <option value="other">{t("categories.other")}</option>
        </select>
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2 rounded-xl bg-gray-100"
          >
            {t("modal.cancel")}
          </button>
          <button
            onClick={submit}
            className="flex-1 py-2 rounded-xl bg-blue-600 text-white font-semibold active:scale-95 transition"
          >
            {t("modal.add")}
          </button>
        </div>
      </div>
    </div>
  );
}
