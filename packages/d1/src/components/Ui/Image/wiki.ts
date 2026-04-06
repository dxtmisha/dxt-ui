import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { ImageWikiData } from './wikiData'

export const ImageWikiStorybook = new WikiStorybook(
  ImageWikiData.component,
  ImageWikiData.props,
  ImageWikiData.defaults,
  ImageWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
