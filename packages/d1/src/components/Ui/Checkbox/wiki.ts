import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { CheckboxWikiData } from './wikiData'

export const CheckboxWikiStorybook = new WikiStorybook(
  CheckboxWikiData.component,
  CheckboxWikiData.props,
  CheckboxWikiData.defaults,
  CheckboxWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
