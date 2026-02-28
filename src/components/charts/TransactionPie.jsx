import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const initialData = [
  { name: "Rent", value: 1200 },
  { name: "Groceries", value: 500 },
  { name: "Salary", value: 3000 },
  { name: "Entertainment", value: 300 },
];

const COLORS = ["#1D4ED8", "#10B981", "#F59E0B", "#EF4444"];

export default function TransactionsPie() {
  const [data, setData] = useState(initialData);
  const [isOpen, setIsOpen] = useState(false);
  const [newEntry, setNewEntry] = useState({ name: "", value: "" });

  const handleAdd = () => {
    if (!newEntry.name || !newEntry.value) return;
    setData([...data, { name: newEntry.name, value: Number(newEntry.value) }]);
    setNewEntry({ name: "", value: "" });
    setIsOpen(false);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Transactions Overview</h2>
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          onClick={() => setIsOpen(true)}
        >
          + Add
        </button>
      </div>

      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-80">
            <h3 className="text-lg font-semibold mb-4">Add Transaction</h3>
            <input
              type="text"
              placeholder="Category"
              className="w-full mb-2 p-2 border rounded"
              value={newEntry.name}
              onChange={(e) => setNewEntry({ ...newEntry, name: e.target.value })}
            />
            <input
              type="number"
              placeholder="Amount"
              className="w-full mb-4 p-2 border rounded"
              value={newEntry.value}
              onChange={(e) => setNewEntry({ ...newEntry, value: e.target.value })}
            />
            <div className="flex justify-end space-x-2">
              <button
                className="px-3 py-1 rounded border"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
                onClick={handleAdd}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}