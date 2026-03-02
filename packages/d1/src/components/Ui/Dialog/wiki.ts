import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { DialogWikiData } from './wikiData'

export const DialogWikiStorybook = new WikiStorybook(
  DialogWikiData.component,
  DialogWikiData.props,
  DialogWikiData.defaults,
  DialogWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
