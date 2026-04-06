import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { WindowWikiData } from './wikiData'

export const WindowWikiStorybook = new WikiStorybook(
  WindowWikiData.component,
  WindowWikiData.props,
  WindowWikiData.defaults,
  WindowWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
