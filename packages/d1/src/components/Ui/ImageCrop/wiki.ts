import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { ImageCropWikiData } from './wikiData'

export const ImageCropWikiStorybook = new WikiStorybook(
  ImageCropWikiData.component,
  ImageCropWikiData.props,
  ImageCropWikiData.defaults,
  ImageCropWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
