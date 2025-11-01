import type { StorybookArgsToList } from '../../types/storybookTypes'

import { wikiForm } from './wikiForm'
import { wikiStatus } from './wikiStatus'
import { wikiInformation } from './wikiInformation'
import { wikiValue } from './wikiValue'
import { wikiStyle } from './wikiStyle'
import { wikiTechnical } from './wikiTechnical'
import { wikiHook } from './wikiHook'

import { wikiIconInclude } from './wikiIconInclude'

import { wikiActions } from './wikiActions'
import { wikiBadge } from './wikiBadge'
import { wikiBars } from './wikiBars'
import { wikiButton } from './wikiButton'
import { wikiChip } from './wikiChip'
import { wikiField } from './wikiField'
import { wikiIcon } from './wikiIcon'
import { wikiImage } from './wikiImage'
import { wikiInput } from './wikiInput'
import { wikiList } from './wikiList'
import { wikiListItem } from './wikiListItem'
import { wikiMask } from './wikiMask'
import { wikiMenu } from './wikiMenu'
import { wikiMotionTransform } from './wikiMotionTransform'
import { wikiProgress } from './wikiProgress'
import { wikiScrollbar } from './wikiScrollbar'
import { wikiWindow } from './wikiWindow'

export const wiki: StorybookArgsToList = {
  ...wikiForm,
  ...wikiStatus,
  ...wikiInformation,
  ...wikiValue,
  ...wikiStyle,
  ...wikiTechnical,
  ...wikiHook,

  ...wikiIconInclude,

  ...wikiActions,
  ...wikiBadge,
  ...wikiBars,
  ...wikiButton,
  ...wikiChip,
  ...wikiField,
  ...wikiIcon,
  ...wikiImage,
  ...wikiInput,
  ...wikiList,
  ...wikiListItem,
  ...wikiMask,
  ...wikiMenu,
  ...wikiMotionTransform,
  ...wikiProgress,
  ...wikiScrollbar,
  ...wikiWindow
}
