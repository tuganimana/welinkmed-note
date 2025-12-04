'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import DashboardRoot from '../../src/components/dashboard/rootuser/navbar'
import AddresidentRoot from '../../src/components/dashboard/rootuser/addresident'

export default function RootAddResidentPage() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <DashboardRoot>
      <AddresidentRoot />
    </DashboardRoot>
  )
}

