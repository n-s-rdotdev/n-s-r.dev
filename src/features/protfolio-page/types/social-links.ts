
export type SocialLinkIcon =
  /** Icon key used to render the position category in the UI. */
  "github" | "linkedin" | "x"

export type SocialLink = {
  /** Icon image URL (absolute or path under /public) shown beside the title. */
  icon: SocialLinkIcon
  title: string
  /** Optional handle/username or subtitle displayed under the title. */
  subtitle?: string
  /** External profile URL opened when the item is clicked. */
  href: string
}
