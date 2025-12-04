'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import Dashboard from '../../src/components/dashboard/admin/navbar'
import Welcome from '../../src/components/dashboard/welcome'

export default function DashboardPage() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Dashboard>
      <Welcome />
    </Dashboard>
  )
}

