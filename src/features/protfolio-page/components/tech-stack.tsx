import ComponentWrapper from '@/components/component-wrapper'
import React from 'react'
import { TECH_STACK } from '../data/tech-stack'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import Image from 'next/image'

export function TechStack() {
  return (
    <>
      <div className="w-full h-full border-b">
        <ComponentWrapper className="px-4 py-2">
          <h2 className="text-2xl font-medium">Tech Stack</h2>
        </ComponentWrapper>
      </div>
      <div className="w-full h-full border-b">
        <ComponentWrapper className="p-4">
          <ul className="flex flex-wrap gap-4 select-none">
            {TECH_STACK.map((tech) => {
              return (
                <li key={tech.key} className="flex">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={tech.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={tech.title}
                      >
                        {tech.theme ? (
                          <>
                            <Image
                              src={`https://assets.chanhdai.com/images/tech-stack-icons/${tech.key}-light.svg`}
                              alt={`${tech.title} light icon`}
                              width={32}
                              height={32}
                              className="hidden [html.light_&]:block"
                              unoptimized
                            />
                            <Image
                              src={`https://assets.chanhdai.com/images/tech-stack-icons/${tech.key}-dark.svg`}
                              alt={`${tech.title} dark icon`}
                              width={32}
                              height={32}
                              className="hidden [html.dark_&]:block"
                              unoptimized
                            />
                          </>
                        ) : (
                          <Image
                            src={`https://assets.chanhdai.com/images/tech-stack-icons/${tech.key}.svg`}
                            alt={`${tech.title} icon`}
                            width={32}
                            height={32}
                            unoptimized
                          />
                        )}
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{tech.title}</p>
                    </TooltipContent>
                  </Tooltip>
                </li>
              )
            })}
          </ul>
        </ComponentWrapper>
      </div>
    </>
  )
}
