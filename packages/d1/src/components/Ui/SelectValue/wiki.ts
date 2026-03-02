import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { SelectValueWikiData } from './wikiData'

export const SelectValueWikiStorybook = new WikiStorybook(
  SelectValueWikiData.component,
  SelectValueWikiData.props,
  SelectValueWikiData.defaults,
  SelectValueWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
