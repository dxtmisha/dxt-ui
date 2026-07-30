import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { SliderFieldWikiData } from './wikiData'

export const SliderFieldWikiStorybook = new WikiStorybook(
  SliderFieldWikiData.component,
  SliderFieldWikiData.props,
  SliderFieldWikiData.defaults,
  SliderFieldWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
