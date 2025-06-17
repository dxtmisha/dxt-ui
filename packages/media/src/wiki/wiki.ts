import {
  type StorybookArgsToList
} from '@dxt-ui/functional'

import { wikiStatus } from './wikiStatus.ts'
import { wikiStyle } from './wikiStyle.ts'

import { wikiImage } from './wikiImage.ts'

export const wiki: StorybookArgsToList = {
  ...wikiStatus,
  ...wikiStyle,

  ...wikiImage
}
