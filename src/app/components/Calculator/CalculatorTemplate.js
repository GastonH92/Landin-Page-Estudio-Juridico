"use client"
import React, { useState, useRef } from 'react'
import { useInView, motion, AnimatePresence } from 'framer-motion'
import TabSelector from './TabSelector'
import DespidoForm from './DespidoForm'
import AccidenteForm from './AccidenteForm'
import ResultDisplay from './ResultDisplay'

const fadeSlideVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function CalculatorTemplate() {
  const [activeTab, setActiveTab] = useState('despido')
  const [resultado, setResultado] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setResultado(null)
  }

  return (
    <div id="Calculadora"   className="max-w-3xl mx-auto px-6 py-8 bg-gray-50 rounded-lg shadow-lg">
      <motion.h1
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={fadeSlideVariants}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-blue-900 text-center mb-8"
      >
        Calculadora de Indemnización Laboral
      </motion.h1>

      <TabSelector activeTab={activeTab} onTabChange={handleTabChange} />

      <div className="mt-8 min-h-[420px]">
        <AnimatePresence mode="wait">
          {activeTab === 'despido' && (
            <DespidoForm
              key="despido-form"
              onCalculate={setResultado}
            />
          )}
          {activeTab === 'accidente' && (
            <AccidenteForm
              key="accidente-form"
              onCalculate={setResultado}
            />
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {resultado && (
          <ResultDisplay
            key="resultado"
            resultado={resultado}
            onReset={() => setResultado(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
