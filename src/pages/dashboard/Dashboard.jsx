import React from "react";
import FinanceCard from "../../components/FinanceCard";
import {
  ChartCandlestickIcon,
  HandCoins,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import RevenueChart from "../../components/charts/RevenueChart";
import RecentTransactions from "../../components/RecentTransactions";
import ExpensesByCategory from "../../components/ExpensesByCategory";
import AddTest from "../../components/AddTest";
import { useFinanceStore } from "../../store/useFinanceStore";


export default function Dashboard() {
  const {
  balance,
  totalIncome,
  totalExpenses,
  savings,
} = useFinanceStore();
  return (
    <div className="">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Dashboard</h1>

      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6   bg-[rgb(var(--color-bg-card))] rounded-lg shadow p-4">
            <FinanceCard
              icon={<ChartCandlestickIcon className="text-white" />}
              bgIcon="bg-blue-500"
              bgCard="bg-blue-100"
              title="Total balance"
              subtitle={`$${balance}`}
              info="+12.5% from last month"
            />
            <FinanceCard
              icon={<TrendingUp className="text-white" />}
              bgIcon="bg-green-500"
              bgCard="bg-green-100"
              title="Monthly income"
              subtitle={`+$${totalIncome}`}
              info="+8.2% from last month"
            />
            <FinanceCard
              icon={<TrendingDown className="text-white" />}
              bgIcon="bg-red-500"
              bgCard="bg-red-100"
              title="Monthly expenses"
              subtitle={`-$${totalExpenses}`}
              info="+5.4% from last month"
            />
            <FinanceCard
              icon={<HandCoins className="text-white" />}
              bgIcon="bg-yellow-500"
              bgCard="bg-yellow-100"
              title="Savings"
              subtitle={`$${savings}`}
              info="+12.5% from last month"
            />
          </div>
          <RevenueChart />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RecentTransactions />
            <ExpensesByCategory />
            
          </div>
      </div>
    </div>
  );
}
