import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import tabItemEn from './tabItem.en.mdx'
import tabItemRu from './tabItem.ru.mdx'

/**
 * MDX files for TabItem component
 *
 * MDX файлы для компонента TabItem
 */
export const wikiMdxTabItem: StorybookComponentsMdxItem = {
  name: 'TabItem',
  descriptions: {
    tabItem: {
      en: tabItemEn,
      ru: tabItemRu
    }
  }
}
