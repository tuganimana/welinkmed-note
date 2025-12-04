'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import Dashboard from '../../../src/components/dashboard/admin/navbar'
import ViewResidents from '../../../src/components/dashboard/admin/residents'

export default function ResidentInfosPage() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Dashboard>
      <ViewResidents />
    </Dashboard>
  )
}

