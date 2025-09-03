import type { StorybookComponentsMdx } from '../../types/storybookTypes'

import { wikiMdxEvent } from './event/wikiMdxEvent'
import { wikiMdxExpose } from './expose/wikiMdxExpose'
import { wikiMdxSlot } from './slot/wikiMdxSlot'
import { wikiMdxStyle } from './style/wikiMdxStyle'
import { wikiMdxValue } from './value/wikiMdxValue'

import { wikiMdxBadge } from './Badge/wikiMdxBadge'
import { wikiMdxBars } from './Bars/wikiMdxBars'
import { wikiMdxButton } from './Button/wikiMdxButton'
import { wikiMdxCell } from './Cell/wikiMdxCell'
import { wikiMdxChip } from './Chip/wikiMdxChip'
import { wikiMdxFieldCounter } from './FieldCounter/wikiMdxFieldCounter'
import { wikiMdxFieldMessage } from './FieldMessage/wikiMdxFieldMessage'
import { wikiMdxIcon } from './Icon/wikiMdxIcon'
import { wikiMdxImage } from './Image/wikiMdxImage'
import { wikiMdxList } from './List/wikiMdxList'
import { wikiMdxListGroup } from './ListGroup/wikiMdxListGroup'
import { wikiMdxListItem } from './ListItem/wikiMdxListItem'
import { wikiMdxListMenu } from './ListMenu/wikiMdxListMenu'
import { wikiMdxMenu } from './Menu/wikiMdxMenu'
import { wikiMdxMotionTransform } from './MotionTransform/wikiMdxMotionTransform'
import { wikiMdxProgress } from './Progress/wikiMdxProgress'
import { wikiMdxRipple } from './Ripple/wikiMdxRipple'
import { wikiMdxScrollbar } from './Scrollbar/wikiMdxScrollbar'
import { wikiMdxSkeleton } from './Skeleton/wikiMdxSkeleton'
import { wikiMdxWindow } from './Window/wikiMdxWindow'

export const wikiMdx: StorybookComponentsMdx = [
  wikiMdxEvent,
  wikiMdxExpose,
  wikiMdxSlot,
  wikiMdxStyle,
  wikiMdxValue,

  wikiMdxBadge,
  wikiMdxBars,
  wikiMdxButton,
  wikiMdxCell,
  wikiMdxChip,
  wikiMdxFieldCounter,
  wikiMdxFieldMessage,
  wikiMdxIcon,
  wikiMdxImage,
  wikiMdxList,
  wikiMdxListGroup,
  wikiMdxListItem,
  wikiMdxListMenu,
  wikiMdxMotionTransform,
  wikiMdxMenu,
  wikiMdxProgress,
  wikiMdxRipple,
  wikiMdxScrollbar,
  wikiMdxSkeleton,
  wikiMdxWindow
]
