"use server"

import { registryItemSchema, type RegistryItem } from "shadcn/schema"

type RegistryItemType = RegistryItem["type"]

function isRegistryItem(block: unknown): block is RegistryItem {
  return registryItemSchema.safeParse(block).success
}

export async function getAllBlockIds(
  types: RegistryItemType[] = ["registry:block"],
  categories: string[] = []
): Promise<string[]> {
  const blocks = await getAllBlocks(types, categories)
  return blocks.map((block) => block.name)
}

export async function getAllBlocks(
  types: RegistryItemType[] = ["registry:block"],
  categories: string[] = []
): Promise<RegistryItem[]> {
  const { Index } = await import("@/__registry__")

  // Collect all blocks from all styles and keep only valid registry items.
  const validatedBlocks = Object.values(Index).filter(isRegistryItem)

  return validatedBlocks.filter(
    (block) =>
      types.includes(block.type) &&
      (categories.length === 0 ||
        block.categories?.some((category) => categories.includes(category)))
  )
}
