import type { StorybookArgsToList } from '../../types/storybookTypes'

import { wikiStatus } from './wikiStatus'
import { wikiValue } from './wikiValue'
import { wikiStyle } from './wikiStyle'
import { wikiTechnical } from './wikiTechnical'
import { wikiHook } from './wikiHook'

import { wikiBadge } from './wikiBadge'
import { wikiBars } from './wikiBars'
import { wikiButton } from './wikiButton'
import { wikiChip } from './wikiChip'
import { wikiField } from './wikiField'
import { wikiIcon } from './wikiIcon'
import { wikiImage } from './wikiImage'
import { wikiList } from './wikiList'
import { wikiListItem } from './wikiListItem'
import { wikiMenu } from './wikiMenu'
import { wikiMotionTransform } from './wikiMotionTransform'
import { wikiProgress } from './wikiProgress'
import { wikiScrollbar } from './wikiScrollbar'
import { wikiWindow } from './wikiWindow'

export const wiki: StorybookArgsToList = {
  ...wikiStatus,
  ...wikiValue,
  ...wikiStyle,
  ...wikiTechnical,
  ...wikiHook,

  ...wikiBadge,
  ...wikiBars,
  ...wikiButton,
  ...wikiChip,
  ...wikiField,
  ...wikiIcon,
  ...wikiImage,
  ...wikiList,
  ...wikiListItem,
  ...wikiMenu,
  ...wikiMotionTransform,
  ...wikiProgress,
  ...wikiScrollbar,
  ...wikiWindow
}
