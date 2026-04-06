import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { InputWikiData } from './wikiData'

export const InputWikiStorybook = new WikiStorybook(
  InputWikiData.component,
  InputWikiData.props,
  InputWikiData.defaults,
  InputWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
