import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import snackbarItemEn from './snackbarItem.en.mdx'
import snackbarItemRu from './snackbarItem.ru.mdx'

import componentEn from './component.en.mdx'
import componentRu from './component.ru.mdx'

import htmlEn from './html.en.mdx'
import htmlRu from './html.ru.mdx'

import eventCloseEn from './event.close.en.mdx'
import eventCloseRu from './event.close.ru.mdx'

import roleEn from './role.en.mdx'
import roleRu from './role.ru.mdx'

/**
 * MDX files for SnackbarItem component
 *
 * MDX файлы для компонента SnackbarItem
 */
export const wikiMdxSnackbarItem: StorybookComponentsMdxItem = {
  name: 'SnackbarItem',
  descriptions: {
    snackbarItem: {
      en: snackbarItemEn,
      ru: snackbarItemRu
    },
    component: {
      en: componentEn,
      ru: componentRu
    },
    html: {
      en: htmlEn,
      ru: htmlRu
    },
    eventClose: {
      en: eventCloseEn,
      ru: eventCloseRu
    },
    role: {
      en: roleEn,
      ru: roleRu
    }
  }
}
