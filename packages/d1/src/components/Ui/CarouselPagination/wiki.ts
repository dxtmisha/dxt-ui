import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { CarouselPaginationWikiData } from './wikiData'

export const CarouselPaginationWikiStorybook = new WikiStorybook(
  CarouselPaginationWikiData.component,
  CarouselPaginationWikiData.props,
  CarouselPaginationWikiData.defaults,
  CarouselPaginationWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
