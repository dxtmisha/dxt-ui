import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import headerTopEn from './headerTop.en.mdx'
import headerTopRu from './headerTop.ru.mdx'
import searchEn from './search.en.mdx'
import searchRu from './search.ru.mdx'
import slotsEn from './slots.en.mdx'
import slotsRu from './slots.ru.mdx'
import sortEn from './sort.en.mdx'
import sortRu from './sort.ru.mdx'
import stickyScrollBottomEn from './stickyScrollBottom.en.mdx'
import stickyScrollBottomRu from './stickyScrollBottom.ru.mdx'
import tableEn from './table.en.mdx'
import tableRu from './table.ru.mdx'

/**
 * MDX files for Table component
 *
 * MDX файлы для компонента Table
 */
export const wikiMdxTable: StorybookComponentsMdxItem = {
  name: 'Table',
  descriptions: {
    headerTop: {
      en: headerTopEn,
      ru: headerTopRu
    },
    stickyScrollBottom: {
      en: stickyScrollBottomEn,
      ru: stickyScrollBottomRu
    },
    slots: {
      en: slotsEn,
      ru: slotsRu
    },
    sort: {
      en: sortEn,
      ru: sortRu
    },
    search: {
      en: searchEn,
      ru: searchRu
    },
    table: {
      en: tableEn,
      ru: tableRu
    }
  }
}
