import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { ClientOnlyWikiData } from './wikiData'

export const ClientOnlyWikiStorybook = new WikiStorybook(
  ClientOnlyWikiData.component,
  ClientOnlyWikiData.props,
  ClientOnlyWikiData.defaults,
  ClientOnlyWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
