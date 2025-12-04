'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import Dashboard from '../../src/components/dashboard/admin/navbar'
import Medicationdue from '../../src/components/dashboard/admin/medicationdue'

export default function MedicationDuePage() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Dashboard>
      <Medicationdue />
    </Dashboard>
  )
}

