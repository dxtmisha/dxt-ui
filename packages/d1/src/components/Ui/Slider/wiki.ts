import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { SliderWikiData } from './wikiData'

export const SliderWikiStorybook = new WikiStorybook(
  SliderWikiData.component,
  SliderWikiData.props,
  SliderWikiData.defaults,
  SliderWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
