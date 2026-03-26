import { cn } from '@/lib/utils'
import React from 'react'

export default function ComponentWrapper({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className="w-full max-w-4xl h-full mx-auto  px-2">
      {/* <div className={cn("border-x", className)}> */}
      {children}
      {/* </div> */}
    </div>
  )
}
