import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { FieldLabelWikiData } from './wikiData'

export const FieldLabelWikiStorybook = new WikiStorybook(
  FieldLabelWikiData.component,
  FieldLabelWikiData.props,
  FieldLabelWikiData.defaults,
  FieldLabelWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
