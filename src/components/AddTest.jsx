import React from 'react'
import { useFinanceStore } from '../store/useFinanceStore';

export default function AddTest() {
  const addTransaction = useFinanceStore((s) => s.addTransaction);

  return (
    <button
      onClick={() =>
        addTransaction({
          type: "expense",
          amount: 50,
          category: "Food",
          title: "Burger",
          date: new Date().toISOString(),
        })
      }
      className="px-4 py-2 bg-red-500 text-white"
    >
      Add expense
    </button>
  );

}
