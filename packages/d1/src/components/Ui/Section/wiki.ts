import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { SectionWikiData } from './wikiData'

export const SectionWikiStorybook = new WikiStorybook(
  SectionWikiData.component,
  SectionWikiData.props,
  SectionWikiData.defaults,
  SectionWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
