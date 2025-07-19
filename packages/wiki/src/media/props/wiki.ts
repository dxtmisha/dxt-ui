import type { StorybookArgsToList } from '../../types/storybookTypes'

import { wikiStatus } from './wikiStatus'
import { wikiValue } from './wikiValue'
import { wikiStyle } from './wikiStyle'

import { wikiButton } from './wikiButton'
import { wikiIcon } from './wikiIcon'
import { wikiImage } from './wikiImage'
import { wikiProgress } from './wikiProgress'

export const wiki: StorybookArgsToList = {
  ...wikiStatus,
  ...wikiValue,
  ...wikiStyle,

  ...wikiButton,
  ...wikiIcon,
  ...wikiImage,
  ...wikiProgress
}
