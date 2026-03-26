import { ProfileCover } from "@/features/protfolio-page/components/profile-cover"
import { Separator as LineSeparator } from "@/components/ui/separator"
import { Block, BlockContent, BlockSeparator } from "@/components/block"
import { ProfileHeader } from "@/features/protfolio-page/components/profile-header"
import { Overview } from "@/features/protfolio-page/components/overview"
import { Experiences } from "@/features/protfolio-page/components/experiences"
import { SocialLinkItem } from "@/features/protfolio-page/components/social-link-item"
import { IconBrandGithubFilled, IconBrandLinkedinFilled } from "@tabler/icons-react"
import { Separator } from "radix-ui"
import { SocialLink } from "@/features/protfolio-page/components/social-link"


export default function Page() {
  return (
    <div className="">
      <ProfileCover />
      <LineSeparator />

      <ProfileHeader />
      <BlockSeparator />

      <Overview />
      <LineSeparator />
      <SocialLink />
      <BlockSeparator />

    </div>
  )
}
