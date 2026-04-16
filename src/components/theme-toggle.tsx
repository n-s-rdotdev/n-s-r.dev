"use client"

import { useTheme } from "next-themes"

import { MoonIcon } from "./animated-icons/moon"
import { SunMediumIcon } from "./animated-icons/sun-medium"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import { Button } from "./ui/button"
import { Kbd } from "./ui/kbd"
import { useMetaColor } from "@/hooks/use-meta-color"
import { toggleThemeWithTransition } from "@/lib/theme-transition"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  const { setMetaColor } = useMetaColor()

  const switchTheme = () => {
    toggleThemeWithTransition({
      resolvedTheme,
      setTheme,
      setMetaColor,
    })
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          className="border-none"
          variant="ghost"
          size="icon-sm"
          onClick={switchTheme}
        >
          <MoonIcon className="relative hidden after:absolute after:-inset-2 [html.dark_&]:block" />
          <SunMediumIcon className="relative hidden after:absolute after:-inset-2 [html.light_&]:block" />
          <span className="sr-only">Theme Toggle</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent className="pr-2 pl-3">
        <div className="flex items-center gap-3">
          Toggle Mode
          <Kbd>D</Kbd>
        </div>
      </TooltipContent>
    </Tooltip>
  )
}
