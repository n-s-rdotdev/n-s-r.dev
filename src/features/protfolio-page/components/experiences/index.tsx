import React from "react"

import { EXPERIENCES } from "../../data/experience"
import { ExperienceItem } from "./experience-item"
import { Block, BlockContent, BlockHeader } from "@/components/block"

export function Experiences() {
  return (
    <Block>
      <BlockHeader>
        Experiences
      </BlockHeader>

      <BlockContent className="">
        {EXPERIENCES.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </BlockContent>
    </Block>
  )
}
