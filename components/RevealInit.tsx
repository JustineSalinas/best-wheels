'use client'

import { useEffect } from 'react'

export default function RevealInit() {
  useEffect(() => {
    document.documentElement.classList.add('js-ready')
  }, [])
  return null
}
