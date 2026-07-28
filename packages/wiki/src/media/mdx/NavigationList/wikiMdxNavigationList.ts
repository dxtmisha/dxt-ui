import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import navigationListEn from './navigationList.en.mdx'
import navigationListRu from './navigationList.ru.mdx'

/**
 * MDX documentation for NavigationList component
 *
 * MDX документация для компонента NavigationList
 */
export const wikiMdxNavigationList: StorybookComponentsMdxItem = {
  name: 'NavigationList',
  descriptions: {
    navigationList: {
      en: navigationListEn,
      ru: navigationListRu
    }
  }
}
