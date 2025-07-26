import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import cellEn from './cell.en.mdx'
import cellRu from './cell.ru.mdx'
import slotBodyEn from './slot.body.en.mdx'
import slotBodyRu from './slot.body.ru.mdx'
import slotTrailingEn from './slot.trailing.en.mdx'
import slotTrailingRu from './slot.trailing.ru.mdx'

/**
 * MDX files for Cell component
 *
 * MDX файлы для компонента Cell
 */
export const wikiMdxCell: StorybookComponentsMdxItem = {
  name: 'Cell',
  descriptions: {
    'cell': {
      en: cellEn,
      ru: cellRu
    },
    'slot.body': {
      en: slotBodyEn,
      ru: slotBodyRu
    },
    'slot.trailing': {
      en: slotTrailingEn,
      ru: slotTrailingRu
    }
  }
}
