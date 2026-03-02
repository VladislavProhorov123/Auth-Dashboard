import React, { useState } from "react";
import Income from "../pages/Income";
import Dashboard from "../pages/dashboard/Dashboard";
import Expenses from "../pages/Expenses";
import Analytics from "../pages/Analytics";
import Goals from "../pages/Goals";
import Notifications from "../pages/Notifications";
import Profile from "../pages/Profile";
import {
  ChartPie,
  TrendingUp,
  TrendingDown,
  ChartNoAxesColumn,
  BellRing,
  UserPen,
  BadgeCheck,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Sidebar({ activeTab, setActiveTab }) {
  const tabs = [
    {
      key: "dashboard",
      label: "sidebar.dashboard",
      icon: ChartPie,
    },
    {
      key: "income",
      label: "sidebar.income",
      icon: TrendingUp,
    },
    {
      key: "expenses",
      label: "sidebar.expenses",
      icon: TrendingDown,
    },
    {
      key: "analytics",
      label: "sidebar.analytics",
      icon: ChartNoAxesColumn,
    },
    {
      key: "goals",
      label: "sidebar.goals",
      icon: BadgeCheck,
    },
    {
      key: "notifications",
      label: "sidebar.notifications",
      icon: BellRing,
    },
    {
      key: "profile",
      label: "sidebar.profile",
      icon: UserPen,
    },
  ];

  const { t } = useTranslation();

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex flex-col w-64 text-gray-800 p-4">
        <h2 className="text-2xl font-bold mb-6">FinanceTracker</h2>

        <div className="flex flex-col space-y-2 flex-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;

            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`text-left p-3 cursor-pointer rounded-xl flex items-center cursor-pointer
    transition-transform duration-150
    hover:scale-105
    active:scale-95
    will-change-transform ${
      activeTab === tab.key ? "bg-blue-700 text-white" : "hover:bg-blue-300"
    }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                <span>{t(tab.label)}</span>
              </button>
            );
          })}
        </div>

        <div className="">
          <div className="bg-[url('assets/bg.png')] w-full h-[210px] bg-no-repeat bg-center rounded-2xl p-4 flex flex-col items-center justify-center text-white">
            <h2 className="text-2xl font-bold mb-2">FinanceTracker</h2>
            <p className="text-center text-gray-200 text-sm mb-4">
              {t("sidebar.proCard.description")}
            </p>
            <button
              onClick={() => setActiveTab("plans")}
              className="bg-white text-purple-600 px-8 py-2 rounded-xl font-bold
    cursor-pointer
    transition-transform duration-150
    hover:scale-105
    active:scale-95
    will-change-transform
"
            >
              {t("sidebar.getPro")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
