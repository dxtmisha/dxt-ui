import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { DummyWikiData } from './wikiData'

export const DummyWikiStorybook = new WikiStorybook(
  DummyWikiData.component,
  DummyWikiData.props,
  DummyWikiData.defaults,
  DummyWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
