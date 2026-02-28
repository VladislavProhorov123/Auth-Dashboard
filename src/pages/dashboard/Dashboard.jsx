import React from "react";
import FinanceCard from "../../components/FinanceCard";
import {
  ChartCandlestickIcon,
  Newspaper,
  Receipt,
  UserPlus,
} from "lucide-react";
import RevenueChart from "../../components/charts/RevenueChart";
import TransactionsPie from "../../components/charts/TransactionPie";

export default function Dashboard() {
  return (
    <div className="">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Dashboard</h1>

      <div className="flex flex-col gap-6">
        <div className="flex">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px]   bg-[rgb(var(--color-bg-card))] rounded-lg shadow p-4">
            <FinanceCard
              icon={<ChartCandlestickIcon className="text-white" />}
              bgIcon="bg-red-500"
              bgCard="bg-red-200"
              title="Total Revenue"
              subtitle="$45,231.89"
              info="+12.5% from last month"
            />
            <FinanceCard
              icon={<Newspaper className="text-white" />}
              bgIcon="bg-green-500"
              bgCard="bg-green-100"
              title="Subscriptions"
              subtitle="+2350"
              info="+8.2% from last month"
            />
            <FinanceCard
              icon={<Receipt className="text-white" />}
              bgIcon="bg-purple-500"
              bgCard="bg-purple-100"
              title="Sales"
              subtitle="+12,234"
              info="+5.4% from last month"
            />
            <FinanceCard
              icon={<UserPlus className="text-white" />}
              bgIcon="bg-yellow-500"
              bgCard="bg-yellow-100"
              title="New Customers"
              subtitle="+1,234"
              info="+12.5% from last month"
            />
          </div>
          <RevenueChart />
        </div>
        <TransactionsPie />
      </div>
    </div>
  );
}
