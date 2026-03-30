import { SocialLinkIcon } from "@/features/protfolio-page/components/social-link/social-link-icon";
import { SOCIAL_LINKS } from "@/features/protfolio-page/data/social-links";
import { Block, BlockContent } from "./block";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import Link from "next/link";
import { Separator } from "./ui/separator";

export function SiteFooter() {
  return (
    <>
      <footer className="w-full border-y">
        <Block className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center border-x">
          <BlockContent className="w-full h-full flex flex-col items-center justify-center">
            <p className="text-sm text-muted-foreground ">Inspired by chanhdai.com / tailwindcss.com / ui.shadcn.com / vercel.com</p>
            <p className="text-sm text-muted-foreground "> Built by{" "}
              <Link href="https://x.com/n-s-rdotdev" target="_blank" rel="noopener" className="text-sm text-muted-foreground underline">@n-s-rdotdev</Link>
              . The source code is available on{" "}
              <Link href="https://github.com/n-s-rdotdev/n-s-r.dev" target="_blank" rel="noopener" className="text-sm text-muted-foreground underline">GitHub</Link>
              .
            </p>
          </BlockContent>
          <Separator />
          <BlockContent className="w-full  h-12 p-0 flex items-center justify-between ">
            <div className="flex items-center justify-center p-2">
              <h1 className="text-sm text-muted-foreground ">&copy; 2026 NSR</h1>
            </div>
            <div className="h-full flex items-center justify-center border-l">
              {
                SOCIAL_LINKS.map((link, i) => (
                  <div key={link.title} className="h-full flex items-center hover:bg-accent/30 transition-colors">
                    <Tooltip>
                      <TooltipTrigger>
                        <Link
                          href={`${link.href}?${new URLSearchParams({
                            utm_source: "n-s-r.dev",
                            utm_medium: "social",
                          })}`}
                          target="_blank"
                          rel="noopener"
                          className="flex items-center justify-center px-4"
                        >
                          <SocialLinkIcon icon={link.icon} className="size-6 text-muted-foreground hover:text-foreground" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        {link.title}
                      </TooltipContent>
                      {i < SOCIAL_LINKS.length - 1 && <Separator orientation="vertical" />}
                    </Tooltip>
                  </div>
                ))
              }
            </div>
          </BlockContent>
        </Block>
      </footer>
      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-16 sm:h-2" />
      </div>
    </>
  )
}
