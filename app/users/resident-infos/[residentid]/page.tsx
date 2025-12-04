'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import ClientDashboard from '../../../../src/components/dashboard/clients/navbar'
import ViewResidentsUser from '../../../../src/components/dashboard/clients/residents'

export default function UserResidentInfosPage() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <ClientDashboard>
      <ViewResidentsUser />
    </ClientDashboard>
  )
}

