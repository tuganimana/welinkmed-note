'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import Dashboard from '../../src/components/dashboard/admin/navbar'
import Addresident from '../../src/components/dashboard/admin/addresident'

export default function AddResidentPage() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Dashboard>
      <Addresident />
    </Dashboard>
  )
}

