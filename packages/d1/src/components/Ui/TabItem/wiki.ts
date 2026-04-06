import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { TabItemWikiData } from './wikiData'

export const TabItemWikiStorybook = new WikiStorybook(
  TabItemWikiData.component,
  TabItemWikiData.props,
  TabItemWikiData.defaults,
  TabItemWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
