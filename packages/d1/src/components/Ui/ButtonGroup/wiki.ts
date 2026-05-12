import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { ButtonGroupWikiData } from './wikiData'

export const ButtonGroupWikiStorybook = new WikiStorybook(
  ButtonGroupWikiData.component,
  ButtonGroupWikiData.props,
  ButtonGroupWikiData.defaults,
  ButtonGroupWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
