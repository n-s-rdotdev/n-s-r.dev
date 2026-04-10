import { Block, BlockContent } from "@/components/block"
import { Separator } from "@/components/ui/separator"

import { SOCIAL_LINKS } from "../../data/social-links"
import { SocialLinkItem } from "./social-link-item"

export function SocialLink() {
  return (
    <Block>
      <BlockContent className="bg-accent/20 p-1">
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3">
          {SOCIAL_LINKS.map((link, index) => {
            return <SocialLinkItem key={index} {...link} />
          })}
        </div>
      </BlockContent>
      <Separator />
    </Block>
  )
}
