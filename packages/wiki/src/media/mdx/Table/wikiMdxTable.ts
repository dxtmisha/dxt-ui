import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import tableEn from './table.en.mdx'
import tableRu from './table.ru.mdx'
import slotsEn from './slots.en.mdx'
import slotsRu from './slots.ru.mdx'

/**
 * MDX files for Table component
 *
 * MDX файлы для компонента Table
 */
export const wikiMdxTable: StorybookComponentsMdxItem = {
  name: 'Table',
  descriptions: {
    table: {
      en: tableEn,
      ru: tableRu
    },
    slots: {
      en: slotsEn,
      ru: slotsRu
    }
  }
}
