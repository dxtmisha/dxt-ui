import type { StorybookComponentsMdx } from '../../types/storybookTypes'

import { wikiMdxEvent } from './event/wikiMdxEvent'
import { wikiMdxExpose } from './expose/wikiMdxExpose'
import { wikiMdxSlot } from './slot/wikiMdxSlot'
import { wikiMdxStyle } from './style/wikiMdxStyle'
import { wikiMdxValue } from './value/wikiMdxValue'

import { wikiMdxButton } from './Button/wikiMdxButton'
import { wikiMdxIcon } from './Icon/wikiMdxIcon'
import { wikiMdxImage } from './Image/wikiMdxImage'
import { wikiMdxProgress } from './Progress/wikiMdxProgress'
import { wikiMdxRipple } from './Ripple/wikiMdxRipple'
import { wikiMdxSkeleton } from './Skeleton/wikiMdxSkeleton'

export const wikiMdx: StorybookComponentsMdx = [
  wikiMdxEvent,
  wikiMdxExpose,
  wikiMdxSlot,
  wikiMdxStyle,
  wikiMdxValue,

  wikiMdxButton,
  wikiMdxIcon,
  wikiMdxImage,
  wikiMdxProgress,
  wikiMdxRipple,
  wikiMdxSkeleton
]
