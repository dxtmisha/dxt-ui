import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { SnackbarWikiData } from './wikiData'

export const SnackbarWikiStorybook = new WikiStorybook(
  SnackbarWikiData.component,
  SnackbarWikiData.props,
  SnackbarWikiData.defaults,
  SnackbarWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
