'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import ClientDashboard from '../../src/components/dashboard/clients/navbar'
import DueOrderUser from '../../src/components/dashboard/clients/dueorder'

export default function DueOrderUserPage() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <ClientDashboard>
      <DueOrderUser />
    </ClientDashboard>
  )
}

