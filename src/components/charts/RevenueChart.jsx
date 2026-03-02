import React from "react";
import { useTranslation } from "react-i18next";
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
  { month: "jan", income: 1200, expense: 800 },
  { month: "feb", income: 1500, expense: 900 },
  { month: "mar", income: 1400, expense: 950 },
  { month: "apr", income: 1700, expense: 1100 },
  { month: "may", income: 1800, expense: 1300 },
  { month: "jun", income: 2000, expense: 1500 },
];

export default function RevenueChart() {
  const { t } = useTranslation();
  return (
    <div className="flex-1 bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">
        {t("chart.revenueOverTime")}
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
        >
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis
            dataKey="month"
            tickFormatter={(value) => t(`months.${value}`)}
            stroke="#8884d8"
          />
          <YAxis stroke="8884d8" />
          <Tooltip />
          <Legend formatter={(value) => t(`chart.${value}`)} />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#1D4ED8"
            strokeWidth={2}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#DC2626"
            strokeWidth={2}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
