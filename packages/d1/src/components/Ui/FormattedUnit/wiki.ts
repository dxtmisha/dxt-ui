import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { FormattedUnitWikiData } from './wikiData'

export const FormattedUnitWikiStorybook = new WikiStorybook(
  FormattedUnitWikiData.component,
  FormattedUnitWikiData.props,
  FormattedUnitWikiData.defaults,
  FormattedUnitWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
