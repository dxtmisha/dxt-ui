import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { AlertLinkWikiData } from './wikiData'

export const AlertLinkWikiStorybook = new WikiStorybook(
  AlertLinkWikiData.component,
  AlertLinkWikiData.props,
  AlertLinkWikiData.defaults,
  AlertLinkWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
