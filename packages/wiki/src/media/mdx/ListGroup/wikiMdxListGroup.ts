import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import listGroupEn from './listGroup.en.mdx'
import listGroupRu from './listGroup.ru.mdx'
import slotsEn from './slots.en.mdx'
import slotsRu from './slots.ru.mdx'

/**
 * MDX files for ListGroup component
 *
 * MDX файлы для компонента ListGroup
 */
export const wikiMdxListGroup: StorybookComponentsMdxItem = {
  name: 'ListGroup',
  descriptions: {
    listGroup: {
      en: listGroupEn,
      ru: listGroupRu
    },
    slots: {
      en: slotsEn,
      ru: slotsRu
    }
  }
}
