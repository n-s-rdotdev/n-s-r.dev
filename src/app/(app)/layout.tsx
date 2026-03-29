import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="isolate w-full min-h-dvh">
      <div className="max-w-screen overflow-x-clip flex min-h-dvh flex-col">
        <SiteHeader />
        <div className="mx-auto flex w-full max-w-4xl flex-1">
          <div className="grid flex-1 grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] justify-center [--gutter-width:2.5rem] lg:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-2xl))_var(--gutter-width)]">
            <div className="col-start-1 row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 lg:block dark:[--pattern-fg:var(--color-white)]/10"></div>
            {/* <div className="px-2"> */}
            {children}
            {/* </div> */}
            <div className="row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 lg:col-start-3 lg:block dark:[--pattern-fg:var(--color-white)]/10"></div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}