import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { TextareaAutosizeWikiData } from './wikiData'

export const TextareaAutosizeWikiStorybook = new WikiStorybook(
  TextareaAutosizeWikiData.component,
  TextareaAutosizeWikiData.props,
  TextareaAutosizeWikiData.defaults,
  TextareaAutosizeWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
