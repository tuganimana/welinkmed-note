'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import ClientDashboard from '../../../../src/components/dashboard/clients/navbar'
import MarComponentUser from '../../../../src/components/dashboard/clients/Marcomponents'

export default function UserMarPage() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <ClientDashboard>
      <MarComponentUser />
    </ClientDashboard>
  )
}

