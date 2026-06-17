import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { SelectableAreaWikiData } from './wikiData'

export const SelectableAreaWikiStorybook = new WikiStorybook(
  SelectableAreaWikiData.component,
  SelectableAreaWikiData.props,
  SelectableAreaWikiData.defaults,
  SelectableAreaWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
