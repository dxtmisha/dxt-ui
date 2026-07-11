import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import tableRecordEn from './tableRecord.en.mdx'
import tableRecordRu from './tableRecord.ru.mdx'
import slotsEn from './slots.en.mdx'
import slotsRu from './slots.ru.mdx'
import instructionEn from './instruction.en.mdx'
import instructionRu from './instruction.ru.mdx'
import isHeaderEn from './isHeader.en.mdx'
import isHeaderRu from './isHeader.ru.mdx'

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
    },
    instruction: {
      en: instructionEn,
      ru: instructionRu
    },
    isHeader: {
      en: isHeaderEn,
      ru: isHeaderRu
    }
  }
}
