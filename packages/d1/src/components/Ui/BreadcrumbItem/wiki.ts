import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { BreadcrumbItemWikiData } from './wikiData'

export const BreadcrumbItemWikiStorybook = new WikiStorybook(
  BreadcrumbItemWikiData.component,
  BreadcrumbItemWikiData.props,
  BreadcrumbItemWikiData.defaults,
  BreadcrumbItemWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
