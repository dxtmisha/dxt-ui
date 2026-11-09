import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { ComponentOutletWikiData } from './wikiData'

export const ComponentOutletWikiStorybook = new WikiStorybook(
  ComponentOutletWikiData.component,
  ComponentOutletWikiData.props,
  ComponentOutletWikiData.defaults,
  ComponentOutletWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
