import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { TextareaWikiData } from './wikiData'

export const TextareaWikiStorybook = new WikiStorybook(
  TextareaWikiData.component,
  TextareaWikiData.props,
  TextareaWikiData.defaults,
  TextareaWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
