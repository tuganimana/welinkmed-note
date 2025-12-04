'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import Dashboard from '../../src/components/dashboard/admin/navbar'
import ExpiredOrder from '../../src/components/dashboard/admin/expiredorder'

export default function ExpiredPage() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Dashboard>
      <ExpiredOrder />
    </Dashboard>
  )
}

