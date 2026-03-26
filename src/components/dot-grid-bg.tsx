import { cn } from "@/lib/utils";

export function DotGridBackground(props: React.ComponentProps<"div">) {
  return (
    <div {...props}>
      <div className={cn("h-full w-full relative flex items-center justify-center text-black dark:text-white",
        "bg-black/0.75 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5"
      )}>

        {/* Black Grid with White Dots Background */}
        <div
          className="absolute inset-0 z-0 hidden dark:block opacity-50"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px),
              radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)
            `,
            backgroundSize: "16px 16px, 16px 16px, 16px 16px",
            backgroundPosition: "0 0, 0 0, 0 0",
          }}
        />

        {/* White Grid with Dots Background */}
        <div
          className="absolute inset-0 z-0 block dark:hidden opacity-50"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px),
              radial-gradient(circle, rgba(51,65,85,0.4) 1px, transparent 1px)
            `,
            backgroundSize: "15px 15px, 15px 15px, 15px 15px",
            backgroundPosition: "0 0, 0 0, 0 0",
          }}
        />

        {props.children}

      </div>
    </div>
  )
}
