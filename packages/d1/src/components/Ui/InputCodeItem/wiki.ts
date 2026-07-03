import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { InputCodeItemWikiData } from './wikiData'

export const InputCodeItemWikiStorybook = new WikiStorybook(
  InputCodeItemWikiData.component,
  InputCodeItemWikiData.props,
  InputCodeItemWikiData.defaults,
  InputCodeItemWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
