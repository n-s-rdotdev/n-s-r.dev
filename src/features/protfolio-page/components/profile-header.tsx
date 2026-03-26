import { Block, BlockContent } from "@/components/block"
import { TextFlip } from "@/components/ui/text-flip"
import { USER } from "../data/user"

export function ProfileHeader() {

  return (
    <Block>
      <BlockContent className="flex flex-col justify-center items-center ">
        <h1 className="text-3xl font-medium text-center text-muted-foreground">
          {USER.firstName}{" "}
          <span className="text-foreground">{USER.lastName}</span>
        </h1>
        <TextFlip
          className="font-pixel-square text-sm text-balance text-muted-foreground"
          variants={{
            initial: { y: 10, opacity: 0 },
            animate: { y: -1, opacity: 1 },
            exit: { y: -10, opacity: 0 },
          }}
          interval={1.5}
        >
          {USER.flipSentences}
        </TextFlip>
      </BlockContent>
    </Block>

  )
}