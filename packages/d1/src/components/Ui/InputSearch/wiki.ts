import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { InputSearchWikiData } from './wikiData'

export const InputSearchWikiStorybook = new WikiStorybook(
  InputSearchWikiData.component,
  InputSearchWikiData.props,
  InputSearchWikiData.defaults,
  InputSearchWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
