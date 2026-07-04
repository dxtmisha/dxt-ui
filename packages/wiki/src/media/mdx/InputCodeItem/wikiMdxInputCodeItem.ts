import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import inputCodeItemEn from './inputCodeItem.en.mdx'
import inputCodeItemRu from './inputCodeItem.ru.mdx'
import eventEn from './event.en.mdx'
import eventRu from './event.ru.mdx'
import exposeEn from './expose.en.mdx'
import exposeRu from './expose.ru.mdx'

/**
 * MDX files for InputCodeItem component
 *
 * MDX файлы для компонента InputCodeItem
 */
export const wikiMdxInputCodeItem: StorybookComponentsMdxItem = {
  name: 'InputCodeItem',
  descriptions: {
    inputCodeItem: {
      en: inputCodeItemEn,
      ru: inputCodeItemRu
    },
    events: {
      en: eventEn,
      ru: eventRu
    },
    expose: {
      en: exposeEn,
      ru: exposeRu
    }
  }
}
