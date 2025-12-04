'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import DashboardRoot from '../../src/components/dashboard/rootuser/navbar'
import PaymentsRoot from '../../src/components/dashboard/rootuser/payments'

export default function RootPaymentPage() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <DashboardRoot>
      <PaymentsRoot />
    </DashboardRoot>
  )
}

