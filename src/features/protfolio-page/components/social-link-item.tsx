import { ArrowUpRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { ForwardRefExoticComponent, RefAttributes } from "react"
import { IconProps } from "@tabler/icons-react"
import { SocialLink } from "../types/social-links"
import Image from "next/image"
import { SocialLinkIcon } from "./social-link/social-link-icon"

const UTM_PARAMS = {
  utm_source: "n-s-r.dev",
  utm_medium: "social",
}

export function SocialLinkItem({ icon, title, href }: SocialLink) {
  return (
    <a
      className={cn(
        "group flex items-center gap-4 px-4 py-2 transition-[background-color] ease-out bg-background hover:bg-accent/30 rounded border"
      )}
      href={`${href}?${new URLSearchParams(UTM_PARAMS)}`}
      target="_blank"
      rel="noopener"
    >
      <div className="relative size-8 shrink-0 ">
        <div className="w-full h-full flex items-center justify-center bg-secondary/50 rounded-lg ring-1 ring-edge ring-offset-1 ring-offset-background">
          <SocialLinkIcon icon={icon} className="size-4 text-muted-foreground" />
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-black/10 corner-squircle ring-inset dark:ring-white/15" />
      </div>

      <h3 className="flex-1 font-medium">{title}</h3>

      <ArrowUpRightIcon className="size-4 text-muted-foreground transition-[rotate] duration-300 group-hover:rotate-45" />
    </a>
  )
}
