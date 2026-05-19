import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { TextLabelWikiData } from './wikiData'

export const TextLabelWikiStorybook = new WikiStorybook(
  TextLabelWikiData.component,
  TextLabelWikiData.props,
  TextLabelWikiData.defaults,
  TextLabelWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
