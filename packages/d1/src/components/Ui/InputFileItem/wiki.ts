import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { InputFileItemWikiData } from './wikiData'

export const InputFileItemWikiStorybook = new WikiStorybook(
  InputFileItemWikiData.component,
  InputFileItemWikiData.props,
  InputFileItemWikiData.defaults,
  InputFileItemWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
