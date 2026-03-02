import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { FieldWikiData } from './wikiData'

export const FieldWikiStorybook = new WikiStorybook(
  FieldWikiData.component,
  FieldWikiData.props,
  FieldWikiData.defaults,
  FieldWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
