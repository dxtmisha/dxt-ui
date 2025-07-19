import type { StorybookComponentsMdx } from '../../types/storybookTypes'

import { wikiMdxStyle } from './style/wikiMdxStyle'
import { wikiMdxSlot } from './slot/wikiMdxSlot'

import { wikiMdxButton } from './Button/wikiMdxButton'
import { wikiMdxIcon } from './Icon/wikiMdxIcon'
import { wikiMdxImage } from './Image/wikiMdxImage'
import { wikiMdxProgress } from './Progress/wikiMdxProgress'
import { wikiMdxRipple } from './Ripple/wikiMdxRipple'
import { wikiMdxSkeleton } from './Skeleton/wikiMdxSkeleton'

export const wikiMdx: StorybookComponentsMdx = [
  wikiMdxStyle,
  wikiMdxSlot,

  wikiMdxButton,
  wikiMdxIcon,
  wikiMdxImage,
  wikiMdxProgress,
  wikiMdxRipple,
  wikiMdxSkeleton
]
