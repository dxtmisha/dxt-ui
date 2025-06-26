import type { StorybookArgsToList } from '../../types/storybookTypes'

import { wikiStatus } from './wikiStatus'
import { wikiStyle } from './wikiStyle'

import { wikiImage } from './wikiImage'

export const wiki: StorybookArgsToList = {
  ...wikiStatus,
  ...wikiStyle,

  ...wikiImage
}
