import type { UnistTree } from "@/types/unist"

export type Transformer<Tree extends UnistTree = UnistTree> = (
  tree: Tree
) => void | Promise<void>

export type Plugin<Params extends unknown[] = []> = (
  ...params: Params
) => Transformer
