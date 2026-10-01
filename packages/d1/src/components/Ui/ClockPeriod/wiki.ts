import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { ClockPeriodWikiData } from './wikiData'

export const ClockPeriodWikiStorybook = new WikiStorybook(
  ClockPeriodWikiData.component,
  ClockPeriodWikiData.props,
  ClockPeriodWikiData.defaults,
  ClockPeriodWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
