import { ProfileCover } from "@/features/protfolio-page/components/profile-cover"
import { Separator as LineSeparator } from "@/components/ui/separator"
import { BlockSeparator } from "@/components/block"
import { ProfileHeader } from "@/features/protfolio-page/components/profile-header"
import { Overview } from "@/features/protfolio-page/components/overview"
import { SocialLink } from "@/features/protfolio-page/components/social-link"
import { WorkExperience } from "@/features/protfolio-page/components/work-experience"
import { Experiences } from "@/features/protfolio-page/components/experiences"

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

      <Experiences />
    </div>
  )
}
