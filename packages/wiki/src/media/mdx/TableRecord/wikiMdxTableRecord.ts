import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import tableRecordEn from './tableRecord.en.mdx'
import tableRecordRu from './tableRecord.ru.mdx'
import slotsEn from './slots.en.mdx'
import slotsRu from './slots.ru.mdx'

/**
 * MDX files for TableRecord component
 *
 * MDX файлы для компонента TableRecord
 */
export const wikiMdxTableRecord: StorybookComponentsMdxItem = {
  name: 'TableRecord',
  descriptions: {
    tableRecord: {
      en: tableRecordEn,
      ru: tableRecordRu
    },
    slots: {
      en: slotsEn,
      ru: slotsRu
    }
  }
}
