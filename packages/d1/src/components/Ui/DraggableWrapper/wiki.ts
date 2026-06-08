import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { DraggableWrapperWikiData } from './wikiData'

export const DraggableWrapperWikiStorybook = new WikiStorybook(
  DraggableWrapperWikiData.component,
  DraggableWrapperWikiData.props,
  DraggableWrapperWikiData.defaults,
  DraggableWrapperWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
