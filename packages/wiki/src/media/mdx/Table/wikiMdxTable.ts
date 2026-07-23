import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import headerTopEn from './headerTop.en.mdx'
import headerTopRu from './headerTop.ru.mdx'
import scrollBottomStickyEn from './scrollBottomSticky.en.mdx'
import scrollBottomStickyRu from './scrollBottomSticky.ru.mdx'
import slotsEn from './slots.en.mdx'
import slotsRu from './slots.ru.mdx'
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
    scrollBottomSticky: {
      en: scrollBottomStickyEn,
      ru: scrollBottomStickyRu
    },
    slots: {
      en: slotsEn,
      ru: slotsRu
    },
    table: {
      en: tableEn,
      ru: tableRu
    }
  }
}
