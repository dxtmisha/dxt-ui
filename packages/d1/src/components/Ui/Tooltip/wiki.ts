import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { TooltipWikiData } from './wikiData'

export const TooltipWikiStorybook = new WikiStorybook(
  TooltipWikiData.component,
  TooltipWikiData.props,
  TooltipWikiData.defaults,
  TooltipWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
