import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { InputPhoneDialCodeWikiData } from './wikiData'

export const InputPhoneDialCodeWikiStorybook = new WikiStorybook(
  InputPhoneDialCodeWikiData.component,
  InputPhoneDialCodeWikiData.props,
  InputPhoneDialCodeWikiData.defaults,
  InputPhoneDialCodeWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
