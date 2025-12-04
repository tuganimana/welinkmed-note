'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import Dashboard from '../../../src/components/dashboard/admin/navbar'
import Editresident from '../../../src/components/dashboard/admin/editresident'

export default function ResidentEditPage() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Dashboard>
      <Editresident />
    </Dashboard>
  )
}

