'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import ClientDashboard from '../../../src/components/dashboard/clients/navbar'
import AddresidentUser from '../../../src/components/dashboard/clients/addresident'

export default function AddResidentUserPage() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <ClientDashboard>
      <AddresidentUser />
    </ClientDashboard>
  )
}

