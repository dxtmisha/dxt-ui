import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { FieldMessageWikiData } from './wikiData'

export const FieldMessageWikiStorybook = new WikiStorybook(
  FieldMessageWikiData.component,
  FieldMessageWikiData.props,
  FieldMessageWikiData.defaults,
  FieldMessageWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
