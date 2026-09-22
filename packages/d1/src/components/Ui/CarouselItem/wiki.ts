import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { CarouselItemWikiData } from './wikiData'

export const CarouselItemWikiStorybook = new WikiStorybook(
  CarouselItemWikiData.component,
  CarouselItemWikiData.props,
  CarouselItemWikiData.defaults,
  CarouselItemWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
