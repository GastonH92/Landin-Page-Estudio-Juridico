"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function TabSelector({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'despido', label: 'Despido' },
    { id: 'accidente', label: 'Accidente' }
  ]

  return (
    <nav className="flex justify-center space-x-10 border-b border-gray-300">
      {tabs.map(tab => {
        const isActive = activeTab === tab.id
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`relative py-3 px-6 text-lg font-semibold transition-colors ${
              isActive ? 'text-blue-900 border-b-2 border-blue-900' : 'text-gray-600 hover:text-blue-700'
            }`}
            aria-current={isActive ? 'page' : undefined}
          >
            {tab.label}

            {isActive && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 right-0 bottom-0 h-1 bg-blue-900 rounded"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        )
      })}
    </nav>
  )
}
