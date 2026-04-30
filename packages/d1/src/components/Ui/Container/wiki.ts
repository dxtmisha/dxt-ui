import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { ContainerWikiData } from './wikiData'

export const ContainerWikiStorybook = new WikiStorybook(
  ContainerWikiData.component,
  ContainerWikiData.props,
  ContainerWikiData.defaults,
  ContainerWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
