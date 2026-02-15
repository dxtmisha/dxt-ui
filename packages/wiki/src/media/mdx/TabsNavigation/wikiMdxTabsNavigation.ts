import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import tabsNavigationEn from './tabsNavigation.en.mdx'
import tabsNavigationRu from './tabsNavigation.ru.mdx'
import vModelEn from './v-model.en.mdx'
import vModelRu from './v-model.ru.mdx'

/**
 * MDX files for TabsNavigation component
 *
 * MDX файлы для компонента TabsNavigation
 */
export const wikiMdxTabsNavigation: StorybookComponentsMdxItem = {
  name: 'TabsNavigation',
  descriptions: {
    'tabsNavigation': {
      en: tabsNavigationEn,
      ru: tabsNavigationRu
    },
    'v-model': {
      en: vModelEn,
      ru: vModelRu
    }
  }
}
