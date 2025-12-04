'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import Dashboard from '../../src/components/dashboard/admin/navbar'
import Orderedit from '../../src/components/dashboard/admin/orderedit'

export default function OrderEditPage() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Dashboard>
      <Orderedit />
    </Dashboard>
  )
}

