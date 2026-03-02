import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { ModalWikiData } from './wikiData'

export const ModalWikiStorybook = new WikiStorybook(
  ModalWikiData.component,
  ModalWikiData.props,
  ModalWikiData.defaults,
  ModalWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
