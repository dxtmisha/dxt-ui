import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { AccordionWikiData } from './wikiData'

export const AccordionWikiStorybook = new WikiStorybook(
  AccordionWikiData.component,
  AccordionWikiData.props,
  AccordionWikiData.defaults,
  AccordionWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
