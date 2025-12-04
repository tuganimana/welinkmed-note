'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import Signin from '../../src/components/dashboard/signin'

export default function SignInPage() {
  useEffect(() => {
    AOS.init()
  }, [])

  return <Signin />
}

