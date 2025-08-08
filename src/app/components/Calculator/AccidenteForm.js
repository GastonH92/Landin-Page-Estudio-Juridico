"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const fadeSlideVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
}

export default function AccidenteForm({ onCalculate }) {
  const [ingresoBaseMensual, setIngresoBaseMensual] = useState('')
  const [porcentajeIncapacidad, setPorcentajeIncapacidad] = useState('')
  const [edadTrabajador, setEdadTrabajador] = useState('')
  const [tipoAccidente, setTipoAccidente] = useState('laboral')
  const [fechaAccidente, setFechaAccidente] = useState('')

  const calcular = (e) => {
    e.preventDefault()

    const ingreso = parseFloat(ingresoBaseMensual)
    const porcentaje = parseFloat(porcentajeIncapacidad)
    const edad = parseInt(edadTrabajador)

    if (!ingreso || !porcentaje || !edad) {
      alert('Completa todos los campos correctamente')
      return
    }

    let coeficiente = 1
    if (tipoAccidente === 'in itinere') coeficiente = 0.8

    let indemnizacion = ingreso * 24 * (porcentaje / 100) * coeficiente
    let pensionMensual = ingreso * (porcentaje / 100) * coeficiente

    if (edad > 55) {
      indemnizacion *= 0.8
      pensionMensual *= 0.8
    }

    const pensionAnual = pensionMensual * 14
    const total = indemnizacion + pensionAnual

    onCalculate({
      tipo: 'accidente',
      indemnizacion: indemnizacion.toFixed(2),
      pensionMensual: pensionMensual.toFixed(2),
      pensionAnual: pensionAnual.toFixed(2),
      total: total.toFixed(2),
      porcentaje,
      edad,
      tipoAccidente,
      fechaAccidente,
    })
  }

  const inputClass = "w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"

  return (
    <motion.form
      key="accidente-form"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={fadeSlideVariants}
      transition={{ duration: 0.3 }}
      onSubmit={calcular}
      className="bg-white p-6 rounded-xl shadow-md space-y-5"
    >
      <div>
        <label className="block font-semibold mb-2 text-blue-900">Ingreso base mensual bruto</label>
        <input
          type="number"
          value={ingresoBaseMensual}
          onChange={(e) => setIngresoBaseMensual(e.target.value)}
          className={inputClass}
          min="0"
          step="any"
          required
        />
      </div>

      <div>
        <label className="block font-semibold mb-2 text-blue-900">Porcentaje de incapacidad (%)</label>
        <input
          type="number"
          value={porcentajeIncapacidad}
          onChange={(e) => setPorcentajeIncapacidad(e.target.value)}
          className={inputClass}
          min="0"
          max="100"
          step="any"
          required
        />
      </div>

      <div>
        <label className="block font-semibold mb-2 text-blue-900">Edad del trabajador</label>
        <input
          type="number"
          value={edadTrabajador}
          onChange={(e) => setEdadTrabajador(e.target.value)}
          className={inputClass}
          min="0"
          step="1"
          required
        />
      </div>

      <div>
        <label className="block font-semibold mb-2 text-blue-900">Tipo de accidente</label>
        <select
          value={tipoAccidente}
          onChange={(e) => setTipoAccidente(e.target.value)}
          className={inputClass}
          required
        >
          <option value="laboral">Laboral</option>
          <option value="in itinere">In itinere</option>
        </select>
      </div>

      <div>
        <label className="block font-semibold mb-2 text-blue-900">Fecha del accidente</label>
        <input
          type="date"
          value={fechaAccidente}
          onChange={(e) => setFechaAccidente(e.target.value)}
          className={inputClass}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded font-semibold transition-transform transform active:scale-95"
      >
        Calcular indemnización
      </button>
    </motion.form>
  )
}
