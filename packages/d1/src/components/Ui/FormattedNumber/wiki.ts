import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { FormattedNumberWikiData } from './wikiData'

export const FormattedNumberWikiStorybook = new WikiStorybook(
  FormattedNumberWikiData.component,
  FormattedNumberWikiData.props,
  FormattedNumberWikiData.defaults,
  FormattedNumberWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
