import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", income: 1200, expense: 800 },
  { month: "Feb", income: 1500, expense: 900 },
  { month: "Mar", income: 1400, expense: 950 },
  { month: "Apr", income: 1700, expense: 1100 },
  { month: "May", income: 1800, expense: 1300 },
  { month: "Jun", income: 2000, expense: 1500 },
];

export default function RevenueChart() {
  return (
    <div className="flex-1 ml-6 bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">
        Revenue Over Time
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, left: 0, bottom: 5 }}   
        >
          <CartesianGrid  stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey='month' stroke="#8884d8" />
          <YAxis stroke="8884d8" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="income" stroke="#1D4ED8" strokeWidth={2} activeDot={{ r: 6 }} />
          <Line type="monotone" dataKey="expense" stroke="#DC2626" strokeWidth={2} activeDot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
