import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { InputCodeWikiData } from './wikiData'

export const InputCodeWikiStorybook = new WikiStorybook(
  InputCodeWikiData.component,
  InputCodeWikiData.props,
  InputCodeWikiData.defaults,
  InputCodeWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
