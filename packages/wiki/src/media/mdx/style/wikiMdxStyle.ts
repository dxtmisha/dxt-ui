import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import asPaletteEn from './asPalette.en.mdx'
import asPaletteRu from './asPalette.ru.mdx'
import dirEn from './dir.en.mdx'
import dirRu from './dir.ru.mdx'
import isSkeletonEn from './isSkeleton.en.mdx'
import isSkeletonRu from './isSkeleton.ru.mdx'

export const wikiMdxStyle: StorybookComponentsMdxItem = {
  name: 'Style',
  descriptions: {
    asPalette: { en: asPaletteEn, ru: asPaletteRu },
    dir: { en: dirEn, ru: dirRu },
    isSkeleton: { en: isSkeletonEn, ru: isSkeletonRu }
  }
}
