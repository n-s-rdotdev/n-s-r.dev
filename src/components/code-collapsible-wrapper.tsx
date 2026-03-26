"use client"

import { useEffect, useRef, useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"

export function CodeCollapsibleWrapper({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Collapsible>) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [isOverflowing, setIsOverflowing] = useState(false)

  useEffect(() => {
    const element = contentRef.current

    if (!element) {
      return
    }

    const measure = () => {
      setIsOverflowing(element.scrollHeight > 320)
    }

    measure()

    const resizeObserver = new ResizeObserver(measure)
    resizeObserver.observe(element)

    return () => {
      resizeObserver.disconnect()
    }
  }, [children])

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className={cn(
        "group/collapsible not-prose relative my-[1.25em] overflow-hidden rounded-xl",
        className
      )}
      {...props}
    >
      <CollapsibleContent
        className="overflow-hidden data-[state=closed]:max-h-80"
        forceMount
      >
        <div
          ref={contentRef}
          className="*:data-rehype-pretty-code-figure:my-0 **:data-rehype-pretty-code-figure:rounded-none"
        >
          {children}
        </div>
      </CollapsibleContent>

      {isOverflowing && !open ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex h-32 items-end justify-center bg-linear-to-t from-code via-code/95 to-transparent pb-4">
          <CollapsibleTrigger asChild>
            <Button
              className="pointer-events-auto border-edge bg-background/95 shadow-sm backdrop-blur"
              variant="outline"
              size="sm"
            >
              Expand
            </Button>
          </CollapsibleTrigger>
        </div>
      ) : null}
    </Collapsible>
  )
}
