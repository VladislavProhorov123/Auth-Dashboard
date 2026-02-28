import React, { useState } from "react";
import Income from "../pages/Income";
import Dashboard from "../pages/dashboard/Dashboard";
import Expenses from "../pages/Expenses";
import Analytics from "../pages/Analytics";
import Goals from "../pages/Goals";
import Notifications from "../pages/Notifications";
import Profile from "../pages/Profile";

export default function Sidebar({ activeTab, setActiveTab }) {
  const tabs = [
    "Dashboard",
    "Income",
    "Expenses",
    "Analytics",
    "Goals",
    "Notifications",
    "Profile",
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="flex flex-col w-64 text-gray-800 p-4">
        <h2 className="text-2xl font-bold mb-6">FinanceTracker</h2>

        <div className="flex flex-col space-y-2 flex-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-left p-2 cursor-pointer rounded ${
                activeTab === tab ? "bg-blue-700 text-white" : "hover:bg-blue-300"
              }`}
            >
              {tab}
            </button>
          ))}

          
        </div>

        <div className="">
          <div className="bg-[url('assets/bg.png')] w-full h-[220px] bg-no-repeat bg-center rounded-2xl p-4 flex flex-col items-center justify-center text-white">
              <h2 className="text-2xl font-bold mb-2">FinanceTracker</h2>
              <p className="text-center text-gray-200 text-sm mb-4">Get access to all features on tetumbas</p>
              <button className="bg-white text-purple-600 px-8 py-2 rounded-xl font-bold cursor-pointer">Get Pro</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}
