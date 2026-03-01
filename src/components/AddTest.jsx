import React, { useState } from 'react'
import { useFinanceStore } from '../store/useFinanceStore';
import TransactionModal from './TransactionModal';

export default function AddTest() {
  const addTransaction = useFinanceStore((s) => s.addTransaction);
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <button
      onClick={() => setIsOpen(true)}
      className="px-4 py-2 bg-blue-600 text-white rounded-xl font-semibold active:scale-95 transition"
    >
      Add transaction
    </button>

    {isOpen && <TransactionModal onClose={() => setIsOpen(false)} />}
    </>
  );

}
