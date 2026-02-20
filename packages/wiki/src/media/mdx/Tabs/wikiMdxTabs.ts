import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import tabsEn from './tabs.en.mdx'
import tabsRu from './tabs.ru.mdx'
import vModelEn from './v-model.en.mdx'
import vModelRu from './v-model.ru.mdx'

/**
 * MDX files for Tabs component
 *
 * MDX файлы для компонента Tabs
 */
export const wikiMdxTabs: StorybookComponentsMdxItem = {
  name: 'Tabs',
  descriptions: {
    'tabs': {
      en: tabsEn,
      ru: tabsRu
    },
    'v-model': {
      en: vModelEn,
      ru: vModelRu
    }
  }
}
