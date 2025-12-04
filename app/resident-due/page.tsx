'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import Dashboard from '../../src/components/dashboard/admin/navbar'
import ResidentView from '../../src/components/dashboard/admin/residentDue'

export default function ResidentDuePage() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Dashboard>
      <ResidentView />
    </Dashboard>
  )
}

