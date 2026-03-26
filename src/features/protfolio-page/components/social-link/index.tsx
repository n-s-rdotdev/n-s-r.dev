import { Block, BlockContent, BlockDescription, BlockSubHeader } from "@/components/block";
import { ComponentIcon } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import { getDocsByCategory } from "@/features/doc/data/documents";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SocialLinkItem } from "../social-link-item";
import { SOCIAL_LINKS } from "../../data/social-links";

export function SocialLink() {
  return (
    <Block>
      <BlockContent className="bg-accent/20 p-1" >
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3" >
          {SOCIAL_LINKS.map((link, index) => {
            return <SocialLinkItem key={index} {...link} />
          })}
        </div>
      </BlockContent>
      < Separator />
    </Block>
  )
}