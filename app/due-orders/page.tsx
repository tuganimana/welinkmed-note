'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import Dashboard from '../../src/components/dashboard/admin/navbar'
import DueOrder from '../../src/components/dashboard/admin/dueorder'

export default function DueOrdersPage() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Dashboard>
      <DueOrder />
    </Dashboard>
  )
}

