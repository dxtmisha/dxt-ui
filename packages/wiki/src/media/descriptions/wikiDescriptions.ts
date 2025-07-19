import type { StorybookComponentsDescription } from '../../types/storybookTypes'

import { wikiDescriptionsButton } from './wikiDescriptionsButton'
import { wikiDescriptionsIcon } from './wikiDescriptionsIcon'
import { wikiDescriptionsImage } from './wikiDescriptionsImage'
import { wikiDescriptionsProgress } from './wikiDescriptionsProgress'
import { wikiDescriptionsRipple } from './wikiDescriptionsRipple'
import { wikiDescriptionsSkeleton } from './wikiDescriptionsSkeleton'

export const wikiDescriptions: StorybookComponentsDescription = [
  wikiDescriptionsButton,
  wikiDescriptionsIcon,
  wikiDescriptionsImage,
  wikiDescriptionsProgress,
  wikiDescriptionsRipple,
  wikiDescriptionsSkeleton
]
