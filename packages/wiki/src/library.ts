import { WikiStorybookDescriptions } from './classes/WikiStorybookDescriptions'

import { wikiDescriptions } from './media/descriptions/wikiDescriptions'
import { wikiMdx } from './media/mdx/wikiMdx'

WikiStorybookDescriptions.setWiki(
  wikiDescriptions,
  wikiMdx
)

export * from './library-lite'
