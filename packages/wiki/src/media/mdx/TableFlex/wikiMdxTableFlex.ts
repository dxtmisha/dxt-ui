import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import differencesEn from './differences.en.mdx'
import differencesRu from './differences.ru.mdx'
import tableFlexEn from './tableFlex.en.mdx'
import tableFlexRu from './tableFlex.ru.mdx'

/**
 * MDX files for TableFlex component
 *
 * MDX файлы для компонента TableFlex
 */
export const wikiMdxTableFlex: StorybookComponentsMdxItem = {
  name: 'TableFlex',
  descriptions: {
    differences: {
      en: differencesEn,
      ru: differencesRu
    },
    tableFlex: {
      en: tableFlexEn,
      ru: tableFlexRu
    }
  }
}
