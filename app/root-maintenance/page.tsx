'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import DashboardRoot from '../../src/components/dashboard/rootuser/navbar'
import UserMaintenanceRoot from '../../src/components/dashboard/rootuser/usermaintenance'

export default function RootMaintenancePage() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <DashboardRoot>
      <UserMaintenanceRoot />
    </DashboardRoot>
  )
}

