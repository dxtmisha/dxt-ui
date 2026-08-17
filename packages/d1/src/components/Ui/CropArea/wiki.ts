import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { CropAreaWikiData } from './wikiData'

export const CropAreaWikiStorybook = new WikiStorybook(
  CropAreaWikiData.component,
  CropAreaWikiData.props,
  CropAreaWikiData.defaults,
  CropAreaWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
