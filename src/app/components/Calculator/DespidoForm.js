"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const fadeSlideVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
}

export default function DespidoForm({ onCalculate }) {
  const [ultimoSalario, setUltimoSalario] = useState('')
  const [fechaIngreso, setFechaIngreso] = useState('')
  const [fechaDespido, setFechaDespido] = useState('')
  const [preaviso, setPreaviso] = useState('no')
  const [diasVacaciones, setDiasVacaciones] = useState('')
  const [aguinaldoProporcional, setAguinaldoProporcional] = useState('no')

  const calcularAntiguedad = () => {
    if (!fechaIngreso || !fechaDespido) return 0
    const ingreso = new Date(fechaIngreso)
    const despido = new Date(fechaDespido)
    if (despido <= ingreso) return 0
    const diffMs = despido - ingreso
    const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365.25)
    return diffYears
  }

  const calcular = (e) => {
    e.preventDefault()
    const salario = parseFloat(ultimoSalario)
    const antiguedad = calcularAntiguedad()
    const vacaciones = parseFloat(diasVacaciones) || 0

    if (!salario || antiguedad <= 0) {
      alert('Completa los campos correctamente')
      return
    }

    const indemnizacion = (salario / 30) * 33 * antiguedad
    const vacacionesPendientes = (salario / 30) * vacaciones
    const mesesTrabajados = new Date(fechaDespido).getMonth() + 1
    const aguinaldo = aguinaldoProporcional === 'si' ? (salario / 12) * mesesTrabajados : 0
    const pagoPreaviso = preaviso === 'si' ? salario : 0
    const integracionMes = salario * 0.25
    const total = indemnizacion + vacacionesPendientes + aguinaldo + pagoPreaviso + integracionMes

    onCalculate({
      tipo: 'despido',
      indemnizacion: indemnizacion.toFixed(2),
      vacaciones: vacacionesPendientes.toFixed(2),
      aguinaldo: aguinaldo.toFixed(2),
      preaviso: pagoPreaviso.toFixed(2),
      integracionMes: integracionMes.toFixed(2),
      total: total.toFixed(2),
      antiguedad: antiguedad.toFixed(2),
    })
  }

  const inputClass = "w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"

  return (
    <motion.form
      key="despido-form"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={fadeSlideVariants}
      transition={{ duration: 0.3 }}
      onSubmit={calcular}
      className="bg-white p-6 rounded-xl shadow-md space-y-5"
    >
      <div>
        <label className="block font-semibold mb-2 text-blue-900">Último salario bruto mensual</label>
        <input
          type="number"
          value={ultimoSalario}
          onChange={(e) => setUltimoSalario(e.target.value)}
          className={inputClass}
          min="0"
          step="any"
          required
        />
      </div>

      <div>
        <label className="block font-semibold mb-2 text-blue-900">Fecha de ingreso</label>
        <input
          type="date"
          value={fechaIngreso}
          onChange={(e) => setFechaIngreso(e.target.value)}
          className={inputClass}
          required
        />
      </div>

      <div>
        <label className="block font-semibold mb-2 text-blue-900">Fecha de despido</label>
        <input
          type="date"
          value={fechaDespido}
          onChange={(e) => setFechaDespido(e.target.value)}
          className={inputClass}
          required
        />
      </div>

      <div>
        <label className="block font-semibold mb-2 text-blue-900">Hubo preaviso?</label>
        <select
          value={preaviso}
          onChange={(e) => setPreaviso(e.target.value)}
          className={inputClass}
        >
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
      </div>

      <div>
        <label className="block font-semibold mb-2 text-blue-900">Días de vacaciones no gozadas</label>
        <input
          type="number"
          value={diasVacaciones}
          onChange={(e) => setDiasVacaciones(e.target.value)}
          className={inputClass}
          min="0"
          step="1"
          placeholder="0"
        />
      </div>

      <div>
        <label className="block font-semibold mb-2 text-blue-900">¿Corresponde aguinaldo proporcional?</label>
        <select
          value={aguinaldoProporcional}
          onChange={(e) => setAguinaldoProporcional(e.target.value)}
          className={inputClass}
        >
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
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
