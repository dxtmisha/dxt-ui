import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import cellEn from './cell.en.mdx'
import cellRu from './cell.ru.mdx'
import slotsEn from './slots.en.mdx'
import slotsRu from './slots.ru.mdx'

/**
 * MDX files for Cell component
 *
 * MDX файлы для компонента Cell
 */
export const wikiMdxCell: StorybookComponentsMdxItem = {
  name: 'Cell',
  descriptions: {
    cell: {
      en: cellEn,
      ru: cellRu
    },
    slots: {
      en: slotsEn,
      ru: slotsRu
    }
  }
}
