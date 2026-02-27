import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function DashboardLayout() {
  return (
    <div className='h-screen flex bg-[rgb(var(--color-bg-main))]'>
      <aside className='w-64 bg-[rgb(var(--color-bg-card))] border-r border-[rgb(var(--color-border-muted))]'>
        <Sidebar />
      </aside>

      <div className="flex-1 flex flex-col">
        <header className='h-16 bg-[rgb(var(--color-bg-card))] border-b border-[rgb(var(--color-border-muted))] px-4 py-3'>
          <Header />
        </header>
        <main className='flex-1 p-6 overflow-y-auto'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
