import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { ButtonWikiData } from './wikiData'

export const ButtonWikiStorybook = new WikiStorybook(
  ButtonWikiData.component,
  ButtonWikiData.props,
  ButtonWikiData.defaults,
  ButtonWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
