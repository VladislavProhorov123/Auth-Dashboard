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


export default function Dashboard() {
  return (
    <div className="">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Dashboard</h1>

      <div className="flex flex-col gap-6">
        <div className="flex">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px]   bg-[rgb(var(--color-bg-card))] rounded-lg shadow p-4">
            <FinanceCard
              icon={<ChartCandlestickIcon className="text-white" />}
              bgIcon="bg-blue-500"
              bgCard="bg-blue-100"
              title="Total balance"
              subtitle="$45,231.89"
              info="+12.5% from last month"
            />
            <FinanceCard
              icon={<TrendingUp className="text-white" />}
              bgIcon="bg-green-500"
              bgCard="bg-green-100"
              title="Monthly income"
              subtitle="+$2350"
              info="+8.2% from last month"
            />
            <FinanceCard
              icon={<TrendingDown className="text-white" />}
              bgIcon="bg-red-500"
              bgCard="bg-red-100"
              title="Monthly expenses"
              subtitle="+$12,234"
              info="+5.4% from last month"
            />
            <FinanceCard
              icon={<HandCoins className="text-white" />}
              bgIcon="bg-yellow-500"
              bgCard="bg-yellow-100"
              title="Savings"
              subtitle="+$1,234"
              info="+12.5% from last month"
            />
          </div>
          <RevenueChart />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RecentTransactions />
          </div>
      </div>
    </div>
  );
}
