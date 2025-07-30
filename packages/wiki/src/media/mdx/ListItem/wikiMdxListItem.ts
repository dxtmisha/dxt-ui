import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import basicEn from './basic.en.mdx'
import basicRu from './basic.ru.mdx'
import fillEn from './fill.en.mdx'
import fillRu from './fill.ru.mdx'
import slotBodyEn from './slot.body.en.mdx'
import slotBodyRu from './slot.body.ru.mdx'
import slotTrailingEn from './slot.trailing.en.mdx'
import slotTrailingRu from './slot.trailing.ru.mdx'

/**
 * MDX files for ListItem component
 *
 * MDX файлы для компонента ListItem
 */
export const wikiMdxListItem: StorybookComponentsMdxItem = {
  name: 'ListItem',
  descriptions: {
    'basic': {
      en: basicEn,
      ru: basicRu
    },
    'fill': {
      en: fillEn,
      ru: fillRu
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
