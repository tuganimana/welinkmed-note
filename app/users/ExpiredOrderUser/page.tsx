'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import ClientDashboard from '../../../src/components/dashboard/clients/navbar'
import ExpiredOrderUser from '../../../src/components/dashboard/clients/expiredorder'

export default function ExpiredOrderUserPage() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <ClientDashboard>
      <ExpiredOrderUser />
    </ClientDashboard>
  )
}

