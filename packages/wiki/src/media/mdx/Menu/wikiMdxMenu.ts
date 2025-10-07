import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import ajaxEn from './ajax.en.mdx'
import ajaxRu from './ajax.ru.mdx'
import menuEn from './menu.en.mdx'
import menuRu from './menu.ru.mdx'
import slotsEn from './slots.en.mdx'
import slotsRu from './slots.ru.mdx'

/** MDX документация для компонента Menu */
export const wikiMdxMenu: StorybookComponentsMdxItem = {
  name: 'Menu',
  descriptions: {
    ajax: {
      en: ajaxEn,
      ru: ajaxRu
    },
    menu: {
      en: menuEn,
      ru: menuRu
    },
    slots: {
      en: slotsEn,
      ru: slotsRu
    }
  }
}
