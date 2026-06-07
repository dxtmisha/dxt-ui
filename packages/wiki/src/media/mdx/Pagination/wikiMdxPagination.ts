import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import paginationEn from './pagination.en.mdx'
import paginationRu from './pagination.ru.mdx'
import eventsEn from './events.en.mdx'
import eventsRu from './events.ru.mdx'
import moreEn from './more.en.mdx'
import moreRu from './more.ru.mdx'

/**
 * MDX files for Pagination component
 *
 * MDX файлы для компонента Pagination
 */
export const wikiMdxPagination: StorybookComponentsMdxItem = {
  name: 'Pagination',
  descriptions: {
    pagination: {
      en: paginationEn,
      ru: paginationRu
    },
    events: {
      en: eventsEn,
      ru: eventsRu
    },
    more: {
      en: moreEn,
      ru: moreRu
    }
  }
}
