import { Block, BlockContent, BlockDescription, BlockSubHeader } from '@/components/block'
import { BlockSeparator } from '@/components/block'
import { Separator as LineSeparator } from '@/components/ui/separator'
import { ComponentsHeader } from '@/features/components-page/components/components-header'
import { QuickSetupComponents } from '@/features/components-page/components/quick-setup-components'

export default function ComponentsPage() {
  return (
    <div>
      <ComponentsHeader />
      <BlockSeparator />

      <Block>
        <BlockSubHeader>
          UI Components
          <BlockDescription>
            A collection of reusable UI components that can be used across the application.
          </BlockDescription>
        </BlockSubHeader>
        <BlockContent>
          <div className="border border-dashed p-2 rounded text-center text-muted-foreground">
            UI Components are comming soon!
          </div>
        </BlockContent>
      </Block>
      <LineSeparator className="my-4" />

      <QuickSetupComponents />
    </div>
  )
}
