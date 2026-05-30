'use client'

import { usePathname } from 'next/navigation'

export function NoiseLayer() {
  const pathname = usePathname()
  
  // Disable noise specifically on tracking pages
  if (pathname?.startsWith('/tracking')) return null

  return <div className="bg-grain"></div>
}
