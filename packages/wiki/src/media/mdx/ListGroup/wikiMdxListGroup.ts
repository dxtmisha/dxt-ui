import type { StorybookComponentsMdxItem } from '../../../types/storybookTypes'

import listGroupEn from './listGroup.en.mdx'
import listGroupRu from './listGroup.ru.mdx'
import slotHeadEn from './slot.head.en.mdx'
import slotHeadRu from './slot.head.ru.mdx'
import slotListEn from './slot.list.en.mdx'
import slotListRu from './slot.list.ru.mdx'

/**
 * MDX files for ListGroup component
 *
 * MDX файлы для компонента ListGroup
 */
export const wikiMdxListGroup: StorybookComponentsMdxItem = {
  name: 'ListGroup',
  descriptions: {
    'listGroup': {
      en: listGroupEn,
      ru: listGroupRu
    },
    'slot.head': {
      en: slotHeadEn,
      ru: slotHeadRu
    },
    'slot.list': {
      en: slotListEn,
      ru: slotListRu
    }
  }
}
