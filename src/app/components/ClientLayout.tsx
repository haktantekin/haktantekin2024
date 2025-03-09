'use client'

import { ReactNode, useEffect } from 'react'

interface ClientLayoutProps {
  children: ReactNode
  fontClasses: string
}

export default function ClientLayout({ children, fontClasses }: ClientLayoutProps) {
  // Bu useEffect, istemci tarafında çalışacak ve vsc-initialized sınıfını kontrol edecek
  useEffect(() => {
    // Eğer body'de vsc-initialized sınıfı varsa, bu sınıfı kaldır
    const body = document.querySelector('body')
    if (body && body.classList.contains('vsc-initialized')) {
      body.classList.remove('vsc-initialized')
    }
  }, [])

  return (
    <body 
      className={`${fontClasses} font-sans text-c-dark`}
      suppressHydrationWarning={true}
    >
      {children}
    </body>
  )
} 