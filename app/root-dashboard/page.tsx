'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import DashboardRoot from '../../src/components/dashboard/rootuser/navbar'
import WelcomeRoot from '../../src/components/dashboard/welcomeroot'

export default function RootDashboardPage() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <DashboardRoot>
      <WelcomeRoot />
    </DashboardRoot>
  )
}

