import type { StorybookArgsToList } from '../../types/storybookTypes'

import { wikiStatus } from './wikiStatus'
import { wikiValue } from './wikiValue'
import { wikiStyle } from './wikiStyle'

import { wikiIcon } from './wikiIcon'
import { wikiImage } from './wikiImage'

export const wiki: StorybookArgsToList = {
  ...wikiStatus,
  ...wikiValue,
  ...wikiStyle,

  ...wikiIcon,
  ...wikiImage
}
