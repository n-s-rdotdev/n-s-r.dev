import type { LucideProps } from "lucide-react"
import { IconBrandGithubFilled, IconBrandLinkedinFilled, IconBrandXFilled, IconCodeCircle2Filled } from "@tabler/icons-react"
import type { SocialLinkIcon } from "../../types/social-links"

const iconMap: Record<
  SocialLinkIcon,
  React.ComponentType<LucideProps>
> = {
  github: IconBrandGithubFilled,
  linkedin: IconBrandLinkedinFilled,
  x: IconBrandXFilled,
}

export function SocialLinkIcon({
  icon,
  ...props
}: {
  icon: SocialLinkIcon | undefined
} & LucideProps) {
  const IconComponent = icon ? iconMap[icon] : IconCodeCircle2Filled
  return <IconComponent {...props} />
}
