import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { SwitchWikiData } from './wikiData'

export const SwitchWikiStorybook = new WikiStorybook(
  SwitchWikiData.component,
  SwitchWikiData.props,
  SwitchWikiData.defaults,
  SwitchWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
