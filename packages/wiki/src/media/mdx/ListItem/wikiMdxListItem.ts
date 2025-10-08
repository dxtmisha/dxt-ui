import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import basicEn from './basic.en.mdx'
import basicRu from './basic.ru.mdx'
import fillEn from './fill.en.mdx'
import fillRu from './fill.ru.mdx'
import slotsEn from './slots.en.mdx'
import slotsRu from './slots.ru.mdx'

/**
 * MDX files for ListItem component
 *
 * MDX файлы для компонента ListItem
 */
export const wikiMdxListItem: StorybookComponentsMdxItem = {
  name: 'ListItem',
  descriptions: {
    basic: {
      en: basicEn,
      ru: basicRu
    },
    fill: {
      en: fillEn,
      ru: fillRu
    },
    slots: {
      en: slotsEn,
      ru: slotsRu
    }
  }
}
