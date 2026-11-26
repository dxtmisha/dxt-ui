import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import lazyEn from './lazy.en.mdx'
import lazyRu from './lazy.ru.mdx'
import tableFlexRecordEn from './tableFlexRecord.en.mdx'
import tableFlexRecordRu from './tableFlexRecord.ru.mdx'

/**
 * MDX files for TableFlexRecord component
 *
 * MDX файлы для компонента TableFlexRecord
 */
export const wikiMdxTableFlexRecord: StorybookComponentsMdxItem = {
  name: 'TableFlexRecord',
  descriptions: {
    lazy: {
      en: lazyEn,
      ru: lazyRu
    },
    tableFlexRecord: {
      en: tableFlexRecordEn,
      ru: tableFlexRecordRu
    }
  }
}
