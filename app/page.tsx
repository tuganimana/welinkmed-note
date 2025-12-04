'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import Body from '../src/components/home/pages/body'

export default function Home() {
  useEffect(() => {
    AOS.init()
  }, [])

  return <Body />
}

