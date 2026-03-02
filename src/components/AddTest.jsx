import React, { useState } from "react";
import { useFinanceStore } from "../store/useFinanceStore";
import TransactionModal from "./TransactionModal";
import { useTranslation } from "react-i18next";

export default function AddTest() {
  const addTransaction = useFinanceStore((s) => s.addTransaction);
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation();

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-xl font-semibold active:scale-95 transition"
      >
        {t("recentTransactions.addButton")}
      </button>

      {isOpen && <TransactionModal onClose={() => setIsOpen(false)} />}
    </>
  );
}
