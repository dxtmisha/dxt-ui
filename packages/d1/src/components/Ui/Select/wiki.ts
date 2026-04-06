import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { SelectWikiData } from './wikiData'

export const SelectWikiStorybook = new WikiStorybook(
  SelectWikiData.component,
  SelectWikiData.props,
  SelectWikiData.defaults,
  SelectWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
