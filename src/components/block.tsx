import { cn } from "@/lib/utils";
import ComponentWrapper from "./component-wrapper";

function Block({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn("w-full h-fit overflow-hidden", className)}>
      {children}
    </div>
  )
}

function BlockHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-center items-start text-2xl font-medium p-2">
      {children}
    </div>
  )
}

function BlockSubHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-center items-start text-lg font-medium p-2">
      {children}
    </div>
  )
}

function BlockDescription({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-3 text-sm text-muted-foreground">
      {children}
    </div>
  )
}

function BlockContent({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn("h-fit p-2", className)}>
      {children}
    </div>
  )
}

function BlockSeparator({ className, fullBleed = true }: { className?: string; fullBleed?: boolean }) {
  return (
    <div
      className={cn(
        "relative h-8 w-full overflow-hidden border-y",
        "before:absolute before:bottom-0 before:-z-1 before:h-[calc(100%-1px)]",
        fullBleed ? "before:-left-[100vw] before:w-[200vw]" : "before:left-0 before:w-full",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className
      )}
    />
  )
}

export { Block, BlockHeader, BlockSubHeader, BlockDescription, BlockContent, BlockSeparator };