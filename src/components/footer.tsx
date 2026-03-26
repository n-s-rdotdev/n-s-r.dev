import React from 'react'
import ComponentWrapper from './component-wrapper'
import { Button } from './ui/button'

export function Footer() {
  return (
    <>
      <footer className="w-full flex items-center justify-between border-y">
        <div className="w-full max-w-4xl mx-auto border-x flex items-center justify-center p-2">
          <h1 className="text-sm text-muted-foreground ">&copy; 2026 NSR</h1>
        </div>
      </footer>
      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-16 sm:h-2" />
      </div>
    </>
  )
}
