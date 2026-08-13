import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { DropzoneWikiData } from './wikiData'

export const DropzoneWikiStorybook = new WikiStorybook(
  DropzoneWikiData.component,
  DropzoneWikiData.props,
  DropzoneWikiData.defaults,
  DropzoneWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
