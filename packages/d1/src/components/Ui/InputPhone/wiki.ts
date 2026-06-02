import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { InputPhoneWikiData } from './wikiData'

export const InputPhoneWikiStorybook = new WikiStorybook(
  InputPhoneWikiData.component,
  InputPhoneWikiData.props,
  InputPhoneWikiData.defaults,
  InputPhoneWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
