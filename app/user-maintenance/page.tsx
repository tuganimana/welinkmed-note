'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import Dashboard from '../../src/components/dashboard/admin/navbar'
import UserMaintenance from '../../src/components/dashboard/admin/usermaintenance'

export default function UserMaintenancePage() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Dashboard>
      <UserMaintenance />
    </Dashboard>
  )
}

