import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { TechStack } from "../../types/tech-stack"
import { cn } from "@/lib/utils"

export function TechStackItem({ icon, title, href, theming }: TechStack) {
  console.log(icon)
  return (
    <Tooltip>
      <TooltipTrigger>
        <a
          href={href}
          target="_blank"
          rel="noopener"
        >
          <img src={`/tech-stack/${icon}-icon.png`} alt={title} className={cn("size-8 object-contain", theming && "dark:invert")} />
          <p className="flex-1 font-medium sr-only">{title}</p>
        </a>
      </TooltipTrigger>
      <TooltipContent>
        {title}
      </TooltipContent>
    </Tooltip>
  )
}
