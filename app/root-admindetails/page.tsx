'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import DashboardRoot from '../../src/components/dashboard/rootuser/navbar'
import AdminDetailRoot from '../../src/components/dashboard/rootuser/admindetails'

export default function RootAdminDetailsPage() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <DashboardRoot>
      <AdminDetailRoot />
    </DashboardRoot>
  )
}

