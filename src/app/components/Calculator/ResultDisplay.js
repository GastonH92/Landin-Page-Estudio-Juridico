"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function ResultDisplay({ resultado, onReset }) {
  return (
    <motion.div
      key="result-display"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="mt-8 p-6 bg-yellow-100 rounded-lg shadow-md text-yellow-900 font-semibold"
    >
      {resultado.tipo === 'despido' ? (
        <>
          <h2 className="text-2xl font-bold mb-5 text-blue-900">Resultados para Despido</h2>
          <ul className="space-y-2">
          <li>
          Antigüedad: <span className="font-normal">{resultado.antiguedad?.replace?.('$', '')} años</span>
          </li>

            <li>Indemnización: <span className="font-normal">${resultado.indemnizacion}</span></li>
            <li>Vacaciones no gozadas: <span className="font-normal">${resultado.vacaciones}</span></li>
            <li>Aguinaldo proporcional: <span className="font-normal">${resultado.aguinaldo}</span></li>
            <li>Pago por preaviso: <span className="font-normal">${resultado.preaviso}</span></li>
            <li>Integración de mes: <span className="font-normal">${resultado.integracionMes}</span></li>
            <li className="font-bold text-lg mt-4 border-t border-yellow-300 pt-3">Total: ${resultado.total}</li>
          </ul>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-5 text-blue-900">Resultados para Accidente</h2>
          <ul className="space-y-2">
            <li>Indemnización: <span className="font-normal">${resultado.indemnizacion}</span></li>
            <li>Pensión mensual: <span className="font-normal">${resultado.pensionMensual}</span></li>
            <li>Pensión anual: <span className="font-normal">${resultado.pensionAnual}</span></li>
            <li>Porcentaje incapacidad: <span className="font-normal">{resultado.porcentaje}%</span></li>
            <li>Edad trabajador: <span className="font-normal">{resultado.edad} años</span></li>
            <li>Tipo de accidente: <span className="font-normal capitalize">{resultado.tipoAccidente}</span></li>
            <li className="font-bold text-lg mt-4 border-t border-yellow-300 pt-3">Total: ${resultado.total}</li>
          </ul>
        </>
      )}

      <button
        onClick={onReset}
        className="mt-6 w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded font-semibold transition-transform transform active:scale-95"
      >
        Nuevo cálculo
      </button>
    </motion.div>
  )
}
