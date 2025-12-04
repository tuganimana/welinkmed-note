'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import ClientDashboard from '../../src/components/dashboard/clients/navbar'
import Addclient from '../../src/components/dashboard/clients/addclient'

export default function AddClientPage() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <ClientDashboard>
      <Addclient />
    </ClientDashboard>
  )
}

