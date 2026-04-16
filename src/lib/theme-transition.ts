"use client"

import { flushSync } from "react-dom"
import { META_THEME_COLORS } from "@/config/site"

type ToggleThemeWithTransitionOptions = {
  resolvedTheme: string | undefined
  setMetaColor: (color: string) => void
  setTheme: (theme: "light" | "dark") => void
}

export function toggleThemeWithTransition({
  resolvedTheme,
  setTheme,
  setMetaColor,
}: ToggleThemeWithTransitionOptions) {
  const nextTheme = resolvedTheme === "dark" ? "light" : "dark"
  const nextMetaColor =
    nextTheme === "dark" ? META_THEME_COLORS.dark : META_THEME_COLORS.light

  if (!document.startViewTransition) {
    setTheme(nextTheme)
    setMetaColor(nextMetaColor)
    return
  }

  document.startViewTransition(() => {
    flushSync(() => {
      setTheme(nextTheme)
      setMetaColor(nextMetaColor)
    })
  })
}
