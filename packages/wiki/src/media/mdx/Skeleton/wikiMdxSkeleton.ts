import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import skeletonEn from './skeleton.en.mdx'
import skeletonRu from './skeleton.ru.mdx'

import exposeIsActiveEn from './expose.isActive.en.mdx'
import exposeIsActiveRu from './expose.isActive.ru.mdx'

export const wikiMdxSkeleton: StorybookComponentsMdxItem = {
  name: 'Skeleton',
  descriptions: {
    'active': {
      en: skeletonEn,
      ru: skeletonRu
    },
    'expose.isActive': {
      en: exposeIsActiveEn,
      ru: exposeIsActiveRu
    }
  }
}
