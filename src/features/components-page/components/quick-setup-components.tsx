import { Block, BlockContent, BlockDescription, BlockSubHeader } from "@/components/block";
import { ComponentIcon } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import { getDocsByCategory } from "@/features/doc/data/documents";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function QuickSetupComponents() {
  const posts = getDocsByCategory("components")
  return (
    <Block>
      <BlockSubHeader>
        Quick Setup
        <BlockDescription>
          Setup tools with a single command and get started with your project in no time.
        </BlockDescription>
      </BlockSubHeader>
      <Separator />
      <BlockContent className="bg-accent/20">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
          {posts
            .slice()
            .sort((a, b) =>
              a.metadata.title.localeCompare(b.metadata.title, "en", {
                sensitivity: "base",
              })
            )
            .map((post) => (
              <Link
                key={post.slug}
                href={`/components/${post.slug}`}
                className={cn(
                  "group flex items-center gap-4 p-4 transition-[background-color] ease-out bg-background hover:bg-accent/30 rounded border",
                )}
              >
                <div className="relative flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-edge ring-offset-1 ring-offset-background">
                  <ComponentIcon
                    className="pointer-events-none size-4 text-muted-foreground"
                    variant={post.slug}
                  />
                  {post.metadata.new && (
                    <span className="absolute -top-1 -right-1 flex items-center justify-center">
                      <span className="flex size-2 rounded-sm bg-info ring-1 ring-background" />
                      <span className="sr-only">New</span>
                    </span>
                  )}
                </div>

                <h2 className="line-clamp-1 leading-snug font-medium text-balance">
                  {post.metadata.title}
                </h2>
              </Link>
            ))}
        </div>
      </BlockContent>
      <Separator />
    </Block>
  )
}