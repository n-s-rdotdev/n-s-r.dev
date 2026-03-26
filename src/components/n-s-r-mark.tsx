import { cn } from '@/lib/utils'
import React from 'react'

export function NSRMark(props: React.ComponentProps<"span">) {
  return (
    <span {...props} className={cn("text-2xl text-black dark:text-white font-dark font-pixel-circle ", props.className)}>NSR</span>
  )
}
