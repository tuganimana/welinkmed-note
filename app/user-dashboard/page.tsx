'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import ClientDashboard from '../../src/components/dashboard/clients/navbar'
import ClientWelcome from '../../src/components/dashboard/clients/clientwelcome'

export default function UserDashboardPage() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <ClientDashboard>
      <ClientWelcome />
    </ClientDashboard>
  )
}

