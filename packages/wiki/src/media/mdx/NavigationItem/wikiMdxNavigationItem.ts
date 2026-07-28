import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import navigationItemEn from './navigationItem.en.mdx'
import navigationItemRu from './navigationItem.ru.mdx'

/**
 * MDX files for NavigationItem component
 *
 * MDX файлы для компонента NavigationItem
 */
export const wikiMdxNavigationItem: StorybookComponentsMdxItem = {
  name: 'NavigationItem',
  descriptions: {
    navigationItem: {
      en: navigationItemEn,
      ru: navigationItemRu
    }
  }
}
