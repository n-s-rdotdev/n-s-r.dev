"use client"

import { EllipsisIcon, LinkIcon, ShareIcon } from "lucide-react"
import { useMemo } from "react"
import { toast } from "sonner"

import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SITE_INFO } from "@/config/site"
import { useIsClient } from "@/hooks/use-is-client"
import { copyText } from "@/utils/copy"
import { toAbsoluteUrl } from "@/utils/url"

export function PostShareMenu({ title, url }: { title: string; url: string }) {
  const isClient = useIsClient()
  const origin = isClient ? window.location.origin : SITE_INFO.url
  const canShare = isClient && "share" in navigator

  const absoluteUrl = useMemo(() => toAbsoluteUrl(url, origin), [origin, url])

  const urlEncoded = encodeURIComponent(absoluteUrl)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="size-7 border-none active:scale-none"
          variant="secondary"
          size="icon-sm"
        >
          <ShareIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-fit"
        alignOffset={-6}
        collisionPadding={8}
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        <DropdownMenuItem
          onClick={() => {
            copyText(absoluteUrl)
            toast.success("Link copied")
          }}
        >
          <LinkIcon />
          Copy link
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <a
            href={`https://x.com/intent/tweet?url=${urlEncoded}`}
            target="_blank"
            rel="noopener"
          >
            <Icons.x />
            Share on X
          </a>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite?url=${urlEncoded}`}
            target="_blank"
            rel="noopener"
          >
            <Icons.linkedin />
            Share on LinkedIn
          </a>
        </DropdownMenuItem>

        {canShare && (
          <DropdownMenuItem
            onClick={(e) => {
              e.preventDefault() // Prevent the menu from closing
              navigator.share({ title, url: absoluteUrl }).catch(() => {})
            }}
          >
            <EllipsisIcon />
            Other app
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
