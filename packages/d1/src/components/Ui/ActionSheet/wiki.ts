import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { ActionSheetWikiData } from './wikiData'

export const ActionSheetWikiStorybook = new WikiStorybook(
  ActionSheetWikiData.component,
  ActionSheetWikiData.props,
  ActionSheetWikiData.defaults,
  ActionSheetWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
