'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import Dashboard from '../../../../src/components/dashboard/admin/navbar'
import MarComponent from '../../../../src/components/dashboard/admin/MarComponent'

export default function UserMarPage() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Dashboard>
      <MarComponent />
    </Dashboard>
  )
}

