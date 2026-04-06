import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { FieldCounterWikiData } from './wikiData'

export const FieldCounterWikiStorybook = new WikiStorybook(
  FieldCounterWikiData.component,
  FieldCounterWikiData.props,
  FieldCounterWikiData.defaults,
  FieldCounterWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
