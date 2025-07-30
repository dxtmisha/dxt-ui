import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import basicEn from './basic.en.mdx'
import basicRu from './basic.ru.mdx'
import slotBodyEn from './slot.body.en.mdx'
import slotBodyRu from './slot.body.ru.mdx'

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
    'slot.body': {
      en: slotBodyEn,
      ru: slotBodyRu
    }
  }
}
