import { Block, BlockContent, BlockHeader } from "@/components/block";
import { Separator } from "@/components/ui/separator";
import { BlockSeparator } from "@/components/block";

export default function Page() {
  return (
    <div className="">
      <Testing />
      <BlockSeparator />
    </div>
  )
}

function Testing() {
  return (
    <Block className="">
      <BlockHeader>
        Testing
      </BlockHeader>
      <Separator />
      <BlockContent>
        Container for testing purposes. This page is used to test components and layouts without affecting the main application.
      </BlockContent>
    </Block>
  )
}