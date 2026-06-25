import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { AlertWikiData } from './wikiData'

export const AlertWikiStorybook = new WikiStorybook(
  AlertWikiData.component,
  AlertWikiData.props,
  AlertWikiData.defaults,
  AlertWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
