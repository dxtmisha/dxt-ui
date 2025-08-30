import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import listEn from './list.en.mdx'
import listRu from './list.ru.mdx'
import liteEn from './lite.en.mdx'
import liteRu from './lite.ru.mdx'
import eventCloseEn from './event.close.en.mdx'
import eventCloseRu from './event.close.ru.mdx'
import slotHtmlEn from './slot.html.en.mdx'
import slotHtmlRu from './slot.html.ru.mdx'

/**
 * MDX documentation for List component
 *
 * MDX документация для компонента List
 */
export const wikiMdxList: StorybookComponentsMdxItem = {
  name: 'List',
  descriptions: {
    'list': {
      en: listEn,
      ru: listRu
    },
    'lite': {
      en: liteEn,
      ru: liteRu
    },
    'event.close': {
      en: eventCloseEn,
      ru: eventCloseRu
    },
    'slot.html': {
      en: slotHtmlEn,
      ru: slotHtmlRu
    }
  }
}
