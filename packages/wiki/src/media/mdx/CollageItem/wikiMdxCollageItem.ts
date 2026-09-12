import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import collageItemEn from './collageItem.en.mdx'
import collageItemRu from './collageItem.ru.mdx'

/**
 * MDX files for CollageItem component
 *
 * MDX файлы для компонента CollageItem
 */
export const wikiMdxCollageItem: StorybookComponentsMdxItem = {
  name: 'CollageItem',
  descriptions: {
    collageItem: {
      en: collageItemEn,
      ru: collageItemRu
    }
  }
}
