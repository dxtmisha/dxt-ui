import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import gridItemEn from './gridItem.en.mdx'
import gridItemRu from './gridItem.ru.mdx'

/**
 * MDX files for GridItem component
 *
 * MDX файлы для компонента GridItem
 */
export const wikiMdxGridItem: StorybookComponentsMdxItem = {
  name: 'GridItem',
  descriptions: {
    gridItem: {
      en: gridItemEn,
      ru: gridItemRu
    }
  }
}
