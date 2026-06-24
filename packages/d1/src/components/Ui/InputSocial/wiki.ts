import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { InputSocialWikiData } from './wikiData'

export const InputSocialWikiStorybook = new WikiStorybook(
  InputSocialWikiData.component,
  InputSocialWikiData.props,
  InputSocialWikiData.defaults,
  InputSocialWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
