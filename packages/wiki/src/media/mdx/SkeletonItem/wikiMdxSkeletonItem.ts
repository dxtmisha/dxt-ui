import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import skeletonItemEn from './skeletonItem.en.mdx'
import skeletonItemRu from './skeletonItem.ru.mdx'

/**
 * MDX files for SkeletonItem component
 *
 * MDX файлы для компонента SkeletonItem
 */
export const wikiMdxSkeletonItem: StorybookComponentsMdxItem = {
  name: 'SkeletonItem',
  descriptions: {
    skeletonItem: {
      en: skeletonItemEn,
      ru: skeletonItemRu
    }
  }
}
