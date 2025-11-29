import type { StorybookArgsToList } from '../../types/storybookTypes'

import { wikiAria } from './wikiAria'
import { wikiForm } from './wikiForm'
import { wikiStatus } from './wikiStatus'
import { wikiInformation } from './wikiInformation'
import { wikiValue } from './wikiValue'
import { wikiStyle } from './wikiStyle'
import { wikiOption } from './wikiOption'
import { wikiTechnical } from './wikiTechnical'
import { wikiText } from './wikiText'
import { wikiHook } from './wikiHook'

import { wikiActionsInclude } from './wikiActionsInclude'
import { wikiBarsInclude } from './wikiBarsInclude'
import { wikiIconInclude } from './wikiIconInclude'
import { wikiMaskInclude } from './wikiMaskInclude'

import { wikiActions } from './wikiActions'
import { wikiBadge } from './wikiBadge'
import { wikiBars } from './wikiBars'
import { wikiButton } from './wikiButton'
import { wikiChip } from './wikiChip'
import { wikiChipGroup } from './wikiChipGroup'
import { wikiDialog } from './wikiDialog'
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
import { wikiSelect } from './wikiSelect'
import { wikiSelectValue } from './wikiSelectValue'
import { wikiWindow } from './wikiWindow'

export const wiki: StorybookArgsToList = {
  ...wikiAria,
  ...wikiForm,
  ...wikiStatus,
  ...wikiInformation,
  ...wikiValue,
  ...wikiStyle,
  ...wikiOption,
  ...wikiTechnical,
  ...wikiText,
  ...wikiHook,

  ...wikiActionsInclude,
  ...wikiBarsInclude,
  ...wikiIconInclude,
  ...wikiMaskInclude,

  ...wikiActions,
  ...wikiBadge,
  ...wikiBars,
  ...wikiButton,
  ...wikiChip,
  ...wikiChipGroup,
  ...wikiDialog,
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
  ...wikiSelect,
  ...wikiSelectValue,
  ...wikiWindow
}
