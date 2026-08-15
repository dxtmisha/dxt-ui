import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { ClockDialWikiData } from './wikiData'

export const ClockDialWikiStorybook = new WikiStorybook(
  ClockDialWikiData.component,
  ClockDialWikiData.props,
  ClockDialWikiData.defaults,
  ClockDialWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
