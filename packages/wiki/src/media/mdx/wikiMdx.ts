import type { StorybookComponentsMdx } from '../../types/storybookTypes'

import { wikiMdxStyle } from './style/wikiMdxStyle'
import { wikiMdxSlot } from './slot/wikiMdxSlot'

import { wikiMdxIcon } from './Icon/wikiMdxIcon'
import { wikiMdxImage } from './Image/wikiMdxImage'
import { wikiMdxRipple } from './Ripple/wikiMdxRipple'
import { wikiMdxSkeleton } from './Skeleton/wikiMdxSkeleton'

export const wikiMdx: StorybookComponentsMdx = [
  wikiMdxStyle,
  wikiMdxSlot,

  wikiMdxIcon,
  wikiMdxImage,
  wikiMdxRipple,
  wikiMdxSkeleton
]
