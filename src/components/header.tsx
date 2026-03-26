// import ComponentWrapper from './component-wrapper'
// import { Button } from './ui/button'

// export function Header() {
//   return (
//     <header className="w-full flex items-center justify-between border-y mt-4">
//       <ComponentWrapper className="flex items-center justify-between p-2">
//         <h1 className="text-xl font-bold">NSR</h1>
//         <Button >Click me</Button>
//       </ComponentWrapper>
//     </header>
//   )
// }

import Link from "next/link"
import { Suspense } from "react"

// import blocks from "@/__registry__/__blocks__.json"
import { DesktopNav } from "@/components/desktop-nav"
import { Nav } from "@/components/nav"
import { MAIN_NAV } from "@/config/site"
import { cn } from "@/lib/utils"

import { NSRMark } from "./n-s-r-mark"
import { SiteHeaderMark } from "./site-header-mark"
import { ThemeToggle } from "./theme-toggle"
import { Separator } from "./ui/separator"

// const CommandMenu = dynamic(() =>
//   import("@/components/command-menu").then((mod) => mod.CommandMenu)
// )

// const MobileNav = dynamic(() =>
//   import("@/components/mobile-nav").then((mod) => mod.MobileNav)
// )

export function SiteHeader() {

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 overflow-x-clip bg-background w-full border-y mt-4"
        )}
      >
        <div
          data-slot="site-header-container"
          className="max-w-4xl mx-auto border-x after:z-1 after:transition-[background-color] flex items-center justify-between p-2"
          data-header-container
        >
          {/* <ComponentWrapper className="flex items-center justify-between p-2 after:z-1 after:transition-[background-color]"> */}
          {/* <BrandContextMenu> */}
          <Link
            href="/"
            aria-label="Home"
          >
            <Suspense fallback={<NSRMark />}>
              <SiteHeaderMark />
            </Suspense>
          </Link>
          {/* </BrandContextMenu> */}

          <div className="flex-1" />

          <Suspense fallback={<Nav className="max-sm:hidden" items={MAIN_NAV} />}>
            <DesktopNav items={MAIN_NAV} />
          </Suspense>

          <div className="flex items-center *:first:mr-2 max-sm:*:data-[slot=command-menu-trigger]:hidden">
            {/* <CommandMenu enabledHotkeys/> */}
            <Separator
              orientation="vertical"
              className="mx-2 data-vertical:h-4 data-vertical:self-center"
            />
            <ThemeToggle />
          </div>
        </div>
        {/* </ComponentWrapper> */}
      </header>

      {/* Mobile Nav */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 h-[calc(--spacing(16)+env(safe-area-inset-bottom,0px))] bg-linear-to-t from-background from-[calc(env(safe-area-inset-bottom,0%))] to-transparent sm:hidden" />
      <div
        className={cn(
          "fixed bottom-[calc(--spacing(2)+env(safe-area-inset-bottom,0px))] left-1/2 z-50 flex w-fit -translate-x-1/2 items-center rounded-xl bg-popover py-1 pr-1 pl-2.5 shadow-md ring ring-foreground/10 sm:hidden dark:ring-foreground/20",
          "*:data-[slot=command-menu-trigger]:min-w-20 *:data-[slot=command-menu-trigger]:gap-2 *:data-[slot=command-menu-trigger]:rounded-none *:data-[slot=command-menu-trigger]:border-none *:data-[slot=command-menu-trigger]:bg-transparent *:data-[slot=command-menu-trigger]:px-0 *:data-[slot=command-menu-trigger]:hover:bg-transparent *:data-[slot=command-menu-trigger]:active:scale-none"
        )}
      >
        {/* <CommandMenu posts={postPreviews} blocks={blocks} /> */}
        <Separator
          orientation="vertical"
          className="mr-1 ml-2.5 data-vertical:h-6 data-vertical:self-center"
        />
        {/* <MobileNav items={MAIN_NAV} /> */}
      </div>
    </>
  )
}
