"use client"

import { Block, BlockContent } from "@/components/block"
import { DotGridBackground } from "@/components/dot-grid-bg"
import { NSRMark } from "@/components/n-s-r-mark"
import { Magnet } from "@/components/react-bits/magnet"
import { useRef } from "react"

export function ProfileCover() {

	const containerRef = useRef<HTMLDivElement>(null)

	return (
		<Block>
			<BlockContent>
				<DotGridBackground ref={containerRef} className="rounded-lg border border-border/80 aspect-2/1 select-none sm:aspect-3/1 flex items-center justify-center text-black dark:text-white">
					<Magnet containerRef={containerRef} magnetStrength={6}>
						<NSRMark className="text-9xl z-10" />
					</Magnet>
				</DotGridBackground>
			</BlockContent>
		</Block>

	)
}