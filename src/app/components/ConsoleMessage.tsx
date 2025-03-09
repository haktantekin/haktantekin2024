'use client'

import { useEffect } from 'react'

export const ConsoleMessage = () => {
  useEffect(() => {
    console.log('Console\'da hata göremedin mi?, daha iyisi için iletişime geç >> me@haktantekin.com')
  }, [])

  return null
} 