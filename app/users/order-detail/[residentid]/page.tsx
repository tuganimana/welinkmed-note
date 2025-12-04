'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import ClientDashboard from '../../../../src/components/dashboard/clients/navbar'
import OrderdetailUser from '../../../../src/components/dashboard/clients/orderdetail'

export default function UserOrderDetailPage() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <ClientDashboard>
      <OrderdetailUser />
    </ClientDashboard>
  )
}

