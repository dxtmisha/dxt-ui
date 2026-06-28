import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { BreadcrumbsWikiData } from './wikiData'

export const BreadcrumbsWikiStorybook = new WikiStorybook(
  BreadcrumbsWikiData.component,
  BreadcrumbsWikiData.props,
  BreadcrumbsWikiData.defaults,
  BreadcrumbsWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
