import { Block, BlockContent, BlockHeader } from "@/components/block"
import { Separator } from "@/components/ui/separator"

import { TECH_STACK } from "../../data/tech-stack"
import { TechStackItem } from "./tech-stack-item"

export function TechStack() {
  return (
    <Block>
      <BlockHeader>
        Tech Stack
      </BlockHeader>
      <BlockContent className="flex flex-wrap gap-4">
        {TECH_STACK.map(({ key, ...link }) => {
          return <TechStackItem key={key} {...link} />
        })}
      </BlockContent>
      <Separator />
    </Block>
  )
}
