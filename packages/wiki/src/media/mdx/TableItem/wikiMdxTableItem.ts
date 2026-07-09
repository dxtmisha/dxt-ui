import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import tableItemEn from './tableItem.en.mdx'
import tableItemRu from './tableItem.ru.mdx'
import slotsEn from './slots.en.mdx'
import slotsRu from './slots.ru.mdx'

/**
 * MDX files for TableItem component
 *
 * MDX файлы для компонента TableItem
 */
export const wikiMdxTableItem: StorybookComponentsMdxItem = {
  name: 'TableItem',
  descriptions: {
    tableItem: {
      en: tableItemEn,
      ru: tableItemRu
    },
    slots: {
      en: slotsEn,
      ru: slotsRu
    }
  }
}
