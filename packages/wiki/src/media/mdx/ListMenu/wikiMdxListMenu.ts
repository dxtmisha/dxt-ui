import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import listMenuEn from './listMenu.en.mdx'
import listMenuRu from './listMenu.ru.mdx'
import slotsEn from './slots.en.mdx'
import slotsRu from './slots.ru.mdx'

/**
 * MDX files for ListMenu component
 *
 * MDX файлы для компонента ListMenu
 */
export const wikiMdxListMenu: StorybookComponentsMdxItem = {
  name: 'ListMenu',
  descriptions: {
    listMenu: {
      en: listMenuEn,
      ru: listMenuRu
    },
    slots: {
      en: slotsEn,
      ru: slotsRu
    }
  }
}
