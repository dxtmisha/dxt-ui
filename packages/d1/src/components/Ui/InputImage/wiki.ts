import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { InputImageWikiData } from './wikiData'

export const InputImageWikiStorybook = new WikiStorybook(
  InputImageWikiData.component,
  InputImageWikiData.props,
  InputImageWikiData.defaults,
  InputImageWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
