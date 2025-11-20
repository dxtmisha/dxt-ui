import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import ajaxEn from './ajax.en.mdx'
import ajaxRu from './ajax.ru.mdx'
import eventUpdateValueEn from './event.updateValue.en.mdx'
import eventUpdateValueRu from './event.updateValue.ru.mdx'
import exposeNavigationEn from './expose.navigation.en.mdx'
import exposeNavigationRu from './expose.navigation.ru.mdx'
import menuEn from './menu.en.mdx'
import menuRu from './menu.ru.mdx'
import navigationEn from './navigation.en.mdx'
import navigationRu from './navigation.ru.mdx'
import slotsEn from './slots.en.mdx'
import slotsRu from './slots.ru.mdx'
import slotsControlEn from './slots.control.en.mdx'
import slotsControlRu from './slots.control.ru.mdx'

/** MDX документация для компонента Menu */
export const wikiMdxMenu: StorybookComponentsMdxItem = {
  name: 'Menu',
  descriptions: {
    'ajax': {
      en: ajaxEn,
      ru: ajaxRu
    },
    'event.updateValue': {
      en: eventUpdateValueEn,
      ru: eventUpdateValueRu
    },
    'expose.navigation': {
      en: exposeNavigationEn,
      ru: exposeNavigationRu
    },
    'menu': {
      en: menuEn,
      ru: menuRu
    },
    'navigation': {
      en: navigationEn,
      ru: navigationRu
    },
    'slots': {
      en: slotsEn,
      ru: slotsRu
    },
    'slotsControl': {
      en: slotsControlEn,
      ru: slotsControlRu
    }
  }
}
