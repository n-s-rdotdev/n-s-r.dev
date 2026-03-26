import { cn } from '@/lib/utils'
import React from 'react'

export default function ComponentWrapper({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn("w-full h-full max-w-4xl mx-auto px-2", className)}>
      {children}
    </div>
  )
}
