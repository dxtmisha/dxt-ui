import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { ActionsWikiData } from './wikiData'

export const ActionsWikiStorybook = new WikiStorybook(
  ActionsWikiData.component,
  ActionsWikiData.props,
  ActionsWikiData.defaults,
  ActionsWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
