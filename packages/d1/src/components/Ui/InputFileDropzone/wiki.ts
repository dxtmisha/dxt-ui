import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { InputFileDropzoneWikiData } from './wikiData'

export const InputFileDropzoneWikiStorybook = new WikiStorybook(
  InputFileDropzoneWikiData.component,
  InputFileDropzoneWikiData.props,
  InputFileDropzoneWikiData.defaults,
  InputFileDropzoneWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
