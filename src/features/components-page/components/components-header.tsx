import { Block, BlockDescription, BlockHeader } from "@/components/block";

export function ComponentsHeader() {
  return (
    <Block>
      <BlockHeader>
        Components
        <BlockDescription>
          A collection of reusable components. Trusted registry for shadcn/ui.
        </BlockDescription>
      </BlockHeader>
    </Block>
  )
}