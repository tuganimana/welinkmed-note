'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import DashboardRoot from '../../src/components/dashboard/rootuser/navbar'
import ReportRoot from '../../src/components/dashboard/rootuser/report'

export default function RootReportPage() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <DashboardRoot>
      <ReportRoot />
    </DashboardRoot>
  )
}

