'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import Dashboard from '../../../../src/components/dashboard/admin/navbar'
import Orderdetail from '../../../../src/components/dashboard/admin/orderdetail'

export default function OrderDetailPage() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Dashboard>
      <Orderdetail />
    </Dashboard>
  )
}

