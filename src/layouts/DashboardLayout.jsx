import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Dashboard from "../pages/dashboard/Dashboard";
import Income from "../pages/Income";
import Expenses from "../pages/Expenses";
import Analytics from "../pages/Analytics";
import Goals from "../pages/Goals";
import Notifications from "../pages/Notifications";
import Profile from "../pages/Profile";
import Plans from "../pages/Plans";

export default function DashboardLayout() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const tabComponents = {
    Dashboard: <Dashboard />,
    Income: <Income />,
    Expenses: <Expenses />,
    Analytics: <Analytics />,
    Goals: <Goals />,
    Notifications: <Notifications />,
    Profile: <Profile />,
    Plans: <Plans />
  };

  return (
    <div className="h-screen flex bg-[rgb(var(--color-bg-main))]">
      <aside className="w-64 bg-[rgb(var(--color-bg-card))] border-r border-[rgb(var(--color-border-muted))]">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-[rgb(var(--color-bg-card))] border-b border-[rgb(var(--color-border-muted))] px-4 py-3">
          <Header />
        </header>
        <main className="flex-1 p-6 overflow-y-auto">
          {tabComponents[activeTab]}
        </main>
      </div>
    </div>
  );
}
