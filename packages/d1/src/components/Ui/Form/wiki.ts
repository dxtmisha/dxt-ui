import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { FormWikiData } from './wikiData'

export const FormWikiStorybook = new WikiStorybook(
  FormWikiData.component,
  FormWikiData.props,
  FormWikiData.defaults,
  FormWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
